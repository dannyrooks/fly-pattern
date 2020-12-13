import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import PatternsReducer from './reducers/PatternsReducer'
// import PatternFormReducer from './reducers/PatternFormReducer'


const reducer = combineReducers({
    PatternsReducer,
    // PatternFormReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
 

export default store

