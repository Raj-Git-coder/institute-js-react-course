let sum = (a,b)=>
{
    let prom = new Promise(
        (resolve,reject) =>
        {
            if(a+b>100)
            {
                reject('not valid');
            }
            else
            {
                resolve(a+b);
            }
        }
    )
    return prom;
}

// sum(20,50).then((data)=>
// {
//     console.log('success---',data);
// }).catch((err)=>
// {
//     console.log("err---",err);
// })

// async function trial(){
//     try{
//         let x = await sum(30,50)
//         console.log(x)
//         let y = await sum(10,x)
//         console.log(y)
//         let z = await sum(90,y)
//         console.log(z)
//     }catch(err){
//         console.log(err)
//     }
// }

const trial=async()=>{
    try{
        let x = await sum(30,50)
        console.log(x)
        let y = await sum(10,x)
        console.log(y)
        let z = await sum(90,y)
        console.log(z)
    }catch(err){
        console.log(err)
    }
}
trial()
