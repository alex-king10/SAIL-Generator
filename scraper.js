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

		// Find the function names
		const functionName = $('#function').next('p').find('strong').text() + "()";

		// Find the names of all the parameters of the function
		const paramNames = functionName.slice(0, -1) + $('h2#function').next('p').find('em').text().replace(/"/g, '') + ")"

		if (functionName != null && functionName != undefined && functionName !== "()") {

			// Find the table element with the desired class
			const rows = $('table.appianTable.tablexl').find('tbody').find('tr');

			const threeOrFourRows = rows.first().find('th').eq(0).text().trim()
			const descriptionRowIndex = threeOrFourRows === "Keyword" ? 2 : 3
			const keywordRowIndex = threeOrFourRows === "Keyword" ? 0 : 1

			// Loop through each row and extract the cell content
			let paramDescriptions = ""
			rows.each((idx, row) => {
				if (idx === 0) return;
				const cells = $(row).find('td');
				const keyword = removeNewlinesAndExtraSpaces($(cells[keywordRowIndex]).find('code').text()).trim();
				const description = removeNewlinesAndExtraSpaces($(cells[descriptionRowIndex]).text()).trim();
				paramDescriptions += keyword + ': ' + description + ' '

			});
			console.log(functionName, paramNames, paramDescriptions);
			csvWriter.writeRecords([{ functionName, paramNames, paramDescriptions }]);
		}
		i++
	}
}


navigateLinks('https://docs.appian.com/suite/help/23.1/Appian_Functions.html');
