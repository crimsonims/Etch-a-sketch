const top_div = document.querySelector("#container");
function create_divs(num){
    
    let no_of_squares = num * num;
    for(let i = 0;i<no_of_squares;i++){
        
            const div = document.createElement("div");
            div.classList.add('grid');
            top_div.appendChild(div)}

    
    
    
let newHeight = newWidth = 560/num;
const divs = document.querySelectorAll('.grid');
divs.forEach(element => {
    element.style.height = newHeight.toString() + "px"
    element.style.width = newWidth.toString() + "px"
      

})


}
function runProgram(){
const confirmButton = document.querySelector('#no-of-divs-confirm');
const input = document.querySelector('#no-of-divs');
confirmButton.addEventListener('click',() =>{
    const grid_value = input.value;
    input.value = '';
    while (input.value < 100){
    remove_divs();
    set_boxes_to_white();
    create_divs(grid_value);
    hover();}


})
}


function set_boxes_to_white(){
    const resetButton = document.querySelector('#reset')
    resetButton.addEventListener('click',() =>{
    
        const newdivs = document.querySelectorAll('.grid');
        newdivs.forEach(div =>{
            div.style.backgroundColor = 'white'
        })
    })}



function remove_divs(){
    const newdivs = document.querySelectorAll('.grid');
    newdivs.forEach(element =>{
        top_div.removeChild(element)
    })}
function hover(){
    const top_div = document.querySelector('#container');
    top_div.addEventListener("mouseover", (e) => {
            
        
            e.target.style.backgroundColor = 'pink';
        
        
})}



runProgram();

