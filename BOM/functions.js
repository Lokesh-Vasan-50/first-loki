// function sum(a,b){
//     return a+b
    
// }
// console.log( sum(10,20));
// console.log( sum(15,35));

/**WITHOUT PARAMETERS AND WITHOUT ARGUMENTS AND RETURN KEYWORD*/

// function hai(){
//     return 'hello'
// }
// console.log(hai());

// /**WITH PARAMETERS AND WITH ARGUMENTS AND RETURN KEYWORD*/

//  function javascript(a,b){
//     return a+b
//  }
//  console.log(javascript(40.50,60))
 
//  /** DEFAULT PARAMETER */

//  function javascript(a,b,c,d=30){
//     return a+b+c+d
//  }
//  console.log(javascript(10,20,60,60))

 //!ANONYMOUS FUNCTION

// let a=function(){
//     console.log(10+20);
// }
// a()

// let b=function(a,c){
//     console.log(a+c);
// }
// b(2,2)

// let c=function(a,b){
//     return (a**b) 
//     return (a*b)
// }
// console.log(c(9,2));

//! IIFE

// (function(){
//     console.log("i am IIFE"); 
// })
// ()

//! ARROW FUNCTION

// let a=(a) =>{
//     return ("i am Arrow Function")
// }
// a()

// let a=(a) => 'i am Arrow Function'

// console.log(a())

// let b=(a) => a*a

// console.log(b(20))

//! HIGHER ORDER FUNCTION AND CALL BACK FUNCTION

// function hai(){
//     function hello(){
//         console.log(" i am higher order");
        
//     }
//     hello()
// }

//! GLOBLE SCOPE

// var a=10;
// let b=30;
// const c=60;
// console.log(a,b,c);

// function dis(){
//     console.log(a,b,c);
// }
// dis()

// {
//     console.log(a,b,c);
// }

// //! FUNCTION SCOPE OR LOCAL SCOPE

// function display(){
//     var d=40;
//     let e=50;
//     const f=90;
//     console.log(d,e,f);
// }
// display()

// //! BLOCK SCOPE

// {
//     var i=50;
//     let t=69;
//     const l=30;
// }
// console.log(i);

var a=20;
let b=50;
const c=40;
console.log(a,b,c);

function display(){
    console.log(a,b,c);
    
}
display()

