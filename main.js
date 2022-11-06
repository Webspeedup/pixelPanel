let pixelCount = document.querySelector('.container')
let pixelCountNum = document.querySelector(".number-pixel")

pixelCount.addEventListener('click', countPixelElement)


function countPixelElement (){
    if(pixelCount){
        pixelCountNum.innerHTML++
    }
}

