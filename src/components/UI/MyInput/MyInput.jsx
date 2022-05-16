import React from 'react';
import {TextField} from "@mui/material";

const MyInput = ({label, variant, id, fullWidth, sx, value, onChange}) => {
    return (
        <TextField
            label={label}
            variant={variant}
            id={id}
            fullWidth={fullWidth}
            sx={sx}
            value={value}
            onChange={onChange}
        />
    );
};

export default MyInput;