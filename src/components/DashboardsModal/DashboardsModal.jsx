import React, {useState} from 'react';
import {Box, Button, Modal, TextareaAutosize, Typography} from "@mui/material";
import MyInput from "../UI/MyInput/MyInput";
import {useDispatch} from "react-redux";
import {addNewDashboards} from "../../redux/actions/dashboards";

const DashboardsModal = ({open, handleClose}) => {

    const dispatch = useDispatch();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: '5px',
        p: 4,
    };


    const [formData, setFormData] = useState({
        editPermissions: [],
        name: '',
        sharePermissions: [
            {
                type: "private"
            }
        ],
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.name || !formData.description) {
            alert('Please, fill all fields')
            return
        }

        dispatch(addNewDashboards(formData))
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form onSubmit={handleSubmit}>
                    <Typography variant={'h6'} component={'h6'}>Create dashboard</Typography>
                    <Box sx={{mt: '1rem'}}>
                        <label htmlFor="nameInput">Name</label>
                        <MyInput
                            label={'Name'}
                            variant={'outlined'}
                            id={'nameInput'}
                            fullWidth={true}
                            sx={{mt: '0.5rem'}}
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                    </Box>
                    <Box sx={{mt: '1rem'}}>
                        <label htmlFor="dashboardDescr">Description</label>
                        <TextareaAutosize
                            id={'dashboardDescr'}
                            aria-label="empty textarea"
                            placeholder="Description"
                            style={{ display: 'block', width: '100%', minHeight: '70px', marginTop: '0.5rem', padding: '5px' }}
                            value={formData.description}
                            onChange={e => setFormData({...formData, description: e.target.value})}
                        />
                    </Box>

                    <Button sx={{mt: '2rem'}} fullWidth={true} variant={"contained"} type={'submit'}>Create</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default DashboardsModal;