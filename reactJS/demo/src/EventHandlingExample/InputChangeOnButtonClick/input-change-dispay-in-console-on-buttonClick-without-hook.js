import React from "react";

function Button_Event()
{
    let text = "";
    
    const HandleChange = (e) =>
    {
        text = e.target.value;
    }
    const HandleClick = () =>
    {
        console.log(text);
    }
    return(
        <>
            <p></p>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={HandleChange}/>
                <label for="floatingInput" >Type Something here</label>
            </div>
            <button type="button" class="btn btn-info" onClick={HandleClick}>Click</button>
        </>
    );
}
export default Button_Event;