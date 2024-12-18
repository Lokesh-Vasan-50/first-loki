// strings //
//  const myVariable="50.09507aaa";
//  const myNumber =42;
//  const myFloat =42.05;

// length property //

// console.log(myVariable.split(""));
// console.log(myVariable.split("e"));
// console.log("like it nature".includes(ma));
// console.log("news paper".slice(5,9));
// console.log("lokivasan".indexOf("as"));
// console.log("lokivasan".lastIndexOf("as"));
// console.log("nature".toUpperCase());
// console.log("nature".toLowerCase());

// NUMBER //

// console.log(myNumber === myFloat);
// console.log(myFloat);
// console.log(Number(myVariable)+18);

// NUMBER METHODS //

// console.log(Number.isInteger(myVariable));
// console.log(Number.isInteger(42));
// console.log(Number.isInteger(42.05));
// console.log(Number.isInteger(50));

// console.log(Number.parseFloat(myVariable).toFixed(3));
// console.log(Number.parseInt(myFloat));

// console.log(myFloat);
// console.log(myFloat.toString());
// console.log(parseFloat(myVariable).toFixed(3).toString()); //CHAINING

// console.log(Number.isNaN("loki")); 
// console.log(isNaN()); // number not acspected

// MATH PROPERTIES //

// console.log(Math.PI);
// console.log(Math.trunc(Math.PI));
// console.log(Math.round(4.6));
// console.log(Math.round(4.5));
// console.log(Math.round(Math.PI));
// console.log(Math.ceil(5.1));
// console.log(Math.ceil(5.9));
// console.log(Math.floor(4.88));


// console.log(Math.pow(10,2));
// console.log(Math.pow(10,1));
// console.log(Math.min(6,8,9,3,90,55));
// console.log(Math.max(6,8,9,3,90,55));
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*100)+1);
// console.log(Math.random());

// myName="loki";
// console.log("lokivasan".charAt(Math.floor(Math.random()*9)));
// console.log(myName.charAt(Math.floor(Math.random()*myName.length)));


// IF ELSE CONDITION //

// let customerIsBanned = false;
// let viewer = "loki js full course";
// let replay;
// let finance =false;
// if(customerIsBanned){
//     replay="sorry";
// }
// else if(viewer && finance){
//     replay=`enjoy ${viewer} and finance condent`;
// }
// else if(viewer){
//     replay=`enjoy ${viewer}`;
// }
// else{
//     replay="sorry loki i am still working";
// }
// console.log(replay);

//SWITCH STATEMENT //

// switch(Math.floor(Math.random()*3)){
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     default:
//         console.log("No Match");
// }

// CONDITIONAL (TERNARY) OPERATOR  //

// const  age=20;
// const my = age<21 ? "welcome":"sorry please try again";
// console.log(my);

// let me="paper";
// let computer="paper";
// let result=
//     me!==computer
//     ?"Computer Win"
//     :me==="rock"&& computer==="paper"
//     ?"Computer Win!"
//     :me==="paper"&& computer==="scissors"
//     ?"Computer Win!"
//     :me==="scissors"&& computer==="rock"
//     ?"Computer Win!"
//     :"Player Wins";
// console.log(result);    


// let mySubcriber = alert("Hi Subscriber");
// let mySubcriber1 = confirm("Hi Subscriber");
// console.log(mySubcriber);
// console.log(mySubcriber1);
let mySubcriber2= prompt("Hi Subscriber");
// console.log(mySubcriber2 ?? "You didn't Enter Your Name"); // OR
if(mySubcriber2){
    console.log(mySubcriber2 ?? "You didn't Enter Your Name");
}
else{
    console.log("You didn't Enter Your Name");
}
console.log(mySubcriber2.trim().length);

