let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let insidePointsCounted = document.getElementById('insidePoints');
let totalPointsCounted = document.getElementById('totalPoints');
let pi = document.getElementById('pi');

let width = canvas.width;
let height = canvas.height;

let radius = (width <= height) ? width : height;

//Draw quarterCirle
ctx.beginPath();
ctx.arc(0, 0, radius, 0, Math.PI);
ctx.stroke();

let pointsInsideCircle = 0;
let totalPoints = 0;

let maxRange = 1 + Number.EPSILON;

let outsidePointsQueue = [];
let insidePointsQueue = [];
let maxNumberOfPoints = 400;
let pointSize = 4;

function computePoint() {
	let randomX = Math.random() * maxRange;
	let randomY = Math.random() * maxRange;
	let distanceSquared = Math.pow(randomX, 2) + Math.pow(randomY, 2);
	
	let xPoint = (randomX * radius);
	let yPoint = (randomY * radius);
	
	if(distanceSquared < 1) {
		pointsInsideCircle++;
		
		insidePointsQueue.push({x: xPoint, y: yPoint});
		
		if(insidePointsQueue.length > maxNumberOfPoints) { 
			let oldPoint = insidePointsQueue.shift();
			ctx.fillStyle = "#D5FED1";
			ctx.fillRect(oldPoint.x, oldPoint.y, pointSize, pointSize);
		}
		
		ctx.fillStyle = "#17EA00";
	} else {
		outsidePointsQueue.push({x: xPoint, y: yPoint});
		
		if(outsidePointsQueue.length > maxNumberOfPoints) {
			let oldPoint = outsidePointsQueue.shift();
			ctx.fillStyle = "#FEE1E1";
			ctx.fillRect(oldPoint.x, oldPoint.y, pointSize, pointSize);
		}
		
		ctx.fillStyle = "#FF0000";
	}
	totalPoints++;
	
	ctx.fillRect(xPoint, yPoint, pointSize, pointSize);
	
	insidePointsCounted.innerHTML = 'Points Inside = ' + pointsInsideCircle;
	totalPointsCounted.innerHTML = 'Total Points = ' + totalPoints;
	pi.innerHTML = 'PI = ' + (4 * (pointsInsideCircle / totalPoints));
}

function refreshCircle() {
	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.arc(0, 0, radius, 0, Math.PI);
	ctx.stroke();
}

let play = false;
let intervalIDCompute;
let intervalIDRefresh;

let startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
	if(!play) {
		intervalIDCompute = setInterval(computePoint, 30);
		intervalIDRefresh = setInterval(refreshCircle, 50000);
		startButton.innerHTML = 'Pause Simulation';
	} else {
		clearInterval(intervalIDCompute);
		clearInterval(intervalIDRefresh);
		startButton.innerHTML = 'Start Simulation';
	}
	play = !play;
});