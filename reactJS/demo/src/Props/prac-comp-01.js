import React from "react";
import Comp2 from "./prac-comp-02";

function Comp1()
{
    let x="Raj";
    let arr = ["mango", "banana", "apple", "grapes"];

    return(
        <>
            <div id="main_div">
                <h1>Para1</h1>
                <p>
                After hunting for several hours, we finally saw a large seal sunning itself on a flat rock. I took one of the wooden clubs while Larry took the longer one. We slowly snuck up behind the seal until we were close enough to club it over its head. The seal slumped over and died. This seal would help us survive. We could eat the meat and fat. The fat could be burned in a shell for light and the fur could be used to make a blanket. We declared our first day of hunting a great success.
                </p>
                <Comp2 Author_nm={x} Fruit_list={arr}/>
            </div>
        </>
    )
}
export default Comp1; 