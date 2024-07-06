let str = "spring";
let str1 = "listen";
let count = 0;

if(str.length == str1.length)
{
    for(let i=0; i<str.length; i++)
    {
        if(str1.includes(str[i]))
        {
            count++;
            // console.log(count);
        }

    }
    if(count == str.length)
    {
        console.log("is anagram");
    }
    else
    {
        console.log("not anagram");
    }
}
else
{
    console.log("not anagram");
}