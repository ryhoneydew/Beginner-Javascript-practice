//Have the function NextPalindrome(num) take the num parameter being passed and return the next largest palindromic number. The input can be any positive integer. For example: if num is 24, then your program should return 33 because that is the next largest number that is a palindrome. 
//
//Use the Parameter Testing feature in the box below to test your code with different arguments.


const nextPalindrome = (num) =>{
	while(num) {
		num = num+1;
		let numStr = num.toString();
		let reversedStr = numStr.split('').reverse().join('');
		if(numStr === reversedStr) return num;
	}
}