import React, {useState} from 'react';
import {Box, Button, Modal, Select, TextareaAutosize, Typography} from "@mui/material";
import MyInput from "../UI/MyInput/MyInput";
import {Create} from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import {addNewIssue} from "../../redux/actions/issues";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const IssueModal = ({open, handleClose, projectId, issueTypes}) => {

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

    const [formData, setFormData] = useState({
        fields: {
            summary: "",
            issuetype: {
                id: ""
            },
            project: {
                id: projectId
            },
            priority: {
                id: ""
            }
        }
    })

    const cleanForm = () => {
        setFormData({
            fields: {
                summary: "",
                issueType: {
                    id: ""
                },
                project: {
                    id: projectId
                },
                priority: {
                    id: ""
                }
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.fields.summary || !formData.fields.issuetype.id || !formData.fields.priority.id) {
            alert('Please, fill all the fields')
            return
        }
        dispatch(addNewIssue(formData, navigate))
        cleanForm()
        handleClose()
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
                    <Typography variant={'h5'}>Create new issue</Typography>

                    <Box>
                        <label htmlFor="summaryId">Summary</label>
                        <MyInput
                            label={'Summary'}
                            id={'summaryId'}
                            sx={{mt: '1rem'}}
                            variant={'outlined'}
                            fullWidth={true}
                            value={formData.fields.summary}
                            onChange={e => setFormData({
                                ...formData,
                                fields: {...formData.fields, summary: e.target.value}
                            })}
                        />
                    </Box>

                    <Box sx={{mt: '1rem'}}>
                        <label style={{marginTop: '1rem'}} htmlFor="">Issue type</label>
                        <Select
                            sx={{mt: '1rem'}}
                            fullWidth={true}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.fields?.issuetype?.id}
                            label="Age"
                            onChange={e => setFormData({
                                ...formData,
                                fields: {...formData.fields, issuetype: {id: e.target.value}}
                            })}
                        >
                            {issueTypes.map(issueType => <MenuItem key={`${issueType.id}-issueType`}
                                                                   value={issueType.id}>{issueType.name}</MenuItem>)}
                        </Select>
                    </Box>

                    <Box sx={{mt: '1rem'}}>
                        <label style={{marginTop: '1rem'}} htmlFor="">Priority</label>
                        <Select
                            sx={{mt: '1rem'}}
                            fullWidth={true}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.fields.priority.id}
                            label="Age"
                            onChange={e => setFormData({
                                ...formData,
                                fields: {...formData.fields, priority: {id: e.target.value}}
                            })}
                        >
                            <MenuItem value={"1"}>Highest</MenuItem>
                            <MenuItem value={"2"}>High</MenuItem>
                            <MenuItem value={"3"}>Medium</MenuItem>
                            <MenuItem value={"4"}>Low</MenuItem>
                            <MenuItem value={"5"}>Lowest</MenuItem>
                        </Select>
                    </Box>

                    <Button sx={{mt: '2rem'}}
                            fullWidth={true}
                            color={'secondary'}
                            variant={"contained"}
                            type={'submit'}
                            endIcon={<Create/>}
                    >Create new issue</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default IssueModal;