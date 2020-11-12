export const addMaterial = (material, id) => {
    return (dispatch) => {
        dispatch({ type: "ADD_MATERIAL"}, material)
        return fetch(`/patterns${id}/materials`, {
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