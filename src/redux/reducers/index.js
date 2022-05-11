import {combineReducers} from "redux";

import dashboards from './dashboardsReducer';
import projects from './projectsReducer';
import issues from './issuesReducer';

export const reducers = combineReducers({dashboards, projects, issues})