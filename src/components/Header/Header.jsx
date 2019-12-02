import React     from 'react';
import {NavLink} from 'react-router-dom';
import s         from './Header.module.css';
import Button    from '@material-ui/core/Button';

const Header = (props) => {
   return (
      <header className={s.header}>
         <NavLink to="/">
            <img
               className={s.header_logo}
               src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo-title-dark.png"
               alt=""/>
         </NavLink>


         <div className={s.loginBlock}>
            {
               props.isAuth ?
                  <div className={s.rightWrap}>
                     <NavLink to="/" className={s.loginName}>{props.login}</NavLink>
                     <Button variant="contained" color="primary" onClick={props.logoutMe}>
                        Log out
                     </Button>
                  </div>

                  :
                  <NavLink to="/login" className={s.loginName}>
                     <Button variant="contained" color="primary" onClick={props.logoutMe}>
                        Login
                     </Button>
                  </NavLink>
            }

         </div>

      </header>
   );
}

export default Header;