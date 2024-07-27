import React from 'react'

import ComponentStyles from "./ResumeExample/component-styles.css"

import IntroOfCandidate from './ResumeExample/candidate-intro'
import SkillsAndEducationOfCandidate from './ResumeExample/candidate-skills-and-education'
import ProjectsListOfCandidate from './ResumeExample/project-list-of-candidate'

function App() {
    return (
        <body style={{ backgroundColor: "whitesmoke" }}>

            <center><h1>Resume</h1></center>

            <IntroOfCandidate />
            <SkillsAndEducationOfCandidate />
            <ProjectsListOfCandidate />
            
        </body>
    );
}

export default App;

// 1. For logical things use '{}'  eg. let x=10; inside our html body write {x}
// 2. for style use '{{}}' eg. <body style={{backgroundColor: "whitesmoke"}}>
// 3. ExternalCss use 'import' keyword
// 4. Closing tags is compulsory i.e. <br/>
// 5. Linking Bootstrap
// 6. Calling Components
// 7. Pascal case for componets
// 8. React Fragment
// 9. To add our external html file, first import it here, place the file name inside these braces  '<FileName />'
// 10. Never rename a file name after creating it
// 11. import ReactComponent_name from './CustomFolder/js-file-name'
