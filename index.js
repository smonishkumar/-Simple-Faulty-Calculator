/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

3.It performs wrong operation 10% of the times

*/

let random=Math.random()
// console.log(random)            // Can be used to check when faulty reading is obtained
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if (random>0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)   //Use backtick(`) and not singlequote(')
}

else{
    // Perform wrong calculation
    c=obj[c]    
    console.log("The result is ${a} ${c} ${b}")    
}
    

