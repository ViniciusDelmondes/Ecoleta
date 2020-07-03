import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/home'
import CreatePoint from './pages/CreatePoint'
import AlertSucess from './pages/AlertSucess'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={CreatePoint} path="/create-point"/>
            <Route component={AlertSucess} path="/sucess"/>
        </BrowserRouter>
    )
}

export default Routes;

