import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOneProject} from "../../redux/actions/projects";
import {getAllIssues} from "../../redux/actions/issues";
import {Box, Button, Container, Select, Typography} from "@mui/material";
import IssuesTable from "../../components/IssuesTable/IssuesTable";
import IssueModal from "../../components/IssueModal/IssueModal";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

const Project = () => {

    const id = useParams().id;
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)

    useEffect(() => {
        dispatch(getOneProject(id))
    }, [])

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const project = useSelector(state => state.projects.project)
    const [sortBy, setSortBy] = useState('')

    useEffect(() => {
        if(project) dispatch(getAllIssues(project.name))
    }, [project])

    const issues = useSelector(state => state.issues.issues)

    if(!project) {
        return <h1>Loading...</h1>
    }

    const sortedIssue = issues?.filter(issue => issue.fields?.issuetype.name === sortBy)

    console.log(project.issueTypes)

    return (
        <Container>
            <Box sx={{mt: '2rem'}} display={'flex'} justifyContent={'space-between'}>
                <Typography variant={'h4'} alignSelf={'center'}>Issues</Typography>
                <Button onClick={handleOpen} size={'large'} color={'secondary'} variant={'contained'}>Create new issue</Button>
            </Box>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Sort by</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={sortBy}
                    label="Sort by"
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <MenuItem value={''}>None</MenuItem>
                    {project.issueTypes.map(issueType => <MenuItem key={`${issueType.id}-issueType`} value={issueType.name}>{issueType.name}</MenuItem>)}
                </Select>
            </FormControl>
            <IssuesTable issues={sortBy ? sortedIssue : issues} issueTypes={project.issueTypes} />
            <IssueModal open={open} handleClose={handleClose} projectId={project.id} issueTypes={project.issueTypes} />
        </Container>
    );
};

export default Project;