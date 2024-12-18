// function fwd(){
//     window.location.href=('./content.html');
// }

// function bud(){
//     history.go(-1);
// }

// function fwd1(){
//     window.location.href=('./content1.html')
// }

// function main(){
//     history.go(-1);
// }

let parent=document.createElement('section')
let child=document.createElement('article')
let child1=document.createElement('aside')

parent.innerHTML='<i>I am parent tag</i>'
child.innerHTML='<i>I am child tag</i>'
child1.innerHTML='<i>I am child1 tag</i>'

parent.append(child)
console.log(parent)
document.body.append(parent)
parent.replacechild(child1,child)
parent.removechild(child1)

parent.setAttribute('id','parent')
parent.setAttribute('class','parent')
parent.setAttribute('name','parent')

console.log(parent.setAttribute('id'));
console.log(parent.setAttribute('class'));
console.log(parent.setAttribute('name'));

parent.removeAttribute('id')
parent.removeAttribute('class')
parent.removeAttribute('name')
console.log(parent);




