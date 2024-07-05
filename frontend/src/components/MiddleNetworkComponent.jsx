import React, { useEffect, useState } from 'react'
import Avatar from "@mui/material/Avatar";
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import { Button, CircularProgress, IconButton, TextField } from '@mui/material';
import { convertToIndianFormat } from "../common/timeDateConvertor"
import axios from 'axios';

const MiddleNetworkComponent = ({ posts, setPosts }) => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const user = JSON.parse(localStorage.getItem("user"));
    const [title, setTitle] = useState('Community');
    const [loading, setLoading] = useState(true);
    const [startComment, setStartComment] = useState(false);
    const [commentLoading, setCommentloading] = useState(false);
    useEffect(() => {
        if (window.location.pathname === '/saved-posts') {
            setTitle('Saved');
            setLoading(false);
        }
        else if (window.location.pathname === '/trending-posts') {
            setTitle('Trending');
            setLoading(false);
        }
        else if (window.location.pathname === '/featured-posts') {
            setTitle('Featured');
            setLoading(false);
        }
        else if (window.location.pathname === '/my-posts') {
            setTitle('My');
            setLoading(false);
        }
        else {
            setLoading(false);
        }
    }, [])
    const handleComment = async () => {

    }
    if (loading) {
        return <div className='flex flex-row items-center mt-10'>
            <h1 className='text-sm ml-auto'>Loading .. </h1>
            <CircularProgress size={14} sx={{ marginLeft: "5px", marginRight: "auto" }} />
        </div>
    }
    return (
        <div className='flex flex-col p-4 ml-8'>
            <h1 className='text-2xl mb-2 bg-white'>{title} Posts</h1>
            {posts.map((post, index) => (
                <div className='flex flex-col mt-2 rounded-lg border p-2 cursor-pointer' key={index}>
                    <div className='flex flex-row px-4 mt-1'>
                        <Avatar sx={{ width: "25px", height: "25px", margin: "auto 0px" }} />
                        <h1 className='text-xs ml-2 my-auto text-slate-400 font-bold'>{post.username}</h1>
                        <h1 className='text-xs ml-2 my-auto'><HdrWeakIcon sx={{ fontSize: "12px" }} /></h1>
                        <h1 className='text-xs ml-2 my-auto text-slate-500'>{convertToIndianFormat(post.createdAt)}</h1>
                    </div>
                    <div className='mt-2 p-4'>
                        <p>{post.caption}</p>
                    </div>
                    <img src='/assets/Logo.svg' alt='Network' style={{ width: "200px", height: "200px", margin: "10px auto" }} />
                    <div className='flex flex-row mt-4 ml-4 mr-4'>
                        <Button startIcon={<ModeCommentIcon />} sx={{ textTransform: "none" }} size='small' onClick={() => setStartComment(true)}>{post.comments?.length}</Button>
                        <Button startIcon={<BookmarkIcon />} sx={{ textTransform: "none", marginLeft: "20px" }} size='small'>Save</Button>
                        <Button startIcon={<ScreenShareIcon />} sx={{ textTransform: "none", marginLeft: "auto" }} size='small'>Share</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MiddleNetworkComponent