import React, {useEffect} from "react";

function ReadGoogleSpreadSheet ()
{
    const [data, setData] = React.useState();
    // API Key, Spreadsheet ID, and Range
		const API_KEY = 'AIzaSyB2sulyEZ9QcMCtDaCe478IjhLtJNL4QrA';
		const SPREADSHEET_ID = '1gxwppRmO4Mcy9TCIiXhVsMTdtBROWxKfuKLxdeGtbKY';
		const RANGE = 'Sheet1!A1:D'; // Adjust as needed
    // 

    // Add style to the table
    const tableStyle = () =>
    {
        let style = document.createElement('style');

        style.innerHTML = `
        table 
        {
            border-radius: 7px solid black;
        }
        `
        document.head.appendChild(style);
    }

    // Display the spreadsheet data
    const displayData = (data) =>
    {
        // console.log(data[0][0]);  // This data[0][0], displays the 1st column name of the 1st row
        // console.log(data[0].length);
        
        // Creating a table
            const table = document.createElement('table');
            const tableHead = document.createElement('thead');
            const tableRow = document.createElement('tr');

            // data[0].forEach((col) => 
            // {
            //     const tableHeading = document.createElement('th');

            //     tableHead.textContent = col;
            //     // console.log(col);
            //     tableRow.appendChild(tableHeading);
                
            // });
            for(let i=0; i<data[0].length; i++)
            {
                const tableHeading = document.createElement('th');

                tableHeading.textContent = data[0][i];
                // console.log(col);
                tableRow.appendChild(tableHeading);
            }
            tableHead.appendChild(tableRow);
            table.appendChild(tableHead);
            table.setAttribute('class', "table-warning");

            document.body.appendChild(table);
        // 
    }

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
                    // console.log(data.values);
                    tableStyle();
                    displayData(data.values);
                    // tableStyle();
                } 
                catch (error)
                {
                    console.error('Error fetching data:', error);
                }
            };
    
            fetchData();
        }, []);

        // return(
        //     <>
        //         {tableStyle()}
        //     </>
        // );

    
}

export default ReadGoogleSpreadSheet