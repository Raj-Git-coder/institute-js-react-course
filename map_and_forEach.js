let arr = [4,5,9,7,4,9,11];

// arr.forEach((val, index) =>
// {
//     console.log(val, index);
// }
// );

let arr1 = arr.map((val, index) =>
{
    // console.log(val, index);
    return val, index;
});

// console.log(arr1);

arr.forEach((element)=>
{
    console.log(element);
});

// **************************************************************************************************
// Note : diff betn map and filter is, map returns all values and filter returns specific values that satisfies the condition.
// **************************************************************************************************
