import React, {useEffect, useState} from 'react';
import {Box, Button, Container, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getAllProject} from "../../redux/actions/projects";
import ProjectsTable from "../../components/ProjectsTable/ProjectsTable";
import ProjectsModal from "../../components/ProjectsModal/ProjectsModal";

const Projects = () => {

    const dispatch = useDispatch()

    const state = useSelector(state => state.projects.projects)

    useEffect(() => {
        dispatch(getAllProject())
    }, [state])

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    if (!state) {
        return <h1>Loading...</h1>
    }

    return (
        <Container>
            <Box display={'flex'} justifyContent={'space-between'} sx={{mt: '2rem'}}>
                <Typography alignSelf={'center'} variant={'h4'}>Projects</Typography>
                <Button onClick={handleOpen} variant={'contained'} color={'warning'}>Create project</Button>
            </Box>
            <ProjectsTable projects={state} />
            <ProjectsModal open={open} handleClose={handleClose}/>
        </Container>
    );
};

export default Projects;