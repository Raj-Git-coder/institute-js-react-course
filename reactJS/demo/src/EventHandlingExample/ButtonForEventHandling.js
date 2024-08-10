import React from "react";

function ButtonForEventHandling()
{
    // const handleClick = () =>
    // {
    //     alert("clicked");
    // }

    let num = 0;
    
    const [num1, setNum] = React.useState(num);

    const handleMinus = () =>
    {
        setNum(num1-1);
    }
    const handlePlus = () =>
    {
        setNum(num1+1);
    }

    return(
        <>
            <div class="container">
                <div class="divForEventHandling">
                    <button type="button" class="btn btn-success" onClick={handleMinus}> - </button>
                    <p> {num1} </p>
                    <button type="button" class="btn btn-success" onClick={handlePlus}> + </button>
                </div>
            </div>
        </>
    );
}



export default ButtonForEventHandling;