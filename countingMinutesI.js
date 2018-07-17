//*  Counting Minutes I                                                                  *
//*  Using the JavaScript language, have the function CountingMinutesI(str) take the     *
//*  str parameter being passed which will be two times (each properly formatted with    *
//*  a colon and am or pm) separated by a hyphen and return the total number of minutes  *
//*  between the two times. The time will be in a 12 hour clock format. For example:     *
//*  if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am     *
//*  the output should be 1320.        

//split the string with "-"
//string.substring(am or pm) to decide the length. if first is am and seconde is pm. Add 12 to the difference
//the minute/60 to switch to hour


const countingMinituesI = (str) => {
	let timeArr = str.split('-');
	let minutesArr = timeArr.map(time => {
		let currentArr = time.split(':');
		let minutes = parseInt(currentArr[0])*60 + parseInt(currentArr[1].slice(0,2));
		if(currentArr[1].includes('pm')) {
			minutes += 60*12;
		} 
		return minutes;
	});
	return Math.abs(minutesArr[1] - minutesArr[0]);
} 