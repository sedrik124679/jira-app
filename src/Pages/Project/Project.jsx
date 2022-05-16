import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOneProject} from "../../redux/actions/projects";
import {getAllIssues} from "../../redux/actions/issues";
import {Box, Button, Container, Typography} from "@mui/material";
import IssuesTable from "../../components/IssuesTable/IssuesTable";

const Project = () => {

    const id = useParams().id;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneProject(id))
    }, [])

    const project = useSelector(state => state.projects.project)

    useEffect(() => {
        if(project) dispatch(getAllIssues(project.name))
    }, [project])

    const issues = useSelector(state => state.issues.issues)
    if(!project) {
        return <h1>Loading...</h1>
    }



    return (
        <Container>
            <Box sx={{mt: '2rem'}} display={'flex'} justifyContent={'space-between'}>
                <Typography variant={'h4'} alignSelf={'center'}>Issues</Typography>
                <Button size={'large'} color={'secondary'} variant={'contained'}>Create new issue</Button>
            </Box>
            <IssuesTable issues={issues?.issues}/>
        </Container>
    );
};

export default Project;