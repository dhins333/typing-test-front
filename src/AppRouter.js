import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import MainPage from './components/MainPage';
import ErrorPage from './components/404Page';

const AppRouter = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route component={Home} path='/' exact={true}/>
                <Route component={MainPage} path='/practice' exact={true}/>
                <Route component={ErrorPage} path = '*'/>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;