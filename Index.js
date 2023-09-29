const gridSheet = document.getElementById('grid-sheet');
const addRowButton = document.getElementById('add-row-button');
const addColumnButton = document.getElementById('add-column-button');
const colorChosen = document.getElementById('color-chosen');



 const addRow = () =>{

    const newRow = document.createElement('tr');



    // Create a new square element

    const newSquare = document.createElement('td');

    newSquare.classList.add('square');


    newRow.appendChild(newSquare);
    // Append the new row to the table

    const table = document.querySelector('#grid-sheet');

    table.appendChild(newRow);

}

const addColumn= ()=>{
    const rows = document.querySelectorAll('#grid-sheet tr');

    if(rows.length===0){
        addRow();
    }
    // Loop through all rows
    for (let i = 0; i < rows.length; i++) {
        //create another column 
        const newSquare = document.createElement('td');
        newSquare.classList.add('square');
        rows[i].appendChild(newSquare);
    }
}
addRowButton.addEventListener('click', addRow);
addColumnButton.addEventListener('click', addColumn);
