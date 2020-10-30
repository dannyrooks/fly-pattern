import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import patternReducer from './reducers/patternReducer'
import PatternForm from './components/PatternForm'
// import materialReducer from './reducers/materialReducer'
import thunk from 'redux-thunk';

const reducer = combineReducers({
    patternReducer,
    PatternForm
    // materialReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))



export default store

