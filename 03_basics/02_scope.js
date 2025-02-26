 let a = 200;
// const b = 20;
// var c = 30;

if (true){
    let a = 10;
    const b = 20;    
   // console.log("Inner:", 10);
     
}

 //console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username ="Priya"
    function two(){
        const website = "youtube"
        //console.log(username);
    }
     // console.log(website);
      two()
}
   one()

if (true) {
   const username ="Priya" 
   if (username === "Priya") {
    const website = "  youtube "
    console.log(username + website);
    
   }
   //console.log(website);
   
}
//console.log(username);

//+++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++++++++++
console.log(addone(5));
function addone(num){
   return + 1
}
console.log(addTwo(5));

const addTwo = function(num){
   return  num + 2
}

