import React from 'react'
// import "./myExternalCSSFile.css"
// import Form from './Form'
import Intro from './Intro';


function App() {
    return (
        <body style={{ backgroundColor: "whitesmoke" }}>
            {/* <Form /> */}
            <Intro />
        </body>
    );
}


// 1. For logical things use '{}'  eg. let x=10; inside our html body write {x}
// 2. for style use '{{}}' eg. <body style={{backgroundColor: "whitesmoke"}}>
// 3. ExternalCss use 'import' keyword
// 4. Closing tags is compulsory i.e. <br/>
// 5. Linking Bootstrap
// 6. Calling Components
// 7. Pascal case for componets
// 8. React Fragment
// 9. To add our external html file, first import it here, place the file name inside these braces  '<FileName />'

export default App;