import {GET_ISSUES} from "../constants/constants";

const issuesReducer = (state = {issues: null}, action) => {
    switch (action.type) {
        case GET_ISSUES:
            return {...state, issues: action.data, loading: false, errors: null}
        default:
            return state
    }
}

export default issuesReducer;