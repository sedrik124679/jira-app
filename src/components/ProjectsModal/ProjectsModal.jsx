import React, {useState} from 'react';
import {Box, Button, Modal, TextareaAutosize, Typography} from "@mui/material";
import MyInput from "../UI/MyInput/MyInput";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Create} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {addNewProject} from "../../redux/actions/projects";
import {useNavigate} from "react-router-dom";

const ProjectsModal = ({open, handleClose}) => {

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
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.key || !formData.name || !formData.description || !formData.projectTemplateKey) {
            alert('Please, fill all fields');
            return
        }

        formData.key = formData.key.toUpperCase();

        dispatch(addNewProject(formData, navigate))
        clearForm()
        handleClose()
    }

    const clearForm = () => {
        setFormData({
            key: "",
            name: "",
            projectTypeKey: "software",
            description: "",
            projectTemplateKey: "",
            leadAccountId: "62717687d7fd480068d8071e",
            assigneeType: "PROJECT_LEAD",
            avatarId: 10424
        })
    }

    const [formData, setFormData] = useState({
        key: "",
        name: "",
        projectTypeKey: "software",
        description: "",
        projectTemplateKey: "",
        leadAccountId: "62717687d7fd480068d8071e",
        assigneeType: "PROJECT_LEAD",
        avatarId: 10424
    })

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form onSubmit={handleSubmit}>
                    <Typography variant={'h6'} component={'h6'}>Create project</Typography>
                    <Box sx={{mt: '1rem'}}>
                        <label htmlFor="projectNameId" style={{marginTop: '1rem'}}>Project name</label>
                        <MyInput label={'Project name'}
                                 id={'projectNameId'}
                                 sx={{mt: '1rem'}}
                                 variant={'outlined'}
                                 value={formData.name}
                                 onChange={e => setFormData({...formData, name: e.target.value})}
                                 fullWidth={true}
                        />
                    </Box>
                    <Box sx={{mt: '1rem'}}>
                        <label htmlFor="projectKeyId" style={{marginTop: '1rem'}}>Project key</label>
                        <MyInput label={'Project key'}
                                 id={'projectKeyId'}
                                 sx={{mt: '1rem'}}
                                 variant={'outlined'}
                                 value={formData.key}
                                 onChange={e => setFormData({...formData, key: e.target.value})}
                                 fullWidth={true}
                        />
                    </Box>
                    <Box sx={{mt: '1rem'}}>
                        <label htmlFor="projectsDescr">Description</label>
                        <TextareaAutosize
                            id={'projectsDescr'}
                            aria-label="empty textarea"
                            placeholder="Description"
                            style={{ display: 'block', width: '100%', minHeight: '70px', marginTop: '0.5rem', padding: '5px' }}
                            value={formData.description}
                            onChange={e => setFormData({...formData, description: e.target.value})}
                        />
                    </Box>
                    <Typography sx={{mt: '1rem'}}>Project type</Typography>
                    <FormControl fullWidth sx={{mt: '0.5rem'}}>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.projectTemplateKey}
                            label="Age"
                            onChange={e => setFormData({...formData, projectTemplateKey: e.target.value})}
                        >
                            <MenuItem value={'com.pyxis.greenhopper.jira:gh-simplified-kanban-classic'}>Kanban</MenuItem>
                            <MenuItem value={'com.pyxis.greenhopper.jira:gh-simplified-scrum-classic'}>Scrum</MenuItem>
                            <MenuItem value={'com.pyxis.greenhopper.jira:gh-simplified-basic'}>Bug tracking</MenuItem>
                        </Select>
                    </FormControl>
                    <Button sx={{mt: '2rem'}} fullWidth={true} variant={"contained"} type={'submit'} endIcon={<Create />}>Create project</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default ProjectsModal;