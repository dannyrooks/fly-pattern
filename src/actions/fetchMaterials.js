export const addMaterial = (material, id) => {
    return (dispatch) => {
        dispatch({type:"ADD_MATERIAL"}, material)
        return fetch(`/patterns/${id}/materials`, {
            method: "POST",
            body: JSON.stringify(material),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(material => dispatch({
            type: 'MATERIAL_ADDED',
            payload: material
            })
        )
    }
}

export const fetchMaterials = (id) => {
    return (dispatch) => {
      dispatch({ 
          type: 'FETCHING_MATERIALS' 
        });
      fetch(`/patterns/${id}/materials`)
        .then(response => response.json())
        .then(materials => dispatch({ 
            type: 'MATERIALS_LOADED', 
            payload: materials 
        }));
    };
  }

