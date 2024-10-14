import React from "react";

function InputFieldAndSelect()
{
    const [city, setCity] = React.useState();
    const [state, setState] = React.useState();
    const HandleCity = (e) =>
    {
        setCity(e.target.value);
    }
    const HandleState = (e) =>
        {
            setState(e.target.valueg);
        }
    const HandleClick = () =>
    {
        console.log(city, state);

    }
    return(
        <>
            <label for="validationCustom03" class="form-label">City</label>
            <input type="text" class="form-control" id="validationCustom03" required onChange={HandleCity}/>

            <label for="validationCustom04" class="form-label">State</label>
            <select class="form-select" id="validationCustom04" required onChange={HandleState}>
                <option selected disabled value="">Choose...</option>
                <option>Maharashtra</option>
                <option>Gujrat</option>
                <option>Rajasthan</option>
            </select>

            <button type="button" class="btn btn-info" onClick={HandleClick}>Info</button>

        </>

    );

}
export default InputFieldAndSelect;