/*
This faulty calculator does the following:
    1. It takes two numbers as input from the user
    2. It performs wrong operations as follows:
        a. + ----> - 
        b. * ----> +
        c. - ----> /
        d. / ----> **

*/

function Sum(a,b){
    result=a+b;
    console.log(result);
}

function sub(a,b){
    result=a-b;
    console.log(result);
}

function div(a,b){
    result=a/b;
    console.log(result);
}
function mul(a,b){
    result=a*b;
    console.log(result);
}

function expo(a,b){
    result=a**b;
    console.log(result);
}

let a=100;
let b=20;

if(Math.random()<0.1){
    console.log("Addition of two number is: ")
    sub(a,b);
    console.log("Subtraction of two number is: ")
    div(a,b);
    console.log("Multiplication of two number is: ")
    Sum(a,b);
    console.log("Division of two number is: ")
    expo(a,b);
}
else{
    console.log("Addition of two number is: ")
    Sum(a,b);
    console.log("Subtraction of two number is: ")
    sub(a,b);
    console.log("Multiplication of two number is: ")
    mul(a,b);
    console.log("Division of two number is: ")
    div(a,b);
}