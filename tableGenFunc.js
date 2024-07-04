let tableOf = 7;
// let arr = [];
let table = "";

const tableGenerator = (tableOf) => 
{
    for(let x=1; x<=10; x++)
    {
        // arr.push(tableOf*x);
        // table.concat(tableOf*x);
        table += tableOf*x+" ";
    }
    return table;
}

console.log(tableGenerator(tableOf));


