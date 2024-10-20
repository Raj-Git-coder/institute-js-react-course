import React from "react";

function RegistrationForm()
{
    const  [data, setData] = React.useState({
        firstName : "jhvj",
        lastName : "",
        userName : "eraefd",
        emailID : "",
        pswd : "",
        Gender:"Female",
        course_list: []
    });

    const HandleChange = (e) =>
    {
        // console.log(e.target.type);
        // console.log(e.target.name, e.target.value);
        if(e.target.type === "checkbox")
        {
            let arr = data[e.target.name];

            if(arr.includes(e.target.value))
            {
                arr.splice(arr.indexOf(e.target.value), 1);
            }
            else
            {
                arr.push(e.target.value);
            }
            setData({...data, [e.target.name] : arr});
        }
        else
        {
            setData({...data, [e.target.name] : e.target.value});
        }
    }
    const  HandleClick = () =>
    {
        console.log(data);
    }
    return(
        <>    
            <div class="navBar">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Registration Form</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>                                
                        </div>
                    </div>
                </nav>
            </div>

            <hr class="bg-danger border-2 border-top border-danger" />

            <p></p>
            
            
            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                    <label for="validationCustom03" class="form-label">First name</label>
                    <input name="firstName" type="text" class="form-control" id="validationCustom03" 
                    value={data.firstName}
                    required onChange={HandleChange} />
                </div>
                <div class="col-md-4">
                    <label for="validationCustom03" class="form-label">Last name</label>
                    <input name="lastName" type="text" class="form-control" id="validationCustom03" 
                    required onChange={HandleChange}/>
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">Username</label>
                    <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                    <input 
                    type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" 
                    name="userName"
                    value={data.userName} required onChange={HandleChange} />

                    <div class="invalid-feedback">
                        Please choose a username.
                    </div>
                    </div>
                </div>
            </form>

            <p></p>

            <div class="form-floating mb-3">
                <input 
                name="emailID" 
                value={data.emailID}
                onChange={HandleChange}
                type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>

            <div class="form-floating">
                <input 
                name="pswd" 
                value={data.pswd}
                onChange={HandleChange}
                type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>  

            <p></p>

            <label for="validationCustom01" class="form-label">Radio Buttons:</label>
            <div class="form-check">
                <input 
                name="Gender"
                value="Male"
                onChange={HandleChange}
                class="form-check-input" type="radio"  id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                    Male
                </label>
            </div>

            <div class="form-check">
                <input 
                name="Gender"
                value="Female"
                onChange={HandleChange}
                class="form-check-input" type="radio" id="flexRadioDefault2" checked={data.Gender == "Female"} />
                <label class="form-check-label" for="flexRadioDefault2">
                    Female
                </label>
            </div>

            <p></p>
            
            <label for="validationCustom01" class="form-label">Course Preference:</label>
            <div class="form-check">

                <input 
                name="course_list" 
                value="Html, CSS and JS"
                onChange={HandleChange}
                class="form-check-input" type="checkbox" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    Html, CSS and JS
                </label>
            </div>

            <div class="form-check">
                <input  
                name="course_list" 
                value="React"
                onChange={HandleChange} class="form-check-input" type="checkbox" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                    React
                </label>
            </div>

            <p></p>
            <button type="button" class="btn btn-success" onClick={HandleClick}>Success</button>

            
        </>
    );
}
export default RegistrationForm