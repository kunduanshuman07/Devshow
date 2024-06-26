import React from 'react'
import { Box, IconButton, Modal } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import ClearAllIcon from '@mui/icons-material/ClearAll';

const ModalComponent = ({ modalOpen, handleClose }) => {
    return (
        <Modal
            open={modalOpen}
            onClose={handleClose}
        >
            <Box sx={{ background: "white", position: "fixed", width: "400px", maxHeight: "90vh", height: "90vh", border: "none", marginTop: "10vh", borderRadius: "10px", padding: "10px", display: "flex", flexDirection: "column", cursor: "pointer", overflow: "auto" }}>
                <div className='flex flex-row mt-2'>
                    <h1 className='text-sm text-sky-700 font-bold my-auto'>Notifications</h1>
                    <IconButton sx={{ marginLeft: "auto" }} size='small' onClick={handleClose}>
                        <CloseIcon sx={{ fontSize: "12px" }} />
                    </IconButton>
                </div>
                <div className='flex flex-col p-1 mt-2'>
                    <div className='flex flex-row mt-4'>
                        <ClearAllIcon sx={{ fontSize: "10px", margin: "auto 5px" }} />
                        <h1 className='text-xs ml-1'>Anshuman Kundu commented on your post</h1>
                        <h1 className='ml-auto text-xs text-slate-400 font-bold'>5 min ago</h1>
                    </div>
                    <div className='flex flex-row mt-4'>
                        <ClearAllIcon sx={{ fontSize: "10px", margin: "auto 5px" }} />
                        <h1 className='text-xs ml-1'>Anshuman Kundu commented on your post</h1>
                        <h1 className='ml-auto text-xs text-slate-400 font-bold'>5 min ago</h1>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default ModalComponent