import React from 'react';
import TableCell from "@mui/material/TableCell";
import {Avatar, IconButton, Typography} from "@mui/material";
import TableRow from "@mui/material/TableRow";
import {Delete} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {deleteOneDashboard} from "../../../redux/actions/dashboards";

const DashboardItem = ({dashboard}) => {

    const {id, owner, name} = dashboard;

    const dispatch = useDispatch();

    return (
        <TableRow key={id} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
            <TableCell component="th" scope="row">
                {id}
            </TableCell>
            <TableCell align="right">{name}</TableCell>
            <TableCell align="right" sx={{display: 'flex', alignItems: 'center'}}>
                {owner ? <Avatar src={`${Object.values(owner?.avatarUrls)[0]}`}/> : null}
                <Typography>
                    {owner ? owner?.displayName : 'Unknown'}
                </Typography>
                {owner
                    ? <IconButton onClick={() => dispatch(deleteOneDashboard(id))}>
                        <Delete color={'error'} />
                    </IconButton>
                    : null}
            </TableCell>
        </TableRow>
    );
};

export default DashboardItem;