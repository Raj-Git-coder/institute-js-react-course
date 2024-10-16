import React from "react";

function Form() {

    const [data, setData] = React.useState({})

    const HandleChange = (e) =>
    {
        if(e.target.name === "city")
        {
            setData({...data, city : e.target.value});
            
        }
        else
        {
            setData({...data, state : e.target.value});
        }
    }
    const HandleClick = () => {
        // console.log(data);
        localStorage.setItem('data', JSON.stringify(data));
    }
    const HandleGet = () => 
    {
        let val = JSON.parse(localStorage.getItem('data'))
        setData(val)
    }
    return (
        <>
            <center><h1>Form</h1></center>
            <label for="validationCustom03" class="form-label">City</label>
            <input value={data.city} type="text" class="form-control" id="validationCustom03" name="city" required onChange={HandleChange} />
            <div class="col-md-3">
                <label for="validationCustom04" class="form-label">State</label>
                <select value={data.state} class="form-select" id="validationCustom04" name="state" required onChange={HandleChange}>
                    <option selected disabled value="">Choose...</option>
                    <option>Maharashtra</option>
                    <option>Gujrat</option>
                    <option>Rajasthan</option>
                </select>
            </div>
            <p></p>
            <button type="button" class="btn btn-success" onClick={HandleClick}>Success</button>

            <p></p>
            <button type="button" class="btn btn-success" onClick={HandleGet}>Get</button>
        </>
    )
}
export default Form;