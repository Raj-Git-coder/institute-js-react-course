import React from "react";
import Para2 from "./prac-intro2-component";

function Introduction()
{
    let name = "Raj ";
    const handle_click = (()=>{
        console.log("clicked");
    }
        
    );
    return(
        <div id="div1">
            <h3>My Introduction:</h3>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <Para2 fname={name} />
            <button onClick={handle_click}>Click</button>
        </div>
    );
}
export default Introduction;