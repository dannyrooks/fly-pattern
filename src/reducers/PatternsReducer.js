
// updates the part of my store that have to do with the pattern
// action is sent to reducer


const patternsReducer = (state = { patterns: [], loading: false }, action) => {
    switch(action.type) {
        case "FETCHING_PATTERNS":
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

        case "FETCHING_MATERIALS":
            return {
                ...state,
                loading: true
            }    

        case "MATERIALS_LOADED":
            return {
                patterns: action.payload,
                loading: false
            }    

        case "ADD_MATERIAL":
            return {
                ...state,
                loading: true
            }    

        case "MATERIAL_ADDED":
            function patternFunc(pattern) {
                if (pattern.id === action.payload.pattern_id) {
                    return {
                        ...pattern,
                        materials: [...pattern.materials, action.payload]
                    }
                } else { 
                    return pattern 
                }
            }
            //looks for the pattern that is passed in and making sure it matches with the pattern id of the material if yes then adds that material to that
            //pattern otherwise just returns that pattern as is.
            
            let newPatternArr = state.patterns.map(p => patternFunc(p)) //iterating over each pattern, using the function to find just the pattern to be altered
            return {
                ...state,
                patterns: [newPatternArr],
                loading: false
            }
        
        default:
            return state
    }
}

export default patternsReducer