//Division Stringified                                                      
//Using the JavaScript language, have the function DivisionStringified(num1,num2)     *
//*  take both parameters being passed, divide num1 by num2, and return the result as    *
//*  a string with properly formatted commas. If an answer is only 3 digits long,        *
//*  return the number with no commas (ie. 2 / 3 should output "1"). For example:        *
//*  if num1 is 123456789 and num2 is 10000 the output should be "12,345". 

const divisionStringified = (num1, num2) => {
	let result = Math.round(num1/num2);
	let resultStr = result.toString();
	if(resultStr.length > 3) resultStr = resultStr.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
	return resultStr;
}

