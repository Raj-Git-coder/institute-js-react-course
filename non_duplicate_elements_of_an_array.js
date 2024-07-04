let arr = [4,5,9,11,4,7,9,11];
let arr1 = [];

for(let i=0; i<arr.length; i++)
{
    if(!arr1.includes(arr[i]))
    {
        arr1.push(arr[i]);
    }
}

console.log(arr1);
// console.log(arr1);
