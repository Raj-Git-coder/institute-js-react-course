// when we don't know the number of args that will be passed to the functions,
// we can use ,...argArr as placeholder array

let add = (a,b,...c) =>
{
    // console.log(a+b);
    let sum = a+b;
    for(let i=0; i<c.length; i++)
    {
        sum+=c[i];
    }
    console.log(sum);
}
add(10,20,30,40,5,6,7,8);