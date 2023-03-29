'use strict';
// document.addEventListener('load', init);

const init = () => {
	sum('12, -5');
	fibonacchi(7);
	manhattan('1 1', '11 21');
	xeroxPath('105 4');
}

// 5.1
const sum  = (rawData) => {
	const [a, b] = rawData.split(', ');
	const sum = Number(a) + Number(b);
	console.log("-> sum", sum);
	return sum;
};

//5.2
const fibonacchi = (number) => {
	if (number === 0 || number === 1) {
		console.log("-> fibonacchi", number);
		return number;
	}
	
	const fibArr = [0, 1];
	for (let i = 0; i < number - 1; i++) {
		const lastFib = fibArr[fibArr.length - 1];
		const prevFib = fibArr[fibArr.length - 2];
		const nextFib = lastFib + prevFib;
		fibArr.push(nextFib);
	}
	const answer = fibArr[fibArr.length - 1]
	console.log("-> fibArr", fibArr);
	console.log("-> fibonacchi answer", answer);
	return answer;
};

//5.3
const manhattan = (startCoords, endCoords) => {
	const [x1, y1] = startCoords.split(' ');
	const [x2, y2] = endCoords.split(' ');
	
	const xDiff = Math.abs(x1 - x2);
	const yDiff = Math.abs(y1 - y2);
	const answer = xDiff + yDiff;
	console.log("-> manhattan answer", answer);
	return answer;
};

//5.4
const xeroxPath = (floors) => {
	let answer;
	const [currentFloorStr, xeroxFloorStr] = floors.split(' ');
	const currentFloor = Number(currentFloorStr);
	const xeroxFloor = Number(xeroxFloorStr);
	if (xeroxFloor >= currentFloor) {
		answer = xeroxFloor - currentFloor;
		console.log("-> xeroxPath answer", answer);
		return answer;
	}
	const multiplier = Math.round(currentFloor / xeroxFloor);
	const nearestXeroxFloor = xeroxFloor * multiplier;
	answer = currentFloor - nearestXeroxFloor;
	console.log("-> xeroxPath answer", answer);
	return answer;
};

init();