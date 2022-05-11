import React, {useEffect} from 'react';
import {Box, Button, Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getAllProject} from "../../redux/actions/projects";
import ProjectsTable from "../../components/ProjectsTable/ProjectsTable";

const Projects = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProject())
    }, [])

    const state = useSelector(state => state.projects.projects)

    if (!state) {
        return <h1>Loading...</h1>
    }

    return (
        <Container>
            <Box display={'flex'} justifyContent={'space-between'} sx={{mt: '2rem'}}>
                <Typography alignSelf={'center'} variant={'h4'}>Projects</Typography>
                <Button variant={'contained'} color={'warning'}>Create project</Button>
            </Box>
            <ProjectsTable projects={state} />
        </Container>
    );
};

export default Projects;