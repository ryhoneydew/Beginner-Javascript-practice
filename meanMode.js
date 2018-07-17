// MeanMode                                                                            *
//*  Have the function MeanMode(arr) take the array of numbers stored in arr and         *
//*  return 1 if the mode equals the mean, 0 if they don't equal each other              *
//*  (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).     *
//*  The array will not be empty, will only contain positive integers, and will not      *
//* contain more than one mode.                                   


//The "mean" is the "average" you're used to, where you add up all the numbers and then divide by the number of numbers. The "median" is the "middle" value in the list of numbers. To find the median, your numbers have to be listed in numerical order from smallest to largest, so you may have to rewrite your list before you can find the median. The "mode" is the value that occurs most often. If no number in the list is repeated, then there is no mode for the list.

const meanMode = (arr) => {
	let mean = arr.reduce((a,b) => a+b)/arr.length;
	let mostCount = 0;
	let mode = 0;
	let numObj = {};
	arr.forEach(num => {
		if(numObj[num] === undefined) numObj[num] = 1;
		else numObj[num]++;
		if(numObj[num] > mostCount) {
			mostCount = numObj[num];
			mode = num;
		}
	});
	return (mode === mean) ? 1:0;
}