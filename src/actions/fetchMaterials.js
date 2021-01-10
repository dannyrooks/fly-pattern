export const fetchMaterials = (id) => {
    return (dispatch) => {
      dispatch({type: 'FETCHING_MATERIALS' 
        });
      return fetch(`/patterns/${id}/materials`)
        .then(response => response.json())
        .then(materials => {
            console.log(materials)
            dispatch({type: 'MATERIALS_LOADED', payload: materials})
        });
    }
  }

export const addMaterial = (id) => {
    return dispatch => {
        dispatch({type: "ADD_MATERIAL"})
        return fetch(`/patterns/${id}/materials`, {
            method: "POST",
            body: JSON.stringify(id),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(material => {
            console.log('material added!')
            return dispatch({type: 'MATERIAL_ADDED', payload: material})
        })
    }
}



