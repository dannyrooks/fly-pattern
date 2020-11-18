export const addMaterial = (material, id) => {
    return (dispatch) => {
        dispatch({ type: "ADD_MATERIAL"}, material)
        return fetch(`/patterns/${id}/materials`, {
            method: "POST",
            body: JSON.stringify(material),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if(!res.ok) {throw res}
            else 
                return res.json()
        })
        .catch((error) => {
            error.text()
            .then(errorMessage => {
                alert(errorMessage)
            })
        })
    }
}

export const fetchMaterials = () => {
    return dispatch => {
        return fetch('/materials', {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => res.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(addMaterial(response.data))
            }
        })
        .catch(console.log)
    }
}

