// console.log('1');
// setTimeout(() => {
//     console.log('2');
// }, 1000);

// console.log('3');
// setTimeout(() => {
//     console.log('4');
// }, 0);
// console.log('5');

function add (a,b,afterAdd)
{
    console.log(a+b);
    afterAdd();
}

add(2,3,()=>
{
    console.log("after Add");
})
