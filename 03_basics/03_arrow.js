const user = {
    username : "Priya",
    price : 
    999,

    welcomemessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}
// 
//console.log(this);
//user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// function chai(){
//     let username = "priya"
//     console.log(this.username);
    
// }
// chai()

// const chai= function(){
//     let username = "priya"
//    console.log(this.username);  
// }
// chai()


// const addTwo= (num1, num2) =>{
//    return num1 + num2
     
// }
//const addTwo = (num1, num2) =>   num1 + num2
//const addTwo = (num1, num2) =>  ( num1 + num2)
const addTwo = (num1, num2) =>  ( {username: "priya"} )
console.log(addTwo(3, 4)); 