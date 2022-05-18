import axios from "axios";
import {Buffer} from 'buffer';


export const EMAIL = 'legioner1251@gmail.com';

const headers = {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Basic ${Buffer.from(`${EMAIL}:${API_KEY}`).toString('base64')}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "X-Atlassian-Token": "no-check",
    "User-Agent": "*",
    // "Connection": "keep-alive",
    // "Accept-Encoding": "gzip, deflate, br"
}

const API = axios.create({baseURL: 'https://legioner1251.atlassian.net/rest/api/3', headers});

export const getDashboards = () => API.get(`/dashboard`);
export const addDashboards = (formData) => API.post('/dashboard', {...formData});
export const deleteDashboard = (id) => API.delete(`/dashboard/${id}`)

export const getProjects = () => API.get('/project');
export const getProject = id => API.get(`/project/${id}`)
export const createProject = formData => API.post('/project', {...formData});
export const deleteProject = id => API.delete(`/project/${id}`);

export const getAllIssuesByProjectName = projectName => API.get(`/search?jql=project=${projectName}&maxResults=1000`)
export const addIssueToProject = (formData) => API.post(`/issue`, {...formData})
