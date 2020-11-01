const initialState = {
    name: "",
    category: "",
    comment: ""
}

export default (state=initialState, action) => {
    switch (action.type) {
      case "UPDATE_PATTERN_FORM":
        return {
          ...state,
          [action.formData.name]: action.formData.value
        }



        return returnVal
      case "RESET_PATTERN_FORM":
        return initialState
      case "SET_FORM_DATA_FOR_EDIT":
        return action.formData
      default:
        return state
    }
  }
  