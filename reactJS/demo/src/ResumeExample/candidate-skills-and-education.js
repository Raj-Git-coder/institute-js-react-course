// candidate-skills-and-education
// SkillsAndEducationOfCandidate

import React from "react";

// This is the part of the Resume Example given for practise
// in this we are creating the div components(like Intro, Skills, Education etc) in different (.js)files and the styling for them in a .css file "ResumeStyle",  and then integrating them all together in App.js

function SkillsAndEducationOfCandidate()
{
    return(
        <div id="skillAndEduDiv" >
                <div class="border border-black" id="skillsDiv" >
                    <h3 >
                        Sills:
                    </h3>
                    <p >
                        <ul>
                            <li>skill 1 : Html</li>
                            <li>skill 2 : CSS</li>
                            <li>skill 3 : JS</li>
                            <li>skill 4 : React</li>

                        </ul>
                    </p>
                </div>
                <div class="border border-black" id="educationDiv" >
                    <h3 >
                        Education:
                    </h3>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit tempore rem modi ad vero iusto enim voluptatum consequatur in? Reprehenderit cumque autem nam aspernatur iste mollitia provident nemo veritatis?
                    </p>
                </div>
            </div>
    );
}

export default SkillsAndEducationOfCandidate;