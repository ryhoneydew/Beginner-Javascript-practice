//You will be given an array with 5 numbers. The first 2 numbers represent a range, and the next two numbers represent another range. The final number in the array is X. The goal of your program is to determine if both ranges overlap by at least X numbers. For example, in the array [4, 10, 2, 6, 3] the ranges 4 to 10 and 2 to 6 overlap by at least 3 numbers (4, 5, 6), so your program should return true.

const overlappingNums = (anArr) => {
	let count = 0;
	let rangeArr = anArr.slice(0,-1);
	if(anArr[2] < anArr[1]) {
		rangeArr.sort((a,b) => a-b);
		for(let i= rangeArr[1]; i<=rangeArr[2]; i++) {
			count++;
		}
	}
	return (count >= anArr.pop()) ? true : false;
}