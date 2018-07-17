//Have the function RectangleArea(strArr) take the array of strings stored in strArr, which will only contain 4 elements and be in the form (x y) where x and y are both integers, and return the area of the rectangle formed by the 4 points on a Cartesian grid. The 4 elements will be in arbitrary order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program should return 6 because the width of the rectangle is 3 and the height is 2 and the area of a rectangle is equal to the width * height. 
//
//Use the Parameter Testing feature in the box below to test your code with different arguments.


const rectangleArea = (strArr) => {
	let width = 0;
	let height = 0;
	strArr.forEach(item => {
		let arr = item.split(' ').map(x=> x = x.replace(/\D/g,''));
		console.log(arr);
		if(parseInt(arr[0]) > width) width = arr[0];
		if(parseInt(arr[1]) > height) height = arr[1];
	})
	return width*height;
}