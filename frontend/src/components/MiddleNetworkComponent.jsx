import React from 'react'
import Avatar from "@mui/material/Avatar";
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import { Button } from '@mui/material';
import { convertToIndianFormat } from "../common/timeDateConvertor"

const MiddleNetworkComponent = ({ posts }) => {
    return (
        <div className='flex flex-col p-4'>
            <h1 className='text-2xl mb-2 bg-white'>Community Posts</h1>
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
                        <Button startIcon={<ThumbsUpDownIcon />} sx={{ textTransform: "none" }} size='small'>Likes {post.likes?.length}</Button>
                        <Button startIcon={<ModeCommentIcon />} sx={{ textTransform: "none", marginLeft: "20px" }} size='small'>Comments {post.comments?.length}</Button>
                        <Button startIcon={<BookmarkIcon />} sx={{ textTransform: "none", marginLeft: "20px" }} size='small'>Save</Button>
                        <Button startIcon={<ScreenShareIcon />} sx={{ textTransform: "none", marginLeft: "auto" }} size='small'>Share</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MiddleNetworkComponent