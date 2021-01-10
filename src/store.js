import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import PatternsReducer from './reducers/PatternsReducer'


const reducer = combineReducers({
    PatternsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
 

export default store

