import React from "react";

function Form()
{
    // let name = "";
    const [name, setName] = React.useState();
    let handleChange = (event) =>
    {
        setName(event.target.value);
        // console.log(event.target.value);
    }

    let handleClick = () =>
    {
        console.log(name);
    }


    return(
        <>
            <center><h1>Form</h1></center>
            <h5>Name: <input type="text" onChange={handleChange}/></h5>
            <h5>Course: <input type="text"/></h5>
            <h5>Address: <input type="text"/></h5>

            <button type="button" class="btn btn-success" onClick={handleClick}> Submit </button>

            
        </>
    );
}

export default Form;