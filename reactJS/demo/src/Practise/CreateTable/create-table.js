import React from "react";

function CreateTable()
{
    const addStyle = () =>
    {
        let style = document.createElement('style');

        style.innerHTML = `
        .div_main 
        {
            margin-top: 100px;
            margin-left: 20px;
            margin-right: 20px;
        }
        .table-wrapper {
            overflow-x: hidden;
            max-height: 450px; 
            border-radius: 7px;
            /* scroll-behavior: smooth; */
            /* padding-bottom: -10px; */
            /* background-color: black; */
        }
        table 
        {
            border-radius: 7px;
        }
        
        thead tr 
        {
            position: sticky;
            top: 0;
            background-color: #f8f9fa; /* Keeps the background visible */
            z-index: 100;
            box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4); /* Adds a shadow to emphasize header */
        }

        /* Ensure vertical borders remain visible */
        tbody td 
        {
            border: 1px solid lightgrey; /* Ensures borders remain visible */
        }
        
        /* Fix bottom border-radius for the last row */
        tbody tr:last-child td:first-child 
        {
            border-bottom-left-radius: 12px; /* Left bottom rounded corner */
        }
        tbody tr:last-child td:last-child 
        {
            border-bottom-right-radius: 12px; /* Right bottom rounded corner */
        }
        `;
        document.head.appendChild(style);

    }
    const createRowsAndCells = () =>
    {
        const divMain = document.createElement('div');
        divMain.setAttribute('class', 'div_main');

        const tableWrapDiv =  document.createElement('div');
        tableWrapDiv.setAttribute('class', 'table-wrapper');

        const table = document.createElement('table');
        // table.style.borderCollapse = 'collapse'; // Optional styling
        // table.style.width = '100%';
        // table.style.border = '1px solid black';

        // Create thead
        const thead = document.createElement('thead');
        const row = document.createElement('tr');

        for (let i=0; i<3; i++)
        {
            const cell = document.createElement('th');
            cell.textContent = "Col "+(i+1);
            row.appendChild(cell);
        }
        thead.setAttribute('class', 'table-light')
        thead.appendChild(row);
        table.appendChild(thead);


        // Create tbody
        const tbody = document.createElement('tbody');

        for (let i=0; i<100; i++)
        {
            const trow = document.createElement('tr');
            for (let j=0; j<3; j++)
            {
                const cell = document.createElement('td');
                cell.textContent = "Row "+(j+1);
                trow.appendChild(cell);
            }
            tbody.appendChild(trow);
            
        }
        table.appendChild(tbody);

        // for (let i=0; i<3; i++)
        // {
        //     const rows = document.createElement('tr');

        //     for (let j=0; j<3; j++)
        //     {
        //         const cell = document.createElement('td');
        //         cell.textContent = "hi"; // without any custom text content and styling, the table won't be visible
        //                                 //with the default textContent, custom styling is needed. Otherwise the table won't be visible.

        //         // cell.style.border = '1px solid black'; // Optional styling
        //         // cell.style.padding = '8px'; // Optional padding
        //         // cell.textContent = `Row ${i + 1}, Cell ${j + 1}`; // Adding some content
        //         rows.appendChild(cell);
        //     }
        //     table.appendChild(rows);
        // }
        table.setAttribute('class', 'table table-success table-striped table-bordered border-light table-hover');

        tableWrapDiv.appendChild(table);
        divMain.appendChild(tableWrapDiv);

        document.body.appendChild(divMain);
        // console.log('hi');

    }
    return(
        <>
            {createRowsAndCells()}
            {addStyle()}
        </>
    );
}
export default CreateTable;