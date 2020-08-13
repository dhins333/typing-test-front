import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './AppRouter';

const app = document.querySelector('#root');

ReactDOM.render(<AppRouter/>,app);