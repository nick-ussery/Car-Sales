import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import 'bulma/css/bulma.css';
import './styles.scss';

import {createStore} from 'redux'
// import {rootReducer} from './reducers/index'

import {carReducer} from './reducers/carReducer'
import {priceReducer} from './reducers/priceReducer'
import {featuresReducer} from './reducers/featuresReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    car:carReducer,
    price:priceReducer,
    additionalFeatures:featuresReducer
})

export const store = createStore(rootReducer)



const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
