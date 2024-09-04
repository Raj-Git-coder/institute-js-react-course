import React from 'react'

import SheetDataTable from './SpreadsheetToWebTable/display-spreadsheetData'
import "/Users/Raj/Documents/Raj Personal GitHub/institute-js-react-course/reactJS/demo/src/SpreadsheetToWebTable/table-style.css"

// import "./ResumeExample_using_BootStrap/component-styles.css"

// import IntroOfCandidate from './ResumeExample_using_BootStrap/candidate-intro'
// import SkillsAndEducationOfCandidate from './ResumeExample_using_BootStrap/candidate-skills-and-education'
// import ProjectsListOfCandidate from './ResumeExample_using_BootStrap/project-list-of-candidate'

// import './EventHandlingExample/StylingForBtn.css'
// import ButtonForEventHandling from './EventHandlingExample/ButtonForEventHandling'

// import Form from './EventHandlingExample/FormEvent/Form'

function App() {
    return (

        <div>
            <h1>My App</h1>
            <SheetDataTable />
        </div>

        // <body style={{ backgroundColor: "whitesmoke" }}>

        //     <center><h1>Resume</h1></center>

        //     <IntroOfCandidate />
        //     <SkillsAndEducationOfCandidate />
        //     <ProjectsListOfCandidate />


        //     {/* <ButtonForEventHandling /> */}

        //     {/* <Form /> */}
            
        // </body>
    );
}

export default App;

// Points to Remember:
    // 1. For logical elements, use '{}'.  e.g. let x=10; inside our html body write {x}

    // 2. For InlineCss, use '{{}}'. e.g. <body style={{backgroundColor: "whitesmoke"}}>

    // 3. For external CSS, use the 'import' statement. Example:
        // import './styles.css';
        // Note: No need to use an alias for CSS imports as it is not used as a variable.

    // 4. Closing tags are compulsory. Example:
        // Use <br /> instead of <br>.

    // 5. Link Bootstrap by adding the 4 links in the ./public/index.html's <head> section

    // 6. To call Components, first import them using an alias, then use that alias in the return statement as a self-closing tag. eg
        // import AliasForComponent from './TaskNameFolder/component-name';
        // return( <AliasForFunctionName /> );

    // 7. Use PascalCase for component names, e.g. ComponentName

    // 8. Use React Fragment to wrap multiple elements in a single parent without adding extra nodes to the DOM. 
    // i.e either use this <React.Fragment>...</React.Fragment> or this <>...</> for enclosing

    // 9. Never rename a file name after creating it.
