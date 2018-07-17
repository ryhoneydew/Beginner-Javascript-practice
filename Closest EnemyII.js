//Have the function ClosestEnemyII(strArr) read the matrix of numbers stored in strArr which will be a 2D matrix that contains only the integers 1, 0, or 2. Then from the position in the matrix where a 1 is, return the number of spaces either left, right, down, or up you must move to reach an enemy which is represented by a 2. You are able to wrap around one side of the matrix to the other as well. For example: if strArr is ["0000", "1000", "0002", "0002"] then this looks like the following: 
//
//0 0 0 0
//1 0 0 0
//0 0 0 2
//0 0 0 2 
//
//For this input your program should return 2 because the closest enemy (2) is 2 spaces away from the 1 by moving left to wrap to the other side and then moving down once. The array will contain any number of 0's and 2's, but only a single 1. It may not contain any 2's at all as well, where in that case your program should return a 0. 
//
//Use the Parameter Testing feature in the box below to test your code with different arguments.


const ClosestEnemyII = (strArr) => {
	let space = 0
	let positionOfOne = [];
	let positionOfEnemy = [];
	for(let i = 0; i< strArr.length; i++) {
		let item = strArr[i];
		if(item.includes('1')) {
			positionOfOne.push(i);
			positionOfOne.push(item.indexOf('1'));
		}
		if(item.includes('2')) {
			for(let j = 0; j< item.length; j++) {
				if(item[j] === '2') positionOfEnemy.push([i,j]);
			}
		}
	}
		
	if(positionOfEnemy.length) {
		for(let k=0;k<positionOfEnemy.length;k++) {
			let currentEnemy = positionOfEnemy[k];
			let horizontalSpace = Math.abs(positionOfOne[1] - currentEnemy[1]);
			if(horizontalSpace === 3) horizontalSpace=1;
			let verticalSpace = Math.abs(positionOfOne[0] - currentEnemy[0]);
			if(verticalSpace === 3) verticalSpace = 1;
			let currentSpace = horizontalSpace + verticalSpace;
			if(currentSpace < space || !space) space = currentSpace;
		}
	}
	return space;
}