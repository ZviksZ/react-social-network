import React, {Component}                 from 'react';
import {connect, Provider}                from "react-redux";
import {HashRouter, BrowserRouter, Route, withRouter} from 'react-router-dom';
import './App.css';
import {compose}                          from "redux";
import Preloader                          from "./components/common/Preloader/Preloader.jsx";
import HeaderContainer                    from "./components/Header/HeaderContainer.jsx";
import LoginPage                          from "./components/Login/Login.jsx";
import NavbarContainer                    from "./components/Navbar/NavbarContainer.jsx";
import News                               from "./components/News/News";
import Settings                           from "./components/Settings/Settings";
import Music                              from "./components/Music/Music";
import {withSuspense}                     from "./hoc/withSuspense.js";
import {initializeApp}                    from "./redux/app-reducer.js";
import store                              from "./redux/redux-store.js";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.jsx'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer.jsx'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer.jsx'));


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

                    <Route path="/dialogs"
                           render={withSuspense(DialogsContainer)}/>
                    <Route path="/profile/:userId?"
                           render={withSuspense(ProfileContainer)}/>
                    <Route path="/users"
                           render={withSuspense(UsersContainer)}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={() => <LoginPage/>}/>

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
        <HashRouter>  
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )

}
//<BrowserRouter basename={process.env.PUBLIC_URL}> для обычного деплоя, не для GitHub 
export default SamuraiJSAPP;

