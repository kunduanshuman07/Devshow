import { Avatar, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import FlareIcon from '@mui/icons-material/Flare';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
const FeedMainComponent = ({projects}) => {
  return (
    <div className='w-full p-4 flex flex-col'>
      <h1 className='text-2xl'>Project Home</h1>
      <div className='mt-4 p-4 flex flex-col' style={{ border: "1px solid #cbd5e1", borderRadius: "5px" }}>
        <div className='flex flex-row'>
          <Avatar sx={{ width: "30px", height: "30px", margin: "auto 0px" }} />
          <div className='flex flex-col ml-2 my-auto'>
            <h1 className='text-sm'>kundu_anshuman</h1>
            <h1 className='text-xs font-bold text-gray-400'>2 months ago</h1>
          </div>
        </div>
        <div className='flex flex-col p-4 mt-4 bg-[#f8fafc] rounded-lg cursor-pointer'>
          <h1 className='text-sm font-bold'>InfoFusion</h1>
          <p className='mt-2 text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum error quos dolor id esse voluptatem asperiores voluptate suscipit, possimus minima tempore dicta animi neque? Laborum eos eius distinctio odit maiores.</p>
          <h1 className='text-xs font-bold mt-2 text-[#94a3b8]'>Techstacks used</h1>
          <div className='grid grid-cols-4 gap-2 mt-2'>
            <button className='btn btn-xs bg-[#94a3b8] rounded-lg text-xs text-white py-1'>React Js</button>
            <button className='btn btn-xs bg-[#94a3b8] rounded-lg text-xs text-white py-1'>Node Js</button>
            <button className='btn btn-xs bg-[#94a3b8] rounded-lg text-xs text-white py-1'>MongoDb</button>
          </div>
          <div className='flex flex-row mt-4'>
            <Tooltip title="Endorse">
              <IconButton size='small'>
                <FlareIcon fontSize='10'/>
              </IconButton>
            </Tooltip>
            <h1 className='text-xs my-auto'>2</h1>
            <Tooltip title="Comment">
              <IconButton size='small' sx={{marginLeft: "15px"}}>
                <MapsUgcRoundedIcon fontSize='10'/>
              </IconButton>
            </Tooltip>
            <h1 className='text-xs my-auto'>10</h1>
          </div>
        </div>
        <a href='/more' className='text-xs mt-2 text-[#0284c7]'>More...</a>
      </div>
    </div>
  )
}

export default FeedMainComponent