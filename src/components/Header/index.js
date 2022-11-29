// // dependencies
// import React, {Component} from 'react';
// import {Route, Redirect, HashRouter} from "react-router-dom";

// // components
// import Navigation from '../../components/Navigation';
// import About from '../../components/About';
// import Contact from '../../components/Contact';
// import Portfolio from '../../components/Portfolio';
// import Resume from '../../components/Resume';

// class Header extends Component {
//     render() {
//         return (
//             <HashRouter>
//                 <div className="row Header" id="header">
//                 <a href="https://github.com/KevinNg2/React-Portfolio"><img src="https://img.icons8.com/color/48/000000/astronaut.png" alt="Kevin Ng" class="icon" id="astro"/></a>
//                 <Navigation/>
//                 </div>

//                 <div className="content">
//                     <Route exact path="/" render={() => (<Redirect to="/portfolio"/>)}/>
//                     <Route path="/portfolio" component={Portfolio}/>
//                     <Route path="/about" component={About}/>
//                     <Route path="/contact" component={Contact}/>
//                     <Route path="/resume" component={Resume}/>
//                 </div>
//             </HashRouter>
//         );
//     };
// };

// export default Header;

import React, { useState } from 'react';
import Navigation from '../Navigation';
import About from '../About';
// import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Footer from '../Footer'
import Resume from '../Resume'
import Project from '../Project'

function Header() {
    // state of current page
    const [currentPage, handlePageChange] = useState("About")

    const renderPage = () => {
        // switch statement that will return the appropriate component of the 'currentPage'
        switch (currentPage) {
            case "about":
                return <About></About>
            case "contact":
                return <Contact></Contact>
            case "Portfolio":
                return <Project></Project>
            case "resume":
            return <Resume></Resume>
            default:
                return <About></About>
        }
    }

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
                {
                    // Render the component returned by 'renderPage()'
                    renderPage()
                }
                <Footer/>
            </div>
        </div>
    )
}

export default Header;