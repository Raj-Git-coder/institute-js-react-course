let arr = [1,0,7,3,1,7,5,3];

// using includes amd 2nd array
    let arr1 = [];

    arr.forEach(element => 
    {
        if(!arr1.includes(element))
        {
            arr1.push(element);
        }
    });
    // console.log(arr1);
//

// without using 2nd array
    // console.log(arr.lastIndexOf(7), arr.indexOf(7));  //both indexes are different which means it has 
    //                                                   //duplicate values.
    // console.log(arr.lastIndexOf(0), arr.indexOf(0));  //both indexes are same which means it has no 
    //                                                   //duplicates.

    arr.forEach((element) =>
    {
        while(arr.indexOf(element) !== arr.lastIndexOf(element))
        {
            // console.log(element);
            // arr.splice(element);

            let temp = arr.lastIndexOf(element);

            for(let i=temp; i<arr.length-1; i++)
            {
                arr[i] = arr[i+1];
            }
            arr.length--;
           

        }
    });
    console.log(arr);
//
