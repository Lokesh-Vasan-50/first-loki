//! HIGHER ORDER METHOD
// * MAP
a=[1,2,3,4];

b=a.map((value)=>{
    return value*2;
})
console.log(b);

console.log(a.map((value,index)=>{
    return index;
}));


// * FILTER
let c=[15,20,6,35];
console.log(c.filter((value)=>{
    return value>15
}));


// * REDUCE
let d=[1,2,3,4];
var sum=d.reduce((value,total)=>{
    return total + value;
},5)
console.log(sum);

// * FOREACH
var co=d.forEach((value)=>{
    console.log(value*5);
})

// // * FOR OF
// let h=for(x of x){
//     return 
// }

