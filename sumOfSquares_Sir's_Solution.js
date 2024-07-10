let arr = [1,2,3,4];

let sumOfSquares = (arr) =>
{
    if(arr.length==0)
    {
        return 0;
    }
    else
    {
        let arr1 = [];

        // return (arr[0]*arr[0]) + sumOfSquares(arr)
        for(let i=0; i<arr.length; i++)
        {
            // arr[i];
            if(i!=0)
            {
                // return (arr[0]*arr[0]) + sumOfSquares(arr[i]);
                arr1.push(arr[i]);
            }
            
        }
        return (arr[0]*arr[0]) + sumOfSquares(arr1);

    }
}
// sumOfSquares(arr);
console.log(sumOfSquares(arr));