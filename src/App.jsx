import React            from 'react';
import {Route}          from 'react-router-dom';
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import Header           from "./components/Header/Header";
import Navbar           from "./components/Navbar/Navbar";
import Profile          from "./components/Profile/Profile";
import News             from "./components/News/News";
import Settings         from "./components/Settings/Settings";
import Music            from "./components/Music/Music";


const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar store={props.store}/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={ () => <DialogsContainer store={props.store} /> } />
                    <Route path="/profile" render={ () => <Profile store={props.store} /> } />
                    <Route path="/news" render={ () => <News /> }/>
                    <Route path="/music" render={ () => <Music /> }/>
                    <Route path="/settings" render={ () => <Settings /> }/>
                </div>
            </div>
    )
}

export default App;
