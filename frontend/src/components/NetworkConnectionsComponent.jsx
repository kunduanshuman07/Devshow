/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Avatar from "@mui/material/Avatar"
import { Button, CircularProgress, IconButton, Tooltip } from '@mui/material'
import HubIcon from '@mui/icons-material/Hub';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CancelIcon from '@mui/icons-material/Cancel';
import MessageIcon from '@mui/icons-material/Message';
import UndoIcon from '@mui/icons-material/Undo';
import axios from 'axios';

const NetworkConnectionsComponent = ({ tabState, setTabstate }) => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const user = JSON.parse(localStorage.getItem("user"));
    const [loading, setLoading] = useState(true);
    const [activeData, setActiveData] = useState([]);

    useEffect(() => {
        const fetchDesvshowNetwork = async () => {
            const res = await axios.get(`${BACKEND_URL}/network/all-users`);
            if (res.status === 200) {
                setActiveData(res.data.allUsers);
            }
        }
        const fetchMyConnections = async () => {
            const res = await axios.post(`${BACKEND_URL}/network/all-user-connections`, { id: user?._id });
            if (res.status === 200) {
                setActiveData(res.data.userConnections);
            }
        }
        const fetchConnectionRequests = async () => {
            const res = await axios.post(`${BACKEND_URL}/network/connection-requests`, { id: user?._id });
            if (res.status === 200) {
                setActiveData(res.data.userConnections);
            }
        }
        const fetchSentRequests = async () => {
            const res = await axios.post(`${BACKEND_URL}/network/requested-connections`, { id: user?._id });
            if (res.status === 200) {
                setActiveData(res.data.userConnections);
            }
        }
        const fixActiveData = () => {
            setLoading(true);
            if (tabState === 'All') {
                fetchDesvshowNetwork();
                setLoading(false);
            }
            else if (tabState === 'Connections') {
                fetchMyConnections();
                setLoading(false);
            }
            else if (tabState === 'Requests') {
                fetchConnectionRequests();
                setLoading(false);
            }
            else if (tabState === 'Sent') {
                fetchSentRequests();
                setLoading(false);
            }
        }
        fixActiveData();
    }, [tabState])

    const sendRequest = async (secondId) => {
        const res = await axios.post(`${BACKEND_URL}/network/send-request`, { id: user?._id, secondId });
        if (res.status === 200) {
            setTabstate('Sent');
        }
    }

    const acceptRequest = async (secondId) => {
        const res = await axios.post(`${BACKEND_URL}/network/accept-request`, { id: user?._id, secondId });
        if (res.status === 200) {
            setTabstate('Connections');
        }
    }

    const declineRequest = async (secondId) => {
        const res = await axios.post(`${BACKEND_URL}/network/decline-request`, { id: user?._id, secondId });
        if (res.status === 200) {
            setTabstate('Connections');
        }
    }

    const withdrawRequest = async (secondId) => {
        const res = await axios.post(`${BACKEND_URL}/network/withdraw-request`, { id: user?._id, secondId });
        if (res.status === 200) {
            setTabstate('Connections');
        }
    }

    if (loading) {
        return <div className='flex flex-row'>
            <CircularProgress sx={{ margin: "20px auto", color: "#0369a1" }} size={18} />
        </div>
    }
    if (activeData.length === 0) {
        return <div className='flex flex-row'>
            <h1 className='my-4 mx-auto text-sky-500 font-bold text-xs'>No data to display ... !</h1>
        </div>
    }
    return (
        <div className='grid grid-cols-4 gap-3 p-2'>
            {activeData?.map((data, index) => (
                data?._id!==user?._id &&
                <div className='rounded-lg shadow-md p-4 flex flex-col bg-white' key={index}>
                    <Avatar sx={{ width: "70px", height: "70px", margin: "5px auto" }} variant='circular' />
                    <h1 className='text-slate-600 font-bold mt-2 mx-auto'>{data?.firstName} {data?.lastName}</h1>
                    <h1 className='text-slate-400 font-bold text-sm mx-auto mb-2'>{data?.username}</h1>
                    {tabState === 'All' &&
                        <Button sx={{ margin: "10px auto", border: "1px solid #0ea5e9", borderRadius: "10px", padding: "4px 20px", textTransform: "none" }} endIcon={<HubIcon />} size='small' onClick={() => sendRequest(data?._id)}>Connect</Button>
                    }
                    {tabState === 'Requests' &&
                        <div className='flex flex-row mx-auto'>
                            <Tooltip title={'Accept'}>
                                <IconButton sx={{ margin: "10px", border: "1px solid #0ea5e9", borderRadius: "10px", textTransform: "none" }} size='small' onClick={() => acceptRequest(data?._id)}><HowToRegIcon sx={{ fontSize: "15px", color: "#0ea5e9" }} /></IconButton>
                            </Tooltip>
                            <Tooltip title={'Decline'}>
                                <IconButton sx={{ margin: "10px", border: "1px solid #0ea5e9", borderRadius: "10px", textTransform: "none" }} size='small' onClick={() => declineRequest(data?._id)}><CancelIcon sx={{ fontSize: "15px" }} /></IconButton>
                            </Tooltip>
                        </div>
                    }
                    {tabState === 'Connections' &&
                        <Button sx={{ margin: "10px auto", border: "1px solid #0ea5e9", borderRadius: "10px", padding: "4px 20px", textTransform: "none" }} endIcon={<MessageIcon />} size='small' onClick={() => sendRequest(data?._id)}>Message</Button>
                    }
                    {tabState === 'Sent' &&
                        <Button sx={{ margin: "10px auto", border: "1px solid #0ea5e9", borderRadius: "10px", padding: "4px 20px", textTransform: "none" }} endIcon={<UndoIcon />} size='small' onClick={() => withdrawRequest(data?._id)}>Withdraw</Button>
                    }
                </div>
            ))}
        </div>
    )
}

export default NetworkConnectionsComponent