let a='sdfghj';
console.log(a);

let b=new String('fghj');
console.log(b);

console.log(a.length);
console.log(a.at(2));
console.log(a.at(-2));
console.log(a.charAt(2));
console.log(a.charAt(-2));
console.log(a.charCodeAt(2));
let c='loki     '
console.log(c.trim());
console.log(c.trimStart());
console.log(c.trimEnd());
console.log(a.toUpperCase());
console.log(b.toLowerCase());
console.log(c.concat(a));

console.log(c.substring(1,4));
console.log(c.substring(-1,4));
console.log(c.substring(1,-4));
console.log(c.substring(-1,-4));
console.log(c.slice(1,4));
console.log(c.split(""));