//try this without using 2 arrays

let arr = [1,2,0,3,0,4];
let arr1 = [], arr2 =[];
for(let i=0; i<arr.length; i++)
{
    if(arr[i]!=0)
    {
        arr1.push(arr[i]);
        // arr[i] = arr[i+1];
    }
    else
    {
        arr2.push(0)
    }
}
console.log([...arr1, ...arr2]);