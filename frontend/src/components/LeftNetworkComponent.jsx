import React from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import PresentToAllOutlinedIcon from '@mui/icons-material/PresentToAllOutlined';
import SaveIcon from "@mui/icons-material/SaveAlt";
import AddIcon from "@mui/icons-material/Add";
import { Button } from '@mui/material';
import MessNotificationModal from './MessNotificationModal';
import { useMessNotifContext } from "../context/MessageNotificationContext"
import { useNavigate } from 'react-router-dom';

const LeftNetworkComponent = () => {
    const navigate = useNavigate();
    const { modalOpen, modalState, setModalOpen, setModalState, handleClose } = useMessNotifContext();
    const handleModalOpen = (state) => {
        setModalState(state);
        setModalOpen(true);
    }
    return (
        <div className='flex flex-col p-4 sticky top-0'>
            <Button startIcon={<AddIcon />} sx={{
                textTransform: "none", margin: "auto auto auto 0px", color: "white", background: "#0e7490", padding: "5px 20px", ":hover": {
                    color: "white", background: "#0e7490",
                }
            }} size='medium' onClick={() => navigate('/create-post')}>Create Post</Button>
            <div className='bg-slate-200 rounded-lg px-4 py-2 mt-4'>
                <h1 className='text-sky-700 font-bold text-sm'>Top Activities</h1>
            </div>
            <div className='mt-2 flex flex-col'>
                <Button startIcon={<WhatshotIcon />} size='small' sx={{ textTransform: "none", marginRight: "auto", color: "#0e7490" }}>Trending Posts</Button>
                <Button startIcon={<FeaturedPlayListIcon />} size='small' sx={{ textTransform: "none", marginRight: "auto", color: "#0e7490" }}>Featured Posts</Button>
            </div>
            <div className='bg-slate-200 rounded-lg px-4 py-2 mt-16'>
                <h1 className='text-sky-700 font-bold text-sm'>My Section</h1>
            </div>
            <div className='mt-2 flex flex-col'>
                <Button startIcon={<NotificationsNoneIcon />} size='small' sx={{ textTransform: "none", marginRight: "auto", color: "#0e7490" }} onClick={() => handleModalOpen('Notifications')}>Notifications</Button>
                <Button startIcon={<ForumOutlinedIcon />} size='small' sx={{ textTransform: "none", marginRight: "auto", color: "#0e7490" }} onClick={() => handleModalOpen('Messages')}>Messages</Button>
                <Button startIcon={<SaveIcon />} size='small' sx={{ textTransform: "none", marginRight: "auto", color: "#0e7490" }}>Saved Posts</Button>
                <Button startIcon={<PresentToAllOutlinedIcon />} size='small' sx={{ textTransform: "none", marginRight: "auto", color: "#0e7490" }}>Sent Requests</Button>
            </div>
            {modalOpen && <MessNotificationModal modalOpen={modalOpen} handleClose={handleClose} modalState={modalState} />}
        </div>
    )
}

export default LeftNetworkComponent