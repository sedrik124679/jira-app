import {ADD_DASHBOARDS, GET_DASHBOARDS} from "../constants/constants";

const dashboardsReducer = (state = {dashboards: []}, action) => {
    switch (action.type) {
        case GET_DASHBOARDS:
            return {...state, dashboards: action.data, loading: false, errors: null}
        case ADD_DASHBOARDS:
            return {...state}
        default:
            return state
    }
}

export default dashboardsReducer;