function sayMyname(){
    console.log("p");
    console.log("r");
    console.log("i");
    console.log("y");
    console.log("a");
}

//sayMyname()

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }


function addTwoNumbers(num1, num2){
    // let result = num1+num2
    // return result   
    return num1 + num2       // after this nothing can't be printed
}
 const result = addTwoNumbers(5, 6)
// console.log("result:", result);
 
function loginUsermessage(username){
    if(username==undefined){
        console.log("please enter the user name");
        return 
    }
    return`${username} just logged in`
}
//console.log(loginUsermessage("Priya"));
//console.log(loginUsermessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(200,300,400,5000));

const user = {
    username: "priya",
    price:199
}

function handleObject