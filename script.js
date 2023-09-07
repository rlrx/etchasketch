// append the grids into the div container
let gridContainer = document.querySelector(".gridcontainer"); // parent container
let i = 16*16;
while(i>0){
    let grid = document.createElement("div");
    grid.classList.add('grid');
    gridContainer.appendChild(grid);
    console.log(`grid ${i} created`);
    i--;
};
