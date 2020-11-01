import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import PatternReducer from './reducers/PatternReducer'
import PatternForm from './components/PatternForm'
import Patterns from './components/Patterns'
// import materialReducer from './reducers/materialReducer'
import thunk from 'redux-thunk';

const reducer = combineReducers({
    PatternReducer,
    PatternForm
    // materialReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
 

export default store

