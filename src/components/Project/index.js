import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// individual card build out using props
function ProjectCards(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image}/>
        </div>
        <div className='content'>
            <p className='project-title' id='card-title'>{props.name}</p>
            <p>
            <a href={props.github}><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a> 
              <a href={props.deploy}><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/></a>  
            </p>
        </div>
        </div>
    );
};

export default ProjectCards;