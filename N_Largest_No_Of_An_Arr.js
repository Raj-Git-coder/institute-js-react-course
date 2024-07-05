// take 2 args
// 1 arr and 1 nummber(eg. [2,1,3] & 2)
// find the nth(2nd) largest no. i.e 2

let arr = [5,3,9,0,8];
let num = 5;
let arr1 = [];

let returnGreatestNum = (arr, num) =>
{
    for(let i=0; i<arr.length; i++)
    {
        for(let j=0; j<arr.length-1; j++)
        {
            // console.log("comparing -> "+arr[i]+" and "+arr[j]);
            // var currLowest = 0;
            if(arr[j]>arr[j+1])
            {
                let currGreat = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = currGreat;
            }
        }
        // console.log();
    }
    console.log(arr);

    console.log(arr[num-1]);
}

returnGreatestNum(arr, num);