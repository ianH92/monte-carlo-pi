let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let inside = document.getElementById('insidePoints');
let total = document.getElementById('totalPoints');
let pi = document.getElementById('pi');

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
let totalPoints = 0;

let outsidePointsQueue = [];
let insidePointsQueue = [];
let maxNumberOfPoints = 400;
let pointSize = 4;

function computePoint() {
	let randomX = (Math.random() * range + min);
	let randomY = (Math.random() * range + min);
	let distanceSquared = Math.pow((centerX - randomX), 2) + Math.pow((centerY - randomY), 2);
	
	if(distanceSquared <= radiusSquared) {
		pointsInsideCircle++;
		insidePointsQueue.push({x: randomX, y: randomY});
		
		if(insidePointsQueue.length > maxNumberOfPoints) { 
			let oldPoint = insidePointsQueue.shift();
			ctx.clearRect(oldPoint.x, oldPoint.y, pointSize, pointSize);
		}
		
		ctx.fillStyle = "#3BE149";
	} else {
		pointsOutsideCicle++;
		outsidePointsQueue.push({x: randomX, y: randomY});
		
		if(outsidePointsQueue.length > maxNumberOfPoints) {
			let oldPoint = outsidePointsQueue.shift();
			ctx.clearRect(oldPoint.x, oldPoint.y, pointSize, pointSize);
		}
		
		ctx.fillStyle = "red";
		totalPoints++;
	}
	
	ctx.fillRect(randomX, randomY, pointSize, pointSize);
	console.log('pi = ' + (pointsInsideCircle / totalPoints));
}

setInterval(computePoint, 300);


let startButon = document.getElementById('startButton');



console.log('Hello, World!');

