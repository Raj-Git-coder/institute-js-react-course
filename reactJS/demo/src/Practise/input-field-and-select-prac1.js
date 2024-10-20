import React from "react";

function Form ()
{
    const [data, setData] = React.useState({});

    const HandleChange = (e) =>
    {
        if(e.target.name === "city")
        {
            setData({...data, city: e.target.value});
        }
        else
        {
            setData({...data, state: e.target.value});
        }
    }
    const HandleClick = () =>
    {
        // console.log(data);
        localStorage.setItem('key1', JSON.stringify(data));
    }
    const HandleGet = () =>
    {
        let val = JSON.parse(localStorage.getItem('key1'));
        setData(val);
    }


    return(
        <>
            <label for="validationCustom03" class="form-label">City</label>
            <input value={data.city} name="city" type="text" class="form-control" id="validationCustom03" required onChange={HandleChange}/>

            <p></p>
            <div class="col-md-3">
                <label for="validationCustom04" class="form-label">State</label>
                <select value={data.state} name="state" class="form-select" id="validationCustom04" required onChange={HandleChange} >
                    <option selected disabled value="">Choose...</option>
                    <option>Maharashtra</option>
                    <option>Gujrat</option>
                    <option>Rajasthan</option>
                </select>
                <div class="invalid-feedback">
                Please select a valid state.
                </div>
            </div>
            <p></p>
            <button type="button" class="btn btn-primary" onClick={HandleClick}>Primary</button>
            <p></p>
            <button type="button" class="btn btn-primary" onClick={HandleGet}>Get</button>

        </>
    );
}
export default Form;