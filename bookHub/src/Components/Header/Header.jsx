import React from 'react';
import Logo from "./Logo.jsx";
import Actions from "./Actions.jsx";


const Header = () => {
    return (
             <header>
                <nav className="navbar navbar-expand-lg bg-success bg-opacity-75">
                    <div className="container">
                        <Logo/>
                        <Actions/>
                    </div>
                </nav>
            </header>
    )
};

export default Header;