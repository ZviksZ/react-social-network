import React     from 'react';
import {connect} from "react-redux";
import MyPosts   from "../Profile/MyPosts/MyPosts.jsx";
import Navbar    from "./Navbar.jsx";


let mapStateToProps = (state) => {
    return {
        friends: state.sidebarPage.friends
    }
}
const NavbarContainer = connect(mapStateToProps)(Navbar)




export default NavbarContainer;