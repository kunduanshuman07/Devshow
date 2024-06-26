import React, { useState } from 'react'
import { Avatar, Box, IconButton, Modal } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import ClearAllIcon from '@mui/icons-material/ClearAll';
import OpenMessageComponent from './OpenMessageComponent';

const ModalComponent = ({ modalOpen, handleClose, modalState }) => {
    const [openMessage, setOpenMessage] = useState(false);
    const handleMessageClick = () => {
        setOpenMessage(true);
    }
    const handleCloseMessage = () => {
        setOpenMessage(false);
    }
    return (
        <Modal
            open={modalOpen}
            onClose={handleClose}
        >
            <Box sx={{ background: "white", position: "fixed", width: "400px", maxHeight: "90vh", height: "90vh", border: "none", marginTop: "10vh", borderRadius: "5px", display: "flex", flexDirection: "column", cursor: "pointer", overflow: "auto" }}>
                {modalState === 'Notifications' ?
                    <>
                        <div className='flex flex-row mt-2 p-2'>
                            <h1 className='text-sm text-sky-700 font-bold my-auto'>Notifications</h1>
                            <IconButton sx={{ marginLeft: "auto" }} size='small' onClick={handleClose}>
                                <CloseIcon sx={{ fontSize: "12px" }} />
                            </IconButton>
                        </div>
                        <div className='flex flex-col p-1'>
                            <div className='flex flex-row mt-4 hover:bg-slate-100 rounded-lg p-1'>
                                <ClearAllIcon sx={{ fontSize: "10px", margin: "auto 5px" }} />
                                <h1 className='text-xs ml-1'>Anshuman Kundu commented on your post</h1>
                                <h1 className='ml-auto text-xs text-slate-400 font-bold'>5 min ago</h1>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className='flex flex-row mt-2 sticky top-0 px-2'>
                            <h1 className='text-sm text-sky-700 font-bold my-auto'>Messages</h1>
                            <IconButton sx={{ marginLeft: "auto" }} size='small' onClick={handleClose}>
                                <CloseIcon sx={{ fontSize: "12px" }} />
                            </IconButton>
                        </div>
                        <div className='flex flex-col p-1 mt-2'>
                            {openMessage ?
                                <OpenMessageComponent handleCloseMessage={handleCloseMessage}/>
                                :
                                <div className='flex flex-row mt-4 hover:bg-slate-100 rounded-lg p-1' onClick={handleMessageClick}>
                                    <Avatar sx={{ width: "20px", height: "20px", margin: "auto 5px" }} />
                                    <div className='flex flex-col'>
                                        <h1 className='text-sm ml-1'>Anshuman Kundu</h1>
                                        <h1 className='text-xs font-bold text-slate-500 ml-1'>Hi How are you?</h1>
                                    </div>
                                    <h1 className='ml-auto text-xs my-auto'>10:34 p.m.</h1>
                                </div>}
                        </div>
                    </>
                }
            </Box>
        </Modal>
    )
}

export default ModalComponent