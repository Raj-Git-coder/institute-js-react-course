import React, {useState, useEffect} from "react";

function FormWithUseEffect()
{
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const HandleFnameChange = (e) =>
    {
        // console.log(e.target.value);
        setFirstName(e.target.value);
    }
    const HandleLnameChange = (e) =>
    {
        // console.log(e.target.value);
        setLastName(e.target.value);

    }
    
    const HandleSubmit = () =>
    {
        console.log(firstName, lastName);
    }


    return(
        <>
            <center><h1> UseEffect Implementation </h1></center>

            <hr class="bg-success border-2 border-top border-success" />
            <div class="col-md-4">
                <label for="validationCustom03" class="form-label">First name</label>
                    <input 
                    name="firstName"
                    
                    type="text"
                    onChange={HandleFnameChange} 
                    class="form-control" id="validationCustom03" required  />
            </div>

            <div class="col-md-4">
            <label for="validationCustom03" class="form-label">Last name</label>
                <input 
                name="lastName"
                type="text"
                onChange={HandleLnameChange} 
                class="form-control" id="validationCustom03" required  />
            </div>

            <p></p>

            <button type="button" class="btn btn-success" onClick={HandleSubmit}>Submit</button>
            <button type="button" class="btn btn-danger">Danger</button>


        </>
    );
}
export default FormWithUseEffect;