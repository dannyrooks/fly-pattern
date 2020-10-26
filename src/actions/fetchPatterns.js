// actions are functions that return those objects

export const fetchPatterns = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_PATTERNS"})
        return fetch('/patterns')
        .then(res => res.json())
        .then(data => dispatch({type: "PATTERNS_LOADED", payload: data}))
    }
}

export const addPattern = (pattern) => {
    return (dispatch) => {
        dispatch({ type: "ADD_PATTERN"}, pattern)
        return fetch('/patterns', {
            method: "POST",
            body: JSON.stringify(pattern),
            headers: {
                'Content-Type': 'application'
            }
        })
    }
}


