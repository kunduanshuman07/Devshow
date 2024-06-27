import React from 'react'
import Avatar from "@mui/material/Avatar"
import { IconButton, Tooltip } from '@mui/material'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import axios from 'axios';

const NetworkComponent = ({ networkState, data, setNetworkState }) => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const user = JSON.parse(localStorage.getItem("user"));
    const sendRequest = async (secondId) => {
        const res = await axios.post(`${BACKEND_URL}/network/send-request`, { id: user._id, secondId: secondId });
        if (res.status === 200) {
            setNetworkState('Requests');
        }
    }
    const acceptRequest = async(secondId) => {
        const res = await axios.post(`${BACKEND_URL}/network/accept-request`, { id: user._id, secondId: secondId });
        if (res.status === 200) {
            setNetworkState('Connections');
        }
    }
    const declineRequest = async(secondId) => {
        const res = await axios.post(`${BACKEND_URL}/network/decline-request`, { id: user._id, secondId: secondId });
        if (res.status === 200) {
            setNetworkState('Network');
        }
    }
    const handleAction = (id) => {
        if(networkState === "Network"){
            sendRequest(id);
        }
        else if(networkState === "Requests"){
            acceptRequest(id);
        }
        else {
            declineRequest(id);
        }
    }
    return (
        <div className='flex flex-col bg-slate-50 rounded-lg mt-2 cursor-pointer'>
            {data?.map((users, index) => (
                users?._id !== user?._id &&
                <div className='flex flex-row p-2' key={index}>
                    <Avatar sx={{ width: "20px", height: "20px", margin: "auto 10px auto 0px" }} />
                    <div className='flex flex-col my-auto'>
                        <h1 className='text-sm my-auto'>{users?.firstName} {users?.lastName}</h1>
                        <h1 className='text-xs my-auto text-slate-400 font-bold'>{users?.username}</h1>
                    </div>
                    <Tooltip title={networkState === 'Network' ? 'Send Request' : networkState === 'Connections' ? 'Message' : 'Accept Request'}>
                        <IconButton size='small' sx={{ marginLeft: "auto" }} onClick={() => handleAction(users?._id)}>
                            {networkState === 'Network' && <GroupAddOutlinedIcon sx={{ fontSize: "18px", color: "#1e3a8a" }} />}
                            {networkState === 'Connections' && <SendOutlinedIcon sx={{ fontSize: "18px", color: "#1e3a8a" }} />}
                            {networkState === 'Requests' && <TaskAltOutlinedIcon sx={{ fontSize: "18px", color: "#1e3a8a" }} />}
                        </IconButton>
                    </Tooltip>
                </div>
            ))}
        </div>
    )
}

export default NetworkComponent