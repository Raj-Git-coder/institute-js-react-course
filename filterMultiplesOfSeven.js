let arr = [1,3,5,7,11,14,16,21,23,28,19,35];

let arr1 = arr.filter((val)=>
{
    if(val%7!=0)
    {
        // console.log(val);
        return true;
    }
});

console.log(arr1);