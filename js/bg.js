const body = document.querySelector("body");

const IMAGE_NUM = 6;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `image/${imgNumber+1}.jpg`;
    body.appendChild(image);
    image.classList.add("bgImage");
}

function getRandom(){
    const number = Math.floor(Math.random() * IMAGE_NUM);
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}
init();