import React, { useState, useEffect } from 'react';

function SheetDataTable() 
{
	const [data, setData] = useState([]);

	// API Key, Spreadsheet ID, and Range
	const API_KEY = 'AIzaSyB2sulyEZ9QcMCtDaCe478IjhLtJNL4QrA';
	const SPREADSHEET_ID = '1sMEjj73Pis7HMSdetcGndx1fqqHwOIoy17C7hkKten4';
	const RANGE = 'Sheet1!A1:E'; // Adjust as needed

	// Function to create the table dynamically
	const displayData = (data) => 
	{
		const table = document.getElementById('dataTable');
		table.innerHTML = ''; // Clear existing table content

		// Create table header
		const headerRow = table.insertRow();
		data[0].forEach((header) => 
		{
			const cell = headerRow.insertCell();
			cell.textContent = header;
		});

		// Create table body
		data.slice(1).forEach((row) => 
		{
			const rowElement = table.insertRow();
			row.forEach((cellData) => 
			{
				const cell = rowElement.insertCell();
				cell.textContent = cellData;
			});
		});
	};

	// Fetch data from Google Sheets
	useEffect(() => 
	{
		const fetchData = async () => 
		{
			try 
			{
				const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`);
				const data = await response.json();
				setData(data.values);
				displayData(data.values);
			} 
			catch (error) 
			{
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
		<center><h1>Strategic Call Dashboard</h1></center>
		<table id="dataTable" class="table table-success table-striped"></table>
		</div>
	);
}

export default SheetDataTable;