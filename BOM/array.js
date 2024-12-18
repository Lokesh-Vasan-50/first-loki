// //! LITERAL ARRAY
// var a=['apple','banana','mango']
// // console.log(a.length)

// console.log(a[1]);
// console.log(a.at(1));

// //! CONSTRUCTOR METHOD

// let b=new Array('mengo','banana')
// console.log(b);

// //! ADDING THE ELEMENTs IN THE LAST

// console.log(b.push('loki'));
// console.log(b.length);


// let c=[];

// for(var i=0;i<=10;i++){
//     c.push(i);
//     console.log(c);
// }

//                     //** UNSHIFT */
// console.log(c.unshift('asdf'));
// console.log(c);
// console.log(c.unshift(30,72,50,'bag'));
// console.log(c);

// //** SHIFT */

// console.log(c.shift());
// console.log(c);



// //! REMOVE THE VLAUE FORM THE LAST

// console.log(c.pop());
// console.log(c);

//**------------------------------- */
 
var c=[];
var i=1;
while(i<=20){
    if(i%2==0){
        c.unshift(i)
    }
    i++
}
console.log(c);


console.log(c.join('✝'));
let q=[1,4,7,[3,5]];
console.log(q);

console.log(q.flat());

//?splice 

q.splice(2,1,5)
console.log(q);

//?slice

console.log(q.slice(0,4));







