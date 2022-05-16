import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllDashboards} from "../../redux/actions/dashboards";
import {Box, Button, Container, Modal, Typography} from "@mui/material";
import DashBoardsTable from "../../components/DashboardsTable/DashBoardsTable";
import DashboardsModal from "../../components/DashboardsModal/DashboardsModal";

const Dashboards = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const state = useSelector(state => state.dashboards.dashboards)

    useEffect(() => {
        dispatch(getAllDashboards())
    }, [state])

    if (!state) {
        return <h1>Loading...</h1>
    }

    return (
        <Container>
            <Box display={'flex'} justifyContent={'space-between'} sx={{mt: '2rem'}}>
                <Typography alignSelf={'center'} variant={'h4'}>Dashboards</Typography>
                <Button onClick={handleOpen} variant={'outlined'} color={'error'}>Create dashboard</Button>
            </Box>
            <DashBoardsTable
                dashboards={state}
            />
            <DashboardsModal open={open} dashboards={state} handleClose={handleClose}/>
        </Container>
    );
};

export default Dashboards;