
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import axios from 'axios';
window.axios = axios;


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));
//const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


ReactDom.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));
//console.log(process.env.REACT_APP_STRIPE_KEY);
//console.log(process.env.NODE_ENV);


