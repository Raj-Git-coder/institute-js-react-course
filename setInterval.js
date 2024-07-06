let x = setInterval(()=>
{
    console.log("hi");
},1000)
setTimeout(()=>
{
    clearInterval(x);
}, 10000)