import React from "react";

function Form()
{

    const [data, setData] = React.useState({
        city:"abc",
        state:"Gujrat",
        gender:"Male",
        sports:[]
    })


    const HandleChange = (e) =>
    {
        // console.log(e.target.type)
        if(e.target.type == "checkbox")
        {
            // setData({...data, [e.target.name]: e.target.value});
            // console.log(e.target.value)
            let arr = data[e.target.name];
            if(arr.includes(e.target.value))
            {
                arr.splice(arr.indexOf(e.target.value), 1);
                // setData({...data, [e.target.name]: arr});

            }
            else
            {
                arr.push(e.target.value);
                // setData({...data, [e.target.name]: arr});

            }
            console.log(arr);
            setData({...data, [e.target.name]: arr});


        }
        else
        {
            setData({...data, [e.target.name]: e.target.value});
        }
       
    }
    const HandleClick = () =>
    {
        console.log(data);
        
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
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Gujrat">Gujrat</option>
                    <option value="Rajasthan">Rajasthan</option>
                </select>
                <div class="invalid-feedback">
                Please select a valid state.
                </div>
            </div>
            <label for="validationCustom04" class="form-label">Radio Buttons:</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" id="exampleRadios1" value="Male" onChange={HandleChange} checked={data.gender == "Male"}/>
                <label class="form-check-label" for="exampleRadios1">
                    Male
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" id="exampleRadios2" value="Female" onChange={HandleChange} />
                <label class="form-check-label" for="exampleRadios2">
                    Female
                </label>
            </div>

            <p></p>
            <label for="validationCustom03" class="form-label">CheckBox:</label>
            <p></p>
            <div class="form-check form-check-inline">
                <input name="sports" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="1" onChange={HandleChange}/>
                <label class="form-check-label" for="inlineCheckbox1">1</label>
            </div>
            <div class="form-check form-check-inline">
                <input name="sports" class="form-check-input" type="checkbox" id="inlineCheckbox2" value="2" onChange={HandleChange}/>
                <label class="form-check-label" for="inlineCheckbox2">2</label>
            </div>
            <div class="form-check form-check-inline">
                <input name="sports" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="3" onChange={HandleChange}/>
                <label class="form-check-label" for="inlineCheckbox1">3</label>
            </div>
            <div class="form-check form-check-inline">
                <input name="sports" class="form-check-input" type="checkbox" id="inlineCheckbox2" value="4" onChange={HandleChange}/>
                <label class="form-check-label" for="inlineCheckbox2">4</label>
            </div>




            <p></p>
            <button type="button" class="btn btn-primary" onClick={HandleClick}>Primary</button>
            

        </>
    );
}

export default Form;

