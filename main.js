const pixelCount = document.querySelector('.container')
let pixelCountNum = document.querySelector(".number-pixel")
const containter = document.querySelector('.container')

const sizeEle = document.querySelector(('.size'));
const color = document.querySelector('.color');
const resetBtn = document.querySelector('.button')
let size = sizeEle.value;
let draw = false;




function addGrid(){
    containter.style.setProperty('--size', size);
    for(let i=0; i< size*size; i++){
        const div = document.createElement('div');
        div.classList.add('pixel')

        div.addEventListener("click", () => onMouseOver(div));
        div.addEventListener("click", () => onMouseDown(div));

        containter.appendChild(div)
    }
}

addGrid();

function  onMouseOver(div){
     if(!draw) return;
     div.style.backgroundColor = color.value
}

function  onMouseDown(div){
     div.style.backgroundColor = color.value
}

window.addEventListener("mousedown", function () {
    draw = true
});

window.addEventListener("mouseup", function () {
    draw = false
});


function reset() {
    containter.innerHTML = ""  ;
    addGrid()
}

resetBtn.addEventListener('click', reset)


sizeEle.addEventListener('keyup', function () {
    size = sizeEle.value;
    reset()
});





//counting pixel clicks ()
pixelCount.addEventListener('click', countPixelElement)

function countPixelElement (){
    if(pixelCount){
        pixelCountNum.innerHTML++
    }
}

