import axios from "axios";
import {Buffer} from 'buffer';


export const EMAIL = 'legioner1251@gmail.com';

const headers = {
    Authorization: `Basic ${Buffer.from(`${EMAIL}:${API_KEY}`).toString('base64')}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "X-Atlassian-Token": "no-check",
    "User-Agent": "*"
}

const API = axios.create({baseURL: 'https://legioner1251.atlassian.net/rest/api/3'});

export const getDashboards = () => API.get(`/dashboard`, {
    headers
});
export const addDashboards = (name, description, editPermissions, sharePermissions) => API.post('/dashboard', {name, description, editPermissions, sharePermissions}, {
    headers
});

export const getProjects = () => API.get('/project', {headers});
export const getProject = id => API.get(`/project/${id}`, {headers})
export const getAllIssuesByProjectName = projectName => API.get(`/search?jql=project=${projectName}&maxResults=1000`, {headers})