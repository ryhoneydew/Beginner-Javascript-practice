//Have the function BitwiseOne(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length that represent binary numbers, and return a final binary string that performed the bitwise OR operation on both strings. A bitwise OR operation places a 0 in the new string where there are zeroes in both binary strings, otherwise it places a 1 in that spot. For example: if strArr is ["1001", "0100"] then your program should return the string "1101" 
//
//Use the Parameter Testing feature in the box below to test your code with different arguments.

const bitwiseOne = (strArr) => {
	let finalStr = '';
	let firstStr = strArr[0];
	let secondStr = strArr[1];
	let len = firstStr.length;
	for(let i = 0; i< len; i++) {
		if(parseInt(firstStr[i]) || parseInt(secondStr[i])) finalStr +='1';
		else finalStr += '0';
	}
	return finalStr;
}