import React from 'react';
import {Link} from 'react-router-dom'

function PageNotFound(props) {
    return ( 
        <>
            <header>
                <h1>Page Not Found</h1>
            </header>
            <nav>
                <ul>                    
                    <li>
                        <Link to="/dashboard">Back To DASHBOARD</Link>
                    </li>
                </ul>
            </nav>
            
        </>
     );
}

export default PageNotFound;