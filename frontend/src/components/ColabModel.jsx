import React from 'react'
import { Box, Button, IconButton, List, ListItem, Modal } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";

const ColabModel = ({ modalOpen, handleClose, project }) => {
    return (
        <Modal
            open={modalOpen}
            onClose={handleClose}
            sx={{ display: "flex", justifyContent: "center" }}
        >
            <Box sx={{ background: "white", position: "fixed", marginTop: "40px", width: "600px", border: "none", borderRadius: "5px", display: "flex", flexDirection: "column", cursor: "pointer", overflow: "auto", padding: "10px" }}>
                <div className='flex flex-row px-2'>
                    <h1 className='text-2xl font-bold text-slate-500'>Apply for colaboration</h1>
                    <IconButton sx={{ marginLeft: "auto" }} size='small' onClick={handleClose}>
                        <CloseIcon sx={{ fontSize: "12px" }} />
                    </IconButton>
                </div>
                <div className='flex flex-col p-4 mt-4'>
                    <h1 className='font-bold text-slate-400'>What is it all about?</h1>
                    <p className='text-sm mt-4'>{project?.colabDescription}</p>
                    <h1 className='font-bold text-slate-400 mt-4'>Required Skills?</h1>
                    <List>
                        {project?.colabSkills?.map((skill, index) => (
                            <ListItem key={index}>
                                <p className='text-sm'>{index + 1}. {skill}</p>
                            </ListItem>
                        ))}
                    </List>
                </div>
                <div className='p-2 flex flex-col mt-2'>
                    <h1 className='text-xs font-bold text-sky-500'>After applying, the owner of this project will reach out to you via an email. Futher communications will be taken ahead from there and Devshow will not be responsible for any deals or negotiations not done on this platform.</h1>
                    <Button sx={{
                        backgroundColor: "#0369a1", color: "white", textTransform: "none", marginRight: "auto", marginTop: "20px", padding: "5px 20px", ":hover": {
                            backgroundColor: "#0369a1"
                        }
                    }} onClick={handleClose}>Apply</Button>
                </div>
            </Box>
        </Modal>
    )
}

export default ColabModel