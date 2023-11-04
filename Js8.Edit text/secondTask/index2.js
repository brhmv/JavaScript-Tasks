function sortTable(columnIndex) {
        const table = document.getElementById("sortableTable");
        const rows = Array.from(table.rows).slice(1); // Skip the header row
        const isNumeric = columnIndex === 2; // Check if the column contains numeric values

        rows.sort((rowA, rowB) => {
            
            const cellA = rowA.cells[columnIndex].textContent;
            const cellB = rowB.cells[columnIndex].textContent;
           
            if (isNumeric) 
                return parseInt(cellA) - parseInt(cellB);             
            else 
                return cellA.localeCompare(cellB);
            
        });

        for (const row of rows) 
            table.tBodies[0].appendChild(row);
        
}
    