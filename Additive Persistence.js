//Additive Persistence                                                                *
//*  Using the JavaScript language, have the function AdditivePersistence(num) take the  *
//*  num parameter being passed which will always be a positive integer and return its   *
//*  additive persistence which is the number of times you must add the digits in num    *
//*  until you reach a single digit. For example: if num is 2718 then your program       *
//*  should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.      

 const additivePersistence = (num) => {
	 let count = 0;
	 let sum = 0;
	 while(num/10 >= 1) {
		 sum += num % 10;
		 num = num/10;
	 }
	 if(sum/10 < 1) return 1;
	 else {
		 count = 1 + additivePersistence(sum);
	 }
	 return count;
 }