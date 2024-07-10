let arr = [1,2,0,3,0,4,0,0,5];
// let temp = 0;

for(let i=0; i<arr.length; i++)
{
    if(arr[i]==0 && i!=arr.length-1)
    {
        arr[i] = arr[i+1];
        arr[i+1] = 0;
        // i--;
    }
    if(arr[i]==0 && arr[i+1]==0 && i!=arr.length-1)
    {
        for(let j=i; j<arr.length; j++)
        {
            if(arr[j]!=0)
            {
                arr[i] = arr[j];
                arr[j] = 0;
                break;
            }
        }
    }
    console.log(arr);
}
// console.log(arr);
