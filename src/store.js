import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import PatternReducer from './reducers/PatternReducer'
import PatternFormReducer from './reducers/PatternFormReducer'
// import materialReducer from './reducers/materialReducer'

const reducer = combineReducers({
    PatternReducer,
    PatternFormReducer,
    // materialReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
 

export default store

