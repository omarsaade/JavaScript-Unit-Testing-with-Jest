/*
theSum Function
[1]Return 0 if no number
[2]Return the numbers
[3]return 2 numbers or 3 nummbers
[4]....






*/





// const theSum = num => num;
//function name theSum ,  ex: function theSum()
// truthy falthy
// const theSum = (...numbers) => {
//     return (num1 || null) + (num2 || null) + (num3 || null) + (num4 || null);
// }



const theSum = (...numbers) => {
    return numbers.reduce((pv, pc) => pv + pc, 0)
}

//export
module.exports = theSum;

