import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import store from './store/store';

const app = document.querySelector('#root');

ReactDOM.render(
<Provider store = {store}>
    <AppRouter />
</Provider>,app);