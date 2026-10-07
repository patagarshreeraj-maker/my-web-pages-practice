let image = document.getElementById("image");
let imageWidth = document.getElementById("imageWidth");
let warningMessage = document.getElementById("warningMessage");

let currentWidth = 200;
let minWidth = 100;
let maxWidth = 300;

image.style.width = currentWidth + "px";
imageWidth.textContent = currentWidth + "px";

function increment(){
    if (currentWidth + 5 > maxWidth)
    {
        warningMessage.textContent = "Too Big Decrese the size of the image";
    }
    else{
        currentWidth = currentWidth + 5 ;
        image.style.width = currentWidth + "px";
        imageWidth.textContent = currentWidth + "px";
        
    }
}
function decrement(){
    if (currentWidth - 5 < minWidth)
    {
        warningMessage.textContent = "Not visible Increase the size of the image";
    }
    else{
        currentWidth = currentWidth - 5 ;
        image.style.width = currentWidth + "px";
        imageWidth.textContent = currentWidth + "px";
        warningMessage.textContent = ""
    }
}
