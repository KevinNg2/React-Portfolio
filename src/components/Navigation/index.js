// import React from 'react';
// // import {NavLink} from "react-router-dom";

// function Navigation(props) {   

//     return (
//         <div className=" row navigation" id="navigation">
//             <NavLink to="/about">About </NavLink>
//             <NavLink to="/portfolio">Portfolio </NavLink>
//             <NavLink to="/contact">Contact </NavLink>
//             <NavLink to="/resume">Resume</NavLink>
//         </div>
//   );
// }

// export default Navigation;


import React from "react"

function Navigation(props) {
    const tabs = ["About", "Portfolio", "Contact", "Resume"]
    return (
        <ul className="nav">
            {tabs.map(tab => (
                <li className="nav-item" key={tab}>
                    <a
                        href={"#" + tab.toLowerCase()}
                        onClick={() => props.handlePageChange(tab)}
                        className={props.currentPage === tab ? "nav-link active" : "nav-link"}
                    >
                        {tab}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Navigation;
