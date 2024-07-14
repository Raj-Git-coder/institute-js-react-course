let arr = [5,3,9,0,8];
let arr1 = [11,22,3,44,5,66,77,8,9,0];

let mergeAndRemoveDupli = (arr, arr1) =>
{
    let mergedArr = arr1;
    // console.log(mergedArr);
    for(let i=0; i<arr.length; i++)
    {
        if(!mergedArr.includes(arr[i]))
        {
            mergedArr.push(arr[i]);
        }
    }
    console.log(mergedArr);
    
}

mergeAndRemoveDupli(arr, arr1);