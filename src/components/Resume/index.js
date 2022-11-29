import React from 'react';

function Resume() {
    return (
        <section class="mb-5">
            <h1 className="resume">Resume: Kevin Ng</h1>
            <hr></hr>
            <div class="row justify-content-center" id="resume">
                <div class="mt-5 pl-5 pr-5">
                    Full Stack Web Developer who possesses the neccessary skills within the MERN Stack. Always continiously learning and trying to do better. Experienced in crossfit, swimming, and software development. Kevin is an experienced coach with a demonstrated history of working with athletes hands on in the gym as well as underwater in the pool. Throughout his career in the fitness industry Kevin has helped transform over hundreds of clients and athletes lives to a healthier happier lifestyle. 
                    <p class="mt-5">
                    <a href="https://www.linkedin.com/in/kevinng3292/"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="Kevin Ng LinkedIn"/></a>
                    </p>
                    <p>
                    Download My Full <a href="https://github.com/KevinNg2/React-Portfolio/raw/main/src/assets/KevinNgResume2021.pdf" class="link">Resume</a>    
                    <br></br>
                    </p>  
                </div>
            </div>

            <div class="justify-content-center mt-5">
                <div id="front-back">
                    <h2>Front End Technologies</h2>
                    <p>HTML, CSS (Bootstrap, Foundation, Bulma), Javascript, jQuery, React.js, IndexedDB</p>
                </div>

                <div id="front-back" class="mt-5">
                    <h2>Back End Technologies</h2>
                    <p>Node.js, Express.js, MYSQL, Sequelize, NOSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side), Templating (Handlebars)</p>
                </div>

                <div id="front-back" class="mt-5">
                    <h2>Education</h2>
                    <p>University of Rhode Island Kinesiology</p>
                    <p>University of California Irvine Full Stack Web Development Boot Camp</p>
                </div>
            </div>
        </section>
    );
};

export default Resume;