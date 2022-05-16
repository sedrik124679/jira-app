import {ADD_DASHBOARDS, DELETE_DASHBOARD, GET_DASHBOARDS} from "../constants/constants";

const dashboardsReducer = (state = {dashboards: []}, action) => {
    switch (action.type) {
        case GET_DASHBOARDS:
            return {...state, dashboards: [...action.dashboards], loading: false, errors: null}
        case ADD_DASHBOARDS:
            return {...state, dashboards: [...state.dashboards, action.data]}
        case DELETE_DASHBOARD:
            // const afterDelete = state.dashboards.filter(dashboard => dashboard.id !== action.data.id)
            state.dashboards.filter(dashboard => dashboard.id !== action.data.id)
            return state
        default:
            return state
    }
}

export default dashboardsReducer;