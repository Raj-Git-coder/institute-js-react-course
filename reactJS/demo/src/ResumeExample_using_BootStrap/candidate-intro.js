import React from "react";

// This is the part of the Resume Example given for practise
// in this we are creating the div components(like Intro, Skills, Education etc) in different (.js)files and the styling for them in a .css file "ResumeStyle",  and then integrating them all together in App.js 

function IntroOfCandidate()
{
    return(
        <>
            <div class="border border-black" id="introDiv">
                <h3 >
                    Intro
                </h3>
                <p >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit tempore rem modi ad vero iusto enim voluptatum consequatur in? Reprehenderit cumque autem nam aspernatur iste mollitia provident nemo veritatis?
                </p>
            </div>
            {/* <div style={{display:"flex"}}>
                <div class="border border-black" id="leftDiv" style={{margin:"8px", padding:"1%"}}>
                    <h3 >
                        Sills:
                    </h3>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit tempore rem modi ad vero iusto enim voluptatum consequatur in? Reprehenderit cumque autem nam aspernatur iste mollitia provident nemo veritatis?
                        <ul>
                            <li>skill 1</li>
                            <li>skill 2</li>
                            <li>skill 3</li>
                        </ul>
                    </p>
                </div>
                <div class="border border-black" id="rightDiv" style={{margin:"8px", padding:"1%"}}>
                    <h3 >
                        Education:
                    </h3>
                    <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit tempore rem modi ad vero iusto enim voluptatum consequatur in? Reprehenderit cumque autem nam aspernatur iste mollitia provident nemo veritatis?
                    </p>
                </div>
            </div> */}

            {/* <div class="border border-black" style={{margin:"8px", padding:"1%"}}>
                <h3 >
                    Projects:
                </h3>
                <p >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit tempore rem modi ad vero iusto enim voluptatum consequatur in? Reprehenderit cumque autem nam aspernatur iste mollitia provident nemo veritatis?
                </p>
            </div> */}
        </>
    );
}

export default IntroOfCandidate;