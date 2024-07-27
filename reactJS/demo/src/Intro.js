import React from "react";

function Intro()
{
    return(
        <>
            <center><h1>Resume</h1></center>
            <div class="border border-black" style={{margin:"6px", padding:"1%"}}>
                <h3 >
                    Intro
                </h3>
                <p >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit tempore rem modi ad vero iusto enim voluptatum consequatur in? Reprehenderit cumque autem nam aspernatur iste mollitia provident nemo veritatis?
                </p>
            </div>
            <div style={{display:"flex"}}>
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
            </div>
            <div class="border border-black" style={{margin:"8px", padding:"1%"}}>
                <h3 >
                    Projects:
                </h3>
                <p >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit tempore rem modi ad vero iusto enim voluptatum consequatur in? Reprehenderit cumque autem nam aspernatur iste mollitia provident nemo veritatis?
                </p>
            </div>
        </>
    );
}

export default Intro;