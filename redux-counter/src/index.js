import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {counter} from './store/reducer';

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension():f=>f)
)
ReactDOM.render( <Provider store={store}><App /></Provider>    , document.getElementById('root'));


