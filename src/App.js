import React, {useEffect} from "react";
import {API_KEY} from "./API/API";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboards from "./Pages/Dashboards/Dashboards";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./Pages/Projects/Projects";
import Project from "./Pages/Project/Project";

function App() {

    useEffect(() => {
        localStorage.setItem('apiKey', API_KEY)
    }, [])

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={'/dashboards'} element={<Dashboards />}/>
                <Route path={'/projects'} element={<Projects />}/>
                <Route path={'/project/:id'} element={<Project />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
