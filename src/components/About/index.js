import React from 'react';
import myImage from "../../assets/images/KNHeadshot.png"
function About() {
    return(
        <section className="title">
            <h1 class="name">about: Kevin Ng</h1>
            <hr></hr>

            <div className="row justify-content-center">
                <div className="col-10" id="about-section">
                    <img src={myImage} className="my-image" alt="Kevin Ng" />
                    <p>
                        Kevin Ng is a proven Full Stack Web Developer with an ability to deliver quality results while collaborating in a rapidly changing work environment meeting deadlines and expectations. Kevin is currently enrolled at UCI Coding Bootcamp aspiring to become a Software Developer and ready to dominate the web! 
                    </p>
                    <p>
                    Before transitioning into a focus on coding, Kevin provided quality customer service, trained team members, and facilitated daily protocols as an Aquatic Supervisor at Lifetime Athletic Club. He is currently a CFL1 Coach training athletes to become fitter & healthier using the CrossFit methodology.
                    </p>
                    <p>
                        Skills: Personal Training, Crossfit Level 1 Coach , Swim Instruction, Content Creation, Communication, Deepend Fitness Tier 2 Instructor
                    </p>
                    {/* <p>
                        View full <a href="#/resume" class="link">Resume</a>
                    </p> */}


                </div>
            </div>
        </section>
    )
};

export default About; 