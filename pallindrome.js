let str = "NAMAN";
// let str = "RAJ";

let reversedStr = "";
for(let i=str.length-1; i>=0; i--)
{
    
    reversedStr += str[i];
    // console.log(reversedStr);
}
    // console.log(reversedStr);

if(str == reversedStr)
{
    console.log("is pallindrome")
}
else
{
    console.log("not pallindrome")
}
