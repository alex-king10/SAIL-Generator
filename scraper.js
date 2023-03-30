import axios from 'axios'
import cheerio from 'cheerio'
import { createObjectCsvWriter } from 'csv-writer';

import { removeNewlinesAndExtraSpaces } from './util.js'

const baseUrl = 'https://docs.appian.com/suite/help/23.1/Appian_Functions.html';
const functionList = [];

// Define a recursive function to scrape all pages in the "page_content" class
async function navigateLinks(url) {
	const response = await axios.get(url);
	const $ = cheerio.load(response.data);

	// Get all the links on the initial page
	const links = $('a').map((_, el) => $(el).attr('href')).get();

	// Loop through the links and visit each linked page
	let i = 0;
	const csvWriter = createObjectCsvWriter({
		path: 'output.csv',
		header: [
			{ id: 'functionName', title: 'Function Name' },
			{ id: 'paramNames', title: 'Param Names' },
			{ id: 'paramDescriptions', title: 'Param Descriptions' },
		]
	});
	for (const link of links) {
		const linkedPageUrl = new URL(link, url).href;
		const linkedPageResponse = await axios.get(linkedPageUrl);
		const $ = cheerio.load(linkedPageResponse.data);

		// Find the names of all the parameters of the function
		const paramNames = $('h2#function').next('p').find('em').text().replace(/"/g, '');
		console.log(paramNames)

		// Find the function names
		const functionName = $('#function').next('p').find('strong').text() + "()";
		// console.log(functionName);
		if (functionName != null && functionName != undefined && functionName !== "()") {

			// Find the table element with the desired class
			const table = $('table.appianTable.tablexl');

			// Find the table body element
			const tableBody = table.find('tbody');

			// Find all table row elements except for the first one
			const rows = tableBody.find('tr:not(:first-child)');

			// Loop through each row and extract the cell content
			let paramDescriptions = ""
			rows.each((index, row) => {
				const cells = $(row).find('td');
				const keyword = removeNewlinesAndExtraSpaces($(cells[0]).find('code').text()).trim();
				const description = removeNewlinesAndExtraSpaces($(cells[2]).text()).trim();
				paramDescriptions += keyword + ": " + description

				// console.log(description)
			});
			csvWriter.writeRecords([{ functionName, paramNames, paramDescriptions }]);
		}


		// if (i == 10) break;

		i++
	}
}


navigateLinks('https://docs.appian.com/suite/help/23.1/Appian_Functions.html');
