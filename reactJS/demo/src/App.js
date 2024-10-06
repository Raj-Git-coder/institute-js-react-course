import React from "react";

function App()
{
    let [name, setName] = React.useState();

    const handleTextChange = (e) =>
    {
        // console.log(e.target.value);
        setName(e.target.value);

    }
    const handleClick =()=>
    {
        console.log(name);
    }
    return(
        <>
            <label for="validationCustom03" class="form-label">City</label>
            <input type="text" class="form-control" id="validationCustom03" required onChange={handleTextChange}/>
            <button type="button" class="btn btn-warning" onClick={handleClick}>Warning</button>
            {name}
        </>

    );
}
export default App;