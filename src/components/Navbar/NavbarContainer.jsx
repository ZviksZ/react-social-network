import React     from 'react';
import {connect} from "react-redux";
import Navbar    from "./Navbar.tsx";


let mapStateToProps = (state) => {
    return {
        friends: state.sidebarPage.friends,
        users: state.usersPage.users
    }
}
const NavbarContainer = connect(mapStateToProps)(Navbar)




export default NavbarContainer;
