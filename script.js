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
<<<<<<< HEAD
    // let gridpercentage = eval(`100 / ${selectedsize}`);
    // console.log(`grid percentage is ${gridpercentage}`);
    // grid.style.width = `calc(${gridpercentage}% - 2px)`;
    // grid.style.paddingBottom = `calc(${gridpercentage}% - 2px)`;
    // add eventListener to the grid box
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = "pink";
    });
    // adding the element into the DOM
=======
>>>>>>> parent of 628318f (Implemented eventListener for mouse hover)
    gridContainer.appendChild(grid);
    console.log(`grid ${i} created`);
    i--;
};
