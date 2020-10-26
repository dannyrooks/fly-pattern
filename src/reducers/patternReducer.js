
// updates the part of my store that have to do with the pattern
// action is sent to reducer

export default (state = { patterns: [], loading: false }, action) => {

    switch(action.type) {
        case "LOADING_PATTERNS":
            return {
                ...state,
                loading: true
            }
        case "PATTERNS_LOADED":
            return {
                ...state,
                patterns: action.payload,
                loading: false
            }    

        default:
            return state
    }
}