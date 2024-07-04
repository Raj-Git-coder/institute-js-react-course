let arr = [1,3,5,7,0,2,4,6];

let arr1 = arr.filter((val)=>
{
    if(val%2==0)
    {
        return val;
    }
});

console.log(arr1);