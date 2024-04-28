import React from 'react';
import LogoImg from '../../assets/logo/logo.png'

const Logo = () => {
    return (
        <>
            <a className="navbar-brand" href="#">
                <img height={40} src={LogoImg} alt=""/>
            </a>
        </>
    );
};

export default Logo;