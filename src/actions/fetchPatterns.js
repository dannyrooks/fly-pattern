
export const fetchPatterns = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_SAVED_PATTERNS"})
        return fetch('/patterns')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            dispatch({type: "PATTERNS_LOADED", payload: data})
        })
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
        .then(res => {
            if(!res.ok) {throw res}
            else return res.json()
        })
        .then(pattern => {
            return dispatch({ type: "PATTERN_ADDED", payload: pattern})
        })
        .catch((error) => {
            error.text().then(errorMessage => {
                alert(errorMessage)
            })
        })
    }
}

// export const addMaterial = (material, id) => {
//     return (dispatch) => {
//         dispatch({ type: "ADD_MATERIAL"}, material)
//         return fetch(`/patterns/${id}/materials`, {
//             method: "POST",
//             body: JSON.stringify(material),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(res => {
//             if(!res.ok) {throw res}
//             else 
//                 return res.json()
//         })
//         .catch((error) => {
//             error.text()
//             .then(errorMessage => {
//                 alert(errorMessage)
//             })
//         })
//     }
// }

// export const updatePatternForm = (name, value) => {
//     console.log("FORM ACTION FIRED!!")
//     const formData = { name, value }
//     return {
//         type: "UPDATE_PATTERN_FORM",
//         formData
//     }
// }

// export const deletePattern = (patternId) => {
//     return dispatch => {
//         return fetch(`/patterns`)
//     }
// }




