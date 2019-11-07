import React            from 'react';
import {Route}          from 'react-router-dom';
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import Header           from "./components/Header/Header";
import NavbarContainer  from "./components/Navbar/NavbarContainer.jsx";
import Profile          from "./components/Profile/Profile";
import News             from "./components/News/News";
import Settings         from "./components/Settings/Settings";
import Music            from "./components/Music/Music";
import UsersContainer   from "./components/Users/UsersContainer";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavbarContainer/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile" render={() => <Profile/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App;
