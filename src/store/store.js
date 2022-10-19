
import {createStore, combineReducers} from 'redux'

// import Fridge
// import fridgeReducer from './products/fridge/FridgeReducer'
import ReducerFunction from './StoreReducer'

const store = createStore(ReducerFunction)

export default store