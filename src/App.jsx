import React, {Component}                                               from 'react';
import {connect, Provider}                                              from "react-redux";
import {HashRouter, BrowserRouter, Route, withRouter, Switch, Redirect} from 'react-router-dom';
import './App.css';
import {compose}                                                        from "redux";
import ErrorPopup                                                       from "./components/common/ErrorPopup/ErrorPopup.jsx";
import Preloader                                                        from "./components/common/Preloader/Preloader.jsx";
import HeaderContainer                                                  from "./components/Header/HeaderContainer.jsx";
import LoginPage                                                        from "./components/Login/Login.jsx";
import NavbarContainer                                                  from "./components/Navbar/NavbarContainer.jsx";
import News                                                             from "./components/News/News";
import Settings                        from "./components/Settings/Settings";
import Music                           from "./components/Music/Music";
/*import TodosContainer                  from "./components/Todos/TodosContainer";*/
import {withSuspense}                  from "./hoc/withSuspense.js";
import {initializeApp, setGlobalError} from "./redux/app-reducer.ts";
import store                           from "./redux/redux-store.js";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.jsx'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer.jsx'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer.jsx'));


class App extends Component {
   catchAllUnhandledErrors = (reason, promise) => {
      this.props.setGlobalError(reason.reason)
   }

   componentDidMount() {
      this.props.initializeApp();

      window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
   }

   componentWillUnmount() {
      window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
   }

   render() {
      if (!this.props.initialized) return <Preloader/>

      return (
         <div className="app-wrapper">
            { //GlobalError message
               this.props.globalError && <ErrorPopup globalError={this.props.globalError}/>
            }
            <HeaderContainer/>
            <NavbarContainer/>
            <div className="app-wrapper-content">
               <Switch>
                  <Route exact path="/"
                         render={() => <Redirect from='/' to='/profile'/>}/>
                  <Route path="/dialogs"
                         render={withSuspense(DialogsContainer)}/>
                  <Route path="/profile/:userId?"
                         render={withSuspense(ProfileContainer)}/>
                  <Route path="/users"
                         render={withSuspense(UsersContainer)}/>
                  {/*<Route path="/todos" render={() => <TodosContainer/>}/>*/}
                  <Route path="/news" render={() => <News/>}/>
                  <Route path="/music" render={() => <Music/>}/>
                  <Route path="/settings" render={() => <Settings/>}/>
                  <Route path="/login" render={() => <LoginPage/>}/>

                  <Route render={() => <div>404 not found</div>}/>
               </Switch>
            </div>
         </div>
      )
   }
}

let mapStateToProps = (state) => {
   return {
      initialized: state.app.initialized,
      globalError: state.app.globalError
   }
}

const AppContainer = compose(
   connect(mapStateToProps, {initializeApp, setGlobalError}),
   withRouter
)(App);

const SamuraiJSApp = (props) => {
   return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
         <Provider store={store}>
            <AppContainer/>
         </Provider>
      </BrowserRouter>
   )
}


//<BrowserRouter basename={process.env.PUBLIC_URL}> для обычного деплоя, не для GitHub

//<HashRouter> для GitHub


export default SamuraiJSApp;

