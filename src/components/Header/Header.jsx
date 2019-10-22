import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                className={s.header_logo}
                src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo-title-dark.png"
                alt=""/>
        </header>
    );
}

export default Header;