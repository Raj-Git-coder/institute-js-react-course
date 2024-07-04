let arr = [4, 9, 7, 5, 9, 7, 11];
let arr1 = [];

for (let i = 0; i <= arr.length; i++) 
{
    for (let j = i+1; j <= arr.length; j++)
    {
        // console.log(arr);

        // console.log(arr[i]+"->"+arr[j]);
        if(arr[i] != arr[j] && !arr1.includes(arr[i]))
        {
            // console.log(arr[i]+"->"+arr[j]);
            arr1[i] = arr[i];
            // console.log(arr);

        }
    }
    // console.log("");
}
console.log(arr1);