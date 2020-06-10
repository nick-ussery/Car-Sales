import {carReducer} from './carReducer'
import {priceReducer} from './priceReducer'
import {featuresReducer} from './featuresReducer'
import { combineReducers } from 'redux'

export default combineReducers({
    car:carReducer,
    price:priceReducer,
    features:featuresReducer
})