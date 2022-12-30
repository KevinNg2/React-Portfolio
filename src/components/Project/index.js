// import React from 'react';
// import portfolio from '../../portfolio.json'

// import 'bootstrap/dist/css/bootstrap.min.css';

// // individual card build out using props
// function ProjectCards(props) {
//     return (
//         <div className="card">
//             <div className="img-container">
//                 <img alt={props.name} src={props.image}/>
//         </div>
//         <div className='content'>
//             <p className='project-title' id='card-title'>{props.name}</p>
//             <p>
//             {portfolio.map((project) => (
//               <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
//             ))}
//             <a href={props.github}><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a> 
//               <a href={props.deploy}><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/></a>  
// //             </p>
//         </div>
//         </div>
//     );
// };

// export default ProjectCards;

import React from "react"
// import projects from src
import portfolio from '../../portfolio.json'

function ProjectCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <p className="project-title">{props.name}</p>
                    </li>
                    <li>
                        <p className="project-description">{props.description}</p>
                    </li>
                    <li>
                        <div className="project-icons">
                            <a href={props.github}>
                                <img
                                    src="https://img.icons8.com/ios/40/000000/github.png"
                                    alt="github-icon"
                                    id="port-icon"
                                />
                            </a>
                            <a href={props.deployedapp}>
                                <img
                                    src="https://img.icons8.com/metro/35/000000/cursor.png"
                                    alt="app-icon"
                                    id="port-icon"
                                />
                            </a>
                        </div>
                    </li>
                    <li>{props.skills}</li>
                </ul>
            </div>
        </div>
    )
}

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>
}

function Projects() {
    return (
        <>
            <div className="project">
                <h1 className="title">Development Portfolio: Kevin Ng</h1>
            </div>

            <Wrapper>
                {portfolio.map(project => (
                    <ProjectCard
                        name={project.name}
                        key={project.id}
                        image={project.image}
                        github={project.github}
                        deployedapp={project.deployedapp}
                        skills={project.skills}
                        description={project.description}
                    />
                ))}
            </Wrapper>
        </>
    )
}

export default Projects