import React from 'react';
import {Paper, Table, TableContainer} from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import ProjectItem from "./ProjectItem/ProjectItem";

const ProjectsTable = ({projects}) => {

    if (!projects) {
        return <h1>Loading...</h1>
    }

    return (
        <TableContainer component={Paper} sx={{mt: '2rem'}}>
            <Table sx={{ minWidth: 900 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Key</TableCell>
                        <TableCell align="right">isPrivate</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {projects.map(project => {
                        return <ProjectItem key={`${project.id}-project`} project={project}/>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProjectsTable;