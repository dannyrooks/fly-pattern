// export default (state = { patterns: [], loading: false }, action) => {

//     switch(action.type) {
//         case "LOADING_SAVED_PATTERNS_MATERIALS":
//             return {
//                 ...state,
//                 loading: true
//             }
            
//         case "PATTERNS_MATERIALS_LOADED":
//             return {
//                 ...state,
//                 patterns: action.payload,
//                 loading: false
//             }

//         case "ADD_PATTERN_MATERIAL":
//             return {
//                 ...state,
//                 loading: true
//             }        

//         case "PATTERN_MATERIAL_ADDED":
//             return {
//                 ...state,
//                 patterns: [...state.patterns, action.payload],
//                 loading: false
//             }

//         default:
//             return state
//     }
// }