'use strict';
// document.addEventListener('load', init);

const init = () => {
	sum('12, -5');
	fibonacchi(7);
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
		console.log("-> number", number);
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
	console.log("-> answer", answer);
	return answer;
};

init();