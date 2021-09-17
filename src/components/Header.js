import React from 'react';

const Header = ( { titulo } ) => {
    return (  
        <nav 
            className="nav-wrapper light-blue darken-2"
        >
            <a 
                href="#!" 
                className="brand-logo"
            > 
                { titulo } 
            </a>
        </nav>
    );
};

export default Header;