import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/**
 * 路由、ts案例y用这个根元素
 */
// import App from './App.tsx'; 
/**
 * 项目案例用这个根元素
 */
import App from '../src/pages/Home/homeDemo'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
