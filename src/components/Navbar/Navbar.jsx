import React from 'react';
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" color="inherit" to={'/dashboards'} component={Link}>
                        Dashboards
                    </Typography>
                    <Typography variant="h6" color="inherit" to={'/projects'} component={Link}>
                        Projects
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;