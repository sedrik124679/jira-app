import {ADD_ISSUE, GET_ISSUES} from "../constants/constants";

const issuesReducer = (state = {issues: []}, action) => {
    switch (action.type) {
        case GET_ISSUES:
            return {...state, issues: action.data.issues, loading: false, errors: null}
        case ADD_ISSUE:
            return {...state, issues: [...state.issues, action.data]}
        default:
            return state
    }
}

export default issuesReducer;