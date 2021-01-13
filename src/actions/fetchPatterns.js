
export const fetchPatterns = () => {
    return dispatch => {
        dispatch({ type: "FETCHING_PATTERNS" })
        return fetch('/patterns')
        .then(res => res.json())
        .then(data => {
            console.log('fetching patterns!')
            return dispatch({type: "PATTERNS_LOADED", payload: data})
        })
    }
}

export const addPattern = (pattern) => {
    return dispatch => {
        dispatch({ type: "ADD_PATTERN"})
        fetch('/patterns', {
            method: "POST",
            body: JSON.stringify(pattern),
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            }
        })
        .then(res => {
            if(!res.ok) {throw res}
            else return res.json()
        })
        .then(pattern => {
            return dispatch({ type: "PATTERN_ADDED", payload: pattern})
        })
        .catch((error) => {
            error.text()
            .then(errorMessage => {
                alert(errorMessage)
            })
        })
    }
}

export const addMaterial = (material, id) => {
    return dispatch => {
        dispatch({type: "ADD_MATERIAL"})
        return fetch(`/patterns/${id}/materials`, {
            method: "POST",
            body: JSON.stringify(material),
            headers: {
                'Content-Type': 'application/json',
                'Accept-Type': 'application/json'
            }
        })
        .then(res => res.json())
    
        .then(material => {
            console.log(material)
            return dispatch({type: 'MATERIAL_ADDED', payload: material})
        })
    }
}





