let str = "hover";

let vowArr = ['a','e','i','o','u'];
let count = 0;
for(let i=0; i<vowArr.length; i++)
{
    if(str.includes(vowArr[i]))
    {
        count++;
    }
}

console.log(count);