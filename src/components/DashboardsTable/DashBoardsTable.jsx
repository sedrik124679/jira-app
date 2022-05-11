import React from 'react';
import {Paper, Table, TableContainer} from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import DashboardItem from "./DashboardItem/DashboardItem";

const DashBoardsTable = ({dashboards}) => {
    return (
        <TableContainer component={Paper} sx={{mt: '2rem'}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Owner</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dashboards.map(dashboard => {
                        return <DashboardItem dashboard={dashboard} key={`${dashboard.id}-dashboard`} />
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DashBoardsTable;