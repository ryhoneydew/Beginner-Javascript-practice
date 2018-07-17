//Using the JavaScript language, have the function DashInsert(str) insert dashes      *
//*  ('-') between each two odd numbers in str. For example: if str is 454793 the        *
//*  output should be 4547-9-3. Don't count zero as an odd number. 

//number. spllit('')if(num is odd && num before this num is odd) insert a "-"

const dashInsert = (str) => {
	let numberArr = str.split('');
	let render = numberArr[0].toString();
	for(let i=1; i< numberArr.length; i++) {
		let currentNum = parseInt(numberArr[i]);
		let previousNum = parseInt(numberArr[i-1]);
		if(currentNum%2 !== 0 && previousNum %2 !== 0)
			render += `-${currentNum.toString()}`;
		else render+= currentNum.toString();
	}
	return render;
}