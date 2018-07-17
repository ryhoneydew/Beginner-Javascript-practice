//
//*  Number Addition                                                                     *
//*  Using the JavaScript language, have the function NumberSearch(str) take the str     *
//*  parameter, search for all the numbers in the string, add them together, then        *
//*  return that final number. For example: if str is "88Hello 3World!" the output       *
//*  should be 91. You will have to differentiate between single digit numbers and       *
//*  multiple digit numbers like in the example above. So "55Hello" and "5Hello 5"       *
//*  should return two different answers. Each string will contain at least one letter   *
//*  or symbol.    

const numberSearch = (str) => {
	//loop thru the str, if the str[i] is a num, newStr +=num;
	//if it is not a number,add a space& flag change to false
	
	let numFlag = false;
	let numStr = '';
	for(let i =0; i< str.length; i++) {
		if(/[0-9]/.test(str[i])) {
			numStr += str[i];
			numFlag = true;
		}
		if(!(/[0-9]/.test(str[i])) && numFlag) {
			numStr += ' ';
			numFlag = false;
		}
	}
	if(numStr[numStr.length -1] === ' ') {
		newStr = numStr.slice(0,-1);
	}
	let sum = newStr.split(' ')
				 	.map(item => parseInt(item))
				 	.reduce((a,b) => a+b);
	return sum;
}