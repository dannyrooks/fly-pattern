// where i will combine reducers if i have a bunch of different models 
import { combineReducers } from 'redux'
import patternReducer from './patternReducer'

const rootReducer = combineReducers({
    patternReducer
})

export default rootReducer