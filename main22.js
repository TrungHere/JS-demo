/*da hoc:
- getElementById
- getElementsByClassName
- getElementsByTagName

- querySelector() - > tra ve phan tu dau tien
- querySelectorAll() - > tra ve nhieu phan tu cung kp array
*/
var demoss= document.querySelector('#demo'); //tifm id ki hieu bang #
console.log('demoss =',demoss);

var demoall= document.querySelectorAll('.demo') // tifm class ki hieu bang .
console.log('demoall =', demoall);

var arrdemoal = Array.from(demoall);
arrdemoal.push(123);
console.log('arrdemoall =',arrdemoal);

var btnmodal = document.querySelector('[data-toggle="modal"]')
console.log('btnmodal =',btnmodal);