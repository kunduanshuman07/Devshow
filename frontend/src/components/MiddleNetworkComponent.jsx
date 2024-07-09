/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Avatar from "@mui/material/Avatar";
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import BookmarkIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkDoneIcon from '@mui/icons-material/Bookmark';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import { Button, CircularProgress } from '@mui/material';
import { convertToIndianFormat } from "../common/timeDateConvertor"
import LikeIcon from "@mui/icons-material/Favorite";
import axios from 'axios';

const MiddleNetworkComponent = ({ posts, setPosts }) => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const user = JSON.parse(localStorage.getItem("user"));
    const [title, setTitle] = useState('Community');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (window.location.pathname === '/saved-posts') {
            setTitle('Saved');
            const updatedPosts = posts.filter((post) =>
                post?.userSaves?.some((userId) => userId === user?._id)
            );
            setPosts(updatedPosts);
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
            const updatedPosts = posts.filter((post) =>
                post?.userId === user?._id
            );
            setPosts(updatedPosts);
            setLoading(false);
        }
        else {
            setLoading(false);
        }
    }, [posts])
    const handleLike = async (id) => {
        const res = await axios.post(`${BACKEND_URL}/community/like-post`, { id, userId: user?._id });
        if (res.status === 200) {
            const updatedPosts = posts.map((post) =>
                post._id === res.data.post._id ? res.data.post : post
            );
            setPosts(updatedPosts);
        }
    }
    const handleSavepost = async (id) => {
        const res = await axios.post(`${BACKEND_URL}/community/save-post`, { id, userId: user?._id });
        if (res.status === 200) {
            const updatedPosts = posts.map((post) =>
                post._id === res.data.post._id ? res.data.post : post
            );
            setPosts(updatedPosts);
        }
    }
    const findSaved = (post) => {
        return post?.userSaves?.some((x) => x === user?._id) || false;
    };
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
                        <Button startIcon={<LikeIcon />} sx={{ textTransform: "none", color: "red" }} size='small' onClick={() => handleLike(post?._id)}>{post.likes?.length}</Button>
                        {title === 'Community' && <Button startIcon={findSaved(post) ? <BookmarkDoneIcon /> : <BookmarkIcon />} sx={{ textTransform: "none", marginLeft: "20px" }} size='small' onClick={() => handleSavepost(post?._id)}>{findSaved(post) ? 'Saved' : 'Save'}</Button>}
                        <Button startIcon={<ScreenShareIcon />} sx={{ textTransform: "none", marginLeft: "auto" }} size='small'>Share</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MiddleNetworkComponent