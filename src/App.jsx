import React, {Component}                 from 'react';
import {connect, Provider}                from "react-redux";
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import './App.css';
import {compose}                          from "redux";
import Preloader                          from "./components/common/Preloader/Preloader.jsx";
import DialogsContainer                   from "./components/Dialogs/DialogsContainer.jsx";
import HeaderContainer                    from "./components/Header/HeaderContainer.jsx";
import LoginPage                          from "./components/Login/Login.jsx";
import NavbarContainer                    from "./components/Navbar/NavbarContainer.jsx";
import News                               from "./components/News/News";
import ProfileContainer                   from "./components/Profile/ProfileContainer.jsx";
import Settings                           from "./components/Settings/Settings";
import Music                              from "./components/Music/Music";
import Test                               from "./components/Test/Test.jsx";
import UsersContainer                     from "./components/Users/UsersContainer.jsx";
import {initializeApp}                    from "./redux/app-reducer.js";
import store                              from "./redux/redux-store.js";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={() => <LoginPage/>}/>
                    <Route path="/test" render={() => <Test/>}/>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

const AppContainer = compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);

const SamuraiJSAPP = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )

}

export default SamuraiJSAPP;

