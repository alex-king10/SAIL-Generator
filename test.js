import axios from 'axios'
import cheerio from 'cheerio'
import fs from 'fs';
import csv from 'csv-parser';
import { createObjectCsvWriter } from 'csv-writer';


async function test() {

	console.log("here")
	// Load the CSV data into a Map asynchronously using a Promise
	const mapPromise = new Promise((resolve, reject) => {
		const map = new Map();

		fs.createReadStream('output.csv')
			.pipe(csv())
			.on('data', (row) => {
				// Extract the values of the "Function Name", "Param Names", and "Param Descriptions" columns
				const functionName = row['Function Name'];
				const paramNames = row['Param Names'];
				const paramDescriptions = row['Param Descriptions'];

				// Add the extracted values to the map
				map.set(functionName, {
					paramNames: paramNames,
					paramDescriptions: paramDescriptions
				});
			})
			.on('end', () => {
				// Resolve the Promise with the Map object
				resolve(map);
			})
			.on('error', (error) => {
				// Reject the Promise with an error if there was a problem reading the file
				reject(error);
			});
	});

	const [map] = await Promise.all([mapPromise]);
	console.log(map.get("a!flatten()"));
}


test()