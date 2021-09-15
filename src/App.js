import React from 'react'
import './css/App.css';
import { Provider } from 'react-redux'
import { Albumes } from './components/Albumes'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Publicaciones } from './components/Publicaciones'
import { Usuarios } from './components/Usuarios'
import { store } from './store/store'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";


export const App = () => {

    return (
        <Provider store={ store }>
            <Router>

                <Navbar/>

                <Switch>
                   <Route path="/" component={ Home } />
                   <Route exact path="/usuarios" component={ Usuarios } />
                   <Route exact path="/albumes" component={ Albumes } />
                   <Route exact path="/publicaciones" component={ Publicaciones } />

                   <Redirect to='/' />
                </Switch>
            </Router>
        </Provider>    
    )
}
