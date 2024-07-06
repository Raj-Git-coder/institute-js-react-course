let obj = {name:'A', age:18};
// let {name, age} = obj;
let {name:fname, age} = obj;    //extracting the elements of the obj

console.log(fname, age);