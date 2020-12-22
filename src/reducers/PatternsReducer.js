
// updates the part of my store that have to do with the pattern
// action is sent to reducer


const patternsReducer = (state = { patterns: [], loading: false }, action) => {
    switch(action.type) {
        case "LOADING_SAVED_PATTERNS":
            return {
                ...state,
                patterns: state.patterns,
                loading: true
            }
            
        case "PATTERNS_LOADED":
            return {
                ...state,
                patterns: action.payload,
                loading: false
            }

        case "ADD_PATTERN":
            return {
                ...state,
                loading: true
            }        

        case "PATTERN_ADDED":
            return {
                ...state,
                patterns: [...state.patterns, action.payload],
                loading: false
            }

        case "ADD_MATERIAL":
            return {
                ...state,
                loading: true
            }    

        case "MATERIAL_ADDED":
            let pattern = state.patterns.filter(pat => pat.id === action.payload.pattern_id)[0]
            let newPat = {
                ...pattern,
                materials: [...pattern.materials, action.payload]}
            let patterns = state.patterns.filter(p => p.id !== action.payload.pattern_id)
            return {
                ...state,
                patterns: [...patterns, newPat],
                loading: false
            }

        default:
            return state
    }
}

export default patternsReducer