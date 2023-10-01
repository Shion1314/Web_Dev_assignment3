const gridSheet = document.getElementById('grid-sheet');
const addRowButton = document.getElementById('add-row-button');
const addColumnButton = document.getElementById('add-column-button');
const colorChosen = document.getElementById('color-chosen');
const deleteRowButton = document.getElementById('remove-row-button');



const addRow = () => {
    const table = document.querySelector('#grid-sheet');
    const rows = table.querySelectorAll('tr');
     let numColumns=0;
     if (rows.length > 0) {
         numColumns = rows[0].querySelectorAll('td').length;
     } 

    const newRow = document.createElement('tr');

    if (rows.length === 0) {
       // If it's a empty table then create the object on row 1 column 1
        const newSquare = document.createElement('td');
        newSquare.classList.add('square');
        newRow.appendChild(newSquare);
    } else {
        // Add cells to all columns
        for (let i = 0; i < numColumns; i++) {
            const newSquare = document.createElement('td');
            newSquare.classList.add('square');
            newRow.appendChild(newSquare);
        }
    }

    table.appendChild(newRow);
}


const addColumn= ()=>{
    
    const rows = document.querySelectorAll('#grid-sheet tr');

    if(rows.length===0){
        addRow();
    }
    for (let i = 0; i < rows.length; i++) {
        //create another column 
        const newSquare = document.createElement('td');
        newSquare.classList.add('square');
        rows[i].appendChild(newSquare);
    }
}

const deleteRow = () => {
    const table = document.querySelector('#grid-sheet');
    const rows = table.querySelectorAll('tr');
    
    // Check if there are rows to delete
    if (rows.length > 0) {
        // Remove the last row
        table.removeChild(rows[rows.length - 1]);
    }
}

addRowButton.addEventListener('click', addRow);
addColumnButton.addEventListener('click', addColumn);
deleteRowButton.addEventListener('click',deleteRow);