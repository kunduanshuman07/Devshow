import React from 'react'
import Avatar from "@mui/material/Avatar";
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import { Button } from '@mui/material';

const MiddleNetworkComponent = () => {
    return (
        <div className='flex flex-col p-4'>
            <h1 className='text-2xl mb-2'>Community Posts</h1>
            <div className='flex flex-col mt-2 rounded-lg border p-2 cursor-pointer'>
                <div className='flex flex-row px-4 mt-1'>
                    <Avatar sx={{ width: "25px", height: "25px", margin: "auto 0px" }} />
                    <h1 className='text-sm ml-2 my-auto'>Anshuman Kundu</h1>
                    <h1 className='text-xs ml-2 my-auto text-slate-400 font-bold'>kundu_anshuman</h1>
                    <h1 className='text-xs ml-2 my-auto'><HdrWeakIcon sx={{ fontSize: "12px" }} /></h1>
                    <h1 className='text-xs ml-2 my-auto text-slate-500'>June 2 2023</h1>
                </div>
                <div className='mt-2 p-4'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non accusantium, autem quisquam delectus quidem nihil illum! Reprehenderit id maiores commodi, quia corrupti voluptates dicta delectus necessitatibus sapiente quas accusantium assumenda.</p>
                </div>
                <img src='/assets/Logo.svg' alt='Network' style={{ width: "200px", height: "200px", margin: "10px auto" }} />
                <div className='flex flex-row mt-4'>
                    <Button startIcon={<ThumbsUpDownIcon />} sx={{ textTransform: "none" }} size='small'>Like</Button>
                    <Button startIcon={<ModeCommentIcon />} sx={{ textTransform: "none", marginLeft: "20px" }} size='small'>Comment</Button>
                    <Button startIcon={<BookmarkIcon />} sx={{ textTransform: "none", marginLeft: "20px" }} size='small'>Save</Button>
                    <Button startIcon={<ScreenShareIcon />} sx={{ textTransform: "none", marginLeft: "auto" }} size='small'>Share</Button>
                </div>
            </div>
        </div>
    )
}

export default MiddleNetworkComponent