// actions are functions that return those objects

export const fetchPatterns = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_SAVED_PATTERNS"})
        return fetch('/patterns')
        .then(res => res.json())
        .then(data => dispatch({type: "PATTERNS_LOADED", payload: data}))
    }
}

export const addPattern = (pattern) => {
    return (dispatch) => {
        dispatch({ type: "ADD_PATTERN"})
        fetch('/patterns', {
            method: "POST",
            body: JSON.stringify(pattern),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(pattern => dispatch({ type: "PATTERN_ADDED", payload: pattern}))
    }
}

export const patternForm = (name, value) => {
    console.log("FORM ACTION FIRED!!")
    return {
        type: "UPDATE_PATTERN_FORM",
        formData: { name, value }
    }
}


