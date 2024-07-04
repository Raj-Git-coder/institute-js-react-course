let arr = [4,1,3,2,0];

let n = 2;

for(let i=0; i<arr.length-1; i++)
{
    // console.log(arr[i]);
    for(let j=0; j<arr.length-n-1; j++)
    {
        if(arr[j]>arr[j+1])
        {
            let currGreatest = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = currGreatest;

        }
    }

}
console.log(arr);
