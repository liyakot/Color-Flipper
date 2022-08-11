const defaultColors = ['blue', 'rgb(253, 251, 108)', 'green', '#ff00ff', '#fa8072', 'rgb(127, 152, 199)', '#dda0dd', 'palegreen', '#7fffd4', 'rgb(196, 50, 50)'];
const hexSigns = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

let mainText = document.querySelector('.info');
let btn = document.querySelector('#btn');

let x = 0; //show which mode is on, 0 - default
btn.addEventListener('click', changeColor);

function changeColor() {
    if (x == 0) {
        randomDefaultColor();
    } else if (x == 'rgb') {
        randomRgbColor();
    } else {
        randomHexColor();
    }
}

//Get default-color:
function randomDefaultColor() {
    let randomColor = defaultColors[Math.floor(Math.random() * 10)];
    document.body.style.backgroundColor = randomColor;
    mainText.textContent = randomColor;
}

// Get RGB-color:
function randomRgbColor() {
    x = 'rgb';
    let redNumb = Math.floor(Math.random() * 255);
    let greenNumb = Math.floor(Math.random() * 255);
    let blueNumb = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${redNumb}, ${greenNumb}, ${blueNumb})`;
    mainText.textContent = `rgb(${redNumb}, ${greenNumb}, ${blueNumb})`;
}

//Get Hex-color:
function randomHexColor() {
    x = 'hex';
    let hexNumb = '#';
    for (let i = 0; i < 6; i++) {
        hexNumb += hexSigns[Math.floor(Math.random() * 16)]
    }
    document.body.style.backgroundColor = hexNumb;
    mainText.textContent = hexNumb;
}