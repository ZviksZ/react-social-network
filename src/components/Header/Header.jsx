import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <NavLink to="/">
                <img
                    className={s.header_logo}
                    src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo-title-dark.png"
                    alt=""/>
            </NavLink>

        </header>
    );
}

export default Header;