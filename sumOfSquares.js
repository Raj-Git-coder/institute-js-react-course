let arr = [1,2,3,4];
console.log(arr);

let sumOfSquares = (arr, a, b) =>
{
    var sum = 0;
    var a = 0;
    var b = 0;
    for(let i=0; i<arr.length; i++)
    {

        if(i%2==0)
        {
            a = arr[i];
            b = arr[i+1];

            sum += a*a + b*b;
            // console.log(a , b, sum);

            sumOfSquares([],a, b);
        }
    }
    return sum;    

}
console.log(sumOfSquares(arr));
// console.log(sum);