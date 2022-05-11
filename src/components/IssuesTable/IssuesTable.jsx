import React from 'react';
import {Paper, Table, TableContainer, Typography} from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import IssueItem from "./IssueItem/IssueItem";

const IssuesTable = ({issues}) => {

    if (issues?.length === 0) {
        return <Typography align={'center'}>You don't have any issues</Typography>
    }

    return (
        <TableContainer component={Paper} sx={{mt: '2rem'}}>
            <Table sx={{ minWidth: 900 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align={'left'}>Type</TableCell>
                        <TableCell align={'center'}>Key</TableCell>
                        <TableCell align={'center'}>Summary</TableCell>
                        <TableCell align={'center'}>Assignee</TableCell>
                        <TableCell align={'center'}>Reporter</TableCell>
                        <TableCell align={'center'}>Status</TableCell>
                        <TableCell align={'right'}>Resolution</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {issues?.map(issue => {
                        return <IssueItem key={`${issue.id}-issue`} issue={issue}/>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default IssuesTable;