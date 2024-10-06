import React from "react";

function Comp2(props)
{
    return(
        <>
            <div id="para2_div">
                <h1>Para2</h1>
                <p>
                The red ball sat proudly at the top of the toybox. It had been the last to be played with and anticipated it would be the next as well. The other toys grumbled beneath. At one time each had held the spot of the red ball, but over time they had sunk deeper and deeper into the toy box.
                </p>
                <p>
                    <b><p>Fruits:</p></b>

                    {props.Fruit_list.map((fruits, index) =>
                    (
                        <li>{fruits}</li>
                    ))}

                </p>
                <b>
                    <h3 id="Author_name">
                    - Author “{props.Author_nm}”
                    </h3>
                </b>
            </div>
        </>
    );
}
export default Comp2;
