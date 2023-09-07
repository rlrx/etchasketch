// initialization
let selectedsize = 16; // original value

// create button to adjust grid size
// let title = document.querySelector(".title");
// let sizeButton = document.createElement("button");
// sizeButton.textContent = "Set grid size";
// sizeButton.style.marginLeft = "auto";
// sizeButton.addEventListener("click", ()=>{
//     selectedsize = Number(window.prompt("Type the grid size you would like: "));
// });
// title.appendChild(sizeButton);


// append the grids into the div container
let gridContainer = document.querySelector(".gridcontainer"); // parent container
// let i = selectedsize;
let i = 16;
console.log(`the value of i is ${i}`);
while(i>0){
    let grid = document.createElement("div");
    grid.classList.add('grid');
    gridContainer.appendChild(grid);
    console.log(`grid ${i} created`);
    i--;
};
