// Default grid size of 16 * 16;
sizeValue = 16*16; // default grid size
constructGrid(sizeValue);

// Implementing the button to adjust grid size
let sizeButton = document.querySelector(".gridbutton");
sizeButton.addEventListener("click", () => {
    sizeValue = Number(window.prompt("Enter size of grid: "));
    sizeValue = sizeValue * sizeValue;
    // delete the existing grid and run function to create grids
    let gridContainer = document.querySelector(".gridcontainer");
    let gridsquares = document.querySelectorAll('.grid');
    gridsquares.forEach((gridsquare) => {
        gridContainer.removeChild(gridsquare);
    });
    // construct new grid based on sizeValue
    constructGrid(sizeValue);
});

// append the grids into the div container
function constructGrid(sizeValue){
    let fixedsizeValue = sizeValue;
    console.log(`grid of size ${sizeValue} squares created`);
    let gridContainer = document.querySelector(".gridcontainer"); // parent container
    while(sizeValue>0){
        let grid = document.createElement("div");
        grid.classList.add('grid');
        // flexibly adjust width and padding-bottom
        let percentage = 100/Math.sqrt(fixedsizeValue);
        grid.setAttribute('style', `width: calc(${percentage}% - 2px); padding-bottom: calc(${percentage}% - 2px);`);
        // add eventListener to the grid box
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = "pink";
        });
    // adding the element into the DOM
        gridContainer.appendChild(grid);
        sizeValue--;
    };
}
