import React from 'react';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {Avatar, Typography} from "@mui/material";

const IssueItem = ({issue}) => {
    const {id, key, fields} = issue;

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
                <Avatar sx={{width: '24px', height: '24px'}} title={fields.issuetype.name} src={`${fields.issuetype.iconUrl}`} />
            </TableCell>
            <TableCell align="center">{key}</TableCell>
            <TableCell align="center">{fields.summary}</TableCell>
            <TableCell align="center">{fields.assignee ? fields.assignee : 'Unassigned'}</TableCell>
            <TableCell align="center" style={{display: 'flex', justifyContent: 'center'}}>
                <Avatar src={`${Object.values(fields.reporter.avatarUrls)[0]}`} style={{width: '24px', height: '24px'}}/>
                <Typography alignSelf={'center'} align={'center'}>{fields.reporter.displayName}</Typography>
            </TableCell>
            <TableCell align="center">{fields.status.name}</TableCell>
            <TableCell align="right">{fields.resulution ? fields.resulution : 'Unresolved'}</TableCell>
        </TableRow>
    );
};

export default IssueItem;