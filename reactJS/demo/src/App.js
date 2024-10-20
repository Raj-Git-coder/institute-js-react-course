import React from "react";

import Form from "./Practise/form-with-radioBTN";
import RegistrationFormInLocalStorage from "./EventHandlingExample/FormEvent/reg-form-local-storage";
import FormWithUseEffect from "./EventHandlingExample/FormEvent/UseEffect/form-with-useEffect";

function App()
{
    return(
        <>
            {/* <RegistrationFormInLocalStorage /> */}
            {/* <Form /> */}
            <FormWithUseEffect />
        </>
        
    );
}
export default App;