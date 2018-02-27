let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let width = canvas.width;
let height = canvas.height;
let centerX = (width / 2);
let centerY = (height / 2);
let radius = (width <= height) ? centerX : centerY;

//Draw Circle
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, (2 * Math.PI));
ctx.stroke();

let startButon = document.getElementById('startButton');


console.log('Hello, World!');

