import React from 'react'
import Avatar from "@mui/material/Avatar"
import { IconButton, Tooltip } from '@mui/material'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

const NetworkComponent = ({ networkState }) => {
    return (
        <div className='flex flex-col bg-slate-50 rounded-lg mt-2 cursor-pointer'>
            <div className='flex flex-row p-2'>
                <Avatar sx={{ width: "20px", height: "20px", margin: "auto 10px auto 0px" }} />
                <div className='flex flex-col my-auto'>
                    <h1 className='text-sm my-auto'>Anshuman Kundu</h1>
                    <h1 className='text-xs my-auto text-slate-400 font-bold'>kundu_anshuman</h1>
                </div>
                <Tooltip title={networkState === 'Network' ? 'Send Request' : networkState === 'Connections' ? 'Message' : 'Accept Request'}>
                    <IconButton size='small' sx={{ marginLeft: "auto" }}>
                        {networkState === 'Network' && <GroupAddOutlinedIcon sx={{ fontSize: "18px", color: "#1e3a8a" }} />}
                        {networkState === 'Connections' && <SendOutlinedIcon sx={{ fontSize: "18px", color: "#1e3a8a" }} />}
                        {networkState === 'Requests' && <TaskAltOutlinedIcon sx={{ fontSize: "18px", color: "#1e3a8a" }} />}
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}

export default NetworkComponent