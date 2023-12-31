const gridSheet = document.getElementById("grid-sheet");
const addRowButton = document.getElementById("add-row-button");
const addColumnButton = document.getElementById("add-column-button");
const deleteRowButton = document.getElementById("remove-row-button");
const deleteColumnButton = document.getElementById("remove-column-button");
const colorAllButton = document.getElementById("color-all-button");
const colorUncoloredButton = document.getElementById("color-uncolored-button");
const removeColorButton = document.getElementById("remove-color-button");

//
const addRow = () => {
  const table = document.querySelector("#grid-sheet");
  const rows = table.querySelectorAll("tr");
  let numColumns = 0;
  if (rows.length > 0) {
    // always based on the first row, get the amount of td in the first row
    numColumns = rows[0].querySelectorAll("td").length;
  }
  //creating a new tr element, which is new row
  const newRow = document.createElement("tr");

  if (rows.length === 0) {
    // If it's a empty table then create the object on row 1 column 1
    const newSquare = document.createElement("td");
    newSquare.classList.add("square");
    newRow.appendChild(newSquare);
  } else {
    // Add square to all columns
    for (let i = 0; i < numColumns; i++) {
      const newSquare = document.createElement("td");
      newSquare.classList.add("square");
      newRow.appendChild(newSquare);
    }
  }

  table.appendChild(newRow);
};

const addColumn = () => {
  // select all the row "tr" at grid-sheet(the table)
  const rows = document.querySelectorAll("#grid-sheet tr");
  // if there is now rows or col existed it will just create a square on spot by calling addRow()
  if (rows.length === 0) {
    addRow();
  }
  // // Loop through each existing row ('tr') to add a new 'td' element in each row
  for (let i = 0; i < rows.length; i++) {
    //create another column
    const newSquare = document.createElement("td");
    newSquare.classList.add("square");
    // append a new 'td' element in current row(tr)
    rows[i].appendChild(newSquare);
  }
};

const deleteRow = () => {
  const table = document.querySelector("#grid-sheet");
  const rows = table.querySelectorAll("tr");

  // Check if there are rows to delete
  if (rows.length > 0) {
    // Remove the last row
    table.removeChild(rows[rows.length - 1]);
  }
};

const deleteColumn = () => {
  const table = document.querySelector("#grid-sheet");
  const rows = document.querySelectorAll("tr");

  if (rows.length > 0) {
    for (let i = 0; i < rows.length; i++) {
      // select the td in every row "tr" by looping
      const numColumns = rows[i].querySelectorAll("td");
      // remove the last td in every row
      rows[i].removeChild(numColumns[numColumns.length - 1]);
    }
  }
};

const colorContiguousCells = (cell, color) => {
  const { cellIndex } = cell;
  const { rowIndex } = cell.parentElement;

  const grid = document.getElementById("grid-sheet");

  const top = grid.children[rowIndex - 1]?.children[cellIndex];
  const left = grid.children[rowIndex]?.children[cellIndex - 1];
  const bottom = grid.children[rowIndex + 1]?.children[cellIndex];
  const right = grid.children[rowIndex]?.children[cellIndex + 1];

  if (top) {
    top.style.backgroundColor = color;
  }

  if (left) {
    left.style.backgroundColor = color;
  }

  if (bottom) {
    bottom.style.backgroundColor = color;
  }

  if (right) {
    right.style.backgroundColor = color;
  }
};

const colorAllCells = () => {
  const colorChosen = document.getElementById("color-chosen").value;
  const cells = document.querySelectorAll("td");

  cells.forEach((cell) => {
    cell.style.backgroundColor = colorChosen;
  });
};

const colorUncoloredCells = () => {
  const colorChosen = document.getElementById("color-chosen").value;
  const cells = document.querySelectorAll("td");

  cells.forEach((cell) => {
    if (cell.style.backgroundColor === "" || cell.style.backgroundColor === "transparent") {
      cell.style.backgroundColor = colorChosen;
    }
  });
};

const removeColorFromAllCells = () => {
  const cells = document.querySelectorAll("td");

  cells.forEach((cell) => {
    cell.style.backgroundColor = "transparent";
  });
};

addRowButton.addEventListener("click", addRow);
addColumnButton.addEventListener("click", addColumn);
deleteRowButton.addEventListener("click", deleteRow);
deleteColumnButton.addEventListener("click", deleteColumn);
colorAllButton.addEventListener("click", colorAllCells);
colorUncoloredButton.addEventListener("click", colorUncoloredCells);
removeColorButton.addEventListener("click", removeColorFromAllCells);

document.addEventListener(
  "click",
  (e) => {
    if (!e.target.classList.contains("square")) {
      return;
    }

    const colorChosen = document.getElementById("color-chosen").value;
    const isContiguous = document.getElementById("contiguous-mode").checked;

    if (isContiguous) {
      colorContiguousCells(e.target, colorChosen);
    }

    e.target.style.backgroundColor = colorChosen;
  },
  false
);
