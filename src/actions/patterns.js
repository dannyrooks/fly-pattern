// actions are functions that return those objects

export const getPatterns = () => {
    return dispatch => {
        dispatch({type: "LOADING_PATTERNS"})
        return fetch('/patterns') //proxy it would normally be http://localhost:3000/patterns
        .then(res => res.json())
        .then(patterns => dispatch({type: "PATTERNS_LOADED", payload: patterns}))
    }
}
