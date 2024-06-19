import { Avatar, Button, TextField } from '@mui/material'
import React from 'react'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useNavigate } from 'react-router-dom';

const FeedSibarComponent = () => {
    const navigate = useNavigate();
    return (
        <div className='w-1/3 p-4 flex flex-col'>
            <div className='flex'>
                <h1 className='text-xs mr-auto font-bold my-auto'>Top Projects</h1>
                <Button startIcon={<LibraryAddIcon />} style={{ backgroundColor: "#0369a1", textTransform: "none", color: "white", fontSize: "10px" }} size='small' onClick={() => navigate('/new')}>New</Button>
            </div>
            <TextField
                placeholder='Find a project...'
                size='small'
                sx={{ marginTop: "10px" }}

            />
            <div className='flex flex-col mt-2 mb-2'>
                <div className='flex mt-2' style={{ cursor: "pointer" }}>
                    <Avatar alt='InfoFusion' sx={{ width: "20px", height: "20px" }} />
                    <h1 className='text-xs ml-2 my-auto'>InfoFusion</h1>
                </div>
                <div className='flex mt-2' style={{ cursor: "pointer" }}>
                    <Avatar alt='InfoFusion' sx={{ width: "20px", height: "20px" }} />
                    <h1 className='text-xs ml-2 my-auto'>Trippin Trips</h1>
                </div>
            </div>
            <a href='/show-more' className='text-[#0284c7] text-xs mt-2'>Show more</a>
        </div>
    )
}

export default FeedSibarComponent