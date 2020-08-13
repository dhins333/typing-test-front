import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';

const AppRouter = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route component={MainPage} path='/' exact={true}/>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;