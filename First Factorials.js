//Multiplicative Persistence                                                          *
//*  Using the JavaScript language, have the function FirstFactorial(num) take the num   *
//*  parameter being passed and return the factorial of it (ie. if num = 4,              *
//*  return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18. 

const FirstFactorial = (num) => {
	let factorials = num;
	if(num === 1) return factorials;
	else {
		factorials = num * FirstFactorial(num-1);
	}
	return factorials;
}