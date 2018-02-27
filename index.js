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

let min = (centerX - radius);
let max = (centerX + radius);
let range = (max - min);
let radiusSquared = (radius * radius);

let pointsOutsideCicle = 0;
let pointsInsideCircle = 0;

function computePoint() {
	let randomX = (Math.random() * range + min);
	let randomY = (Math.random() * range + min);
	let distanceSquared = Math.pow((centerX - randomX), 2) + Math.pow((centerY - randomY), 2);
	
	if(distanceSquared <= radiusSquared) {
		pointsInsideCircle++;
		console.log('Inside : ' + '(' + randomX + ', ' + randomY +')');
	} else {
		pointsOutsideCicle++;
		console.log('Outside : ' + '(' + randomX + ', ' + randomY +')');
	}
}

for(let i = 0; i < 100; i++) {
	computePoint();
}

console.log('number of outside points = ' + pointsOutsideCicle);
console.log('number of inside points = ' + pointsInsideCircle);

let startButon = document.getElementById('startButton');



console.log('Hello, World!');

