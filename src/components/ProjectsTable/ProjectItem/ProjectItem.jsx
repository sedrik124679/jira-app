import React from 'react';
import TableCell from "@mui/material/TableCell";
import {Avatar, Typography} from "@mui/material";
import TableRow from "@mui/material/TableRow";
import {Link} from "react-router-dom";

const ProjectItem = ({project}) => {

    if(!project) {
        return <h1>Loading...</h1>
    }

    const {id, key, avatarUrls, name, isPrivate} = project;

    return (
        <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell style={{display: 'flex'}} component="th" scope="row">
                <Avatar sx={{width: '24px', height: '24px'}} src={`${Object.values(avatarUrls)[0]}`}/>
                <Typography alignSelf={'center'} component={Link} to={`/project/${id}`}>{name}</Typography>
            </TableCell>
            <TableCell align="right">{key}</TableCell>
            <TableCell align="right">{isPrivate ? 'True' : 'False'}</TableCell>
        </TableRow>
    );
};

export default ProjectItem;