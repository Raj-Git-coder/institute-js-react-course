let obj = 
{
    name:"raj",
    age:25
}

let convert_Obj_to_JSON = JSON.stringify(obj);
console.log(convert_Obj_to_JSON);

let convert_JSON_to_obj = JSON.parse(convert_Obj_to_JSON);
console.log(convert_JSON_to_obj)