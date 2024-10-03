import React from "react";

function Skills()
{
    let arr1 = ["html", "css", "js", "java", "react"];
    function handleclick()
    {
        console.log("clicked");
    }
    return(
        <div id="div1">
            <h3>Skills:</h3>
            <ol>
               {arr1.map((data, idx)=>
               {
                    return (<li>{data}</li>)
               })}
            </ol>
<button onClick={handleclick}>click</button>
        </div>
    );
}

export default Skills;