import { Avatar, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import FlareIcon from '@mui/icons-material/Flare';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import { useNavigate } from 'react-router-dom';
import {convertToIndianFormat} from "../common/timeDateConvertor"
const FeedMainComponent = ({ projects }) => {
  const navigate = useNavigate();
  return (
    <div className='w-full p-4 flex flex-col'>
      <h1 className='text-2xl'>Projects Home</h1>
      {projects.map((project, index) => (
        <div className='mt-4 p-4 flex flex-col' style={{ border: "1px solid #cbd5e1", borderRadius: "5px" }} key={index}>
          <div className='flex flex-row'>
            <Avatar sx={{ width: "30px", height: "30px", margin: "auto 0px" }} />
            <div className='flex flex-col ml-2 my-auto'>
              <h1 className='text-sm'>kundu_anshuman</h1>
              <h1 className='text-xs font-bold text-gray-400'>{convertToIndianFormat(project.createdAt)}</h1>
            </div>
          </div>
          <div className='flex flex-col p-4 mt-4 bg-[#f8fafc] rounded-lg cursor-pointer' onClick={() => navigate(`/project-detail/${project._id}`)}>
            <h1 className='text-sm font-bold'>{project.title}</h1>
            <p className='mt-2 text-xs'>{project.description}</p>
            <h1 className='text-xs font-bold mt-2 text-[#94a3b8]'>Techstacks used</h1>
            <div className='grid grid-cols-4 gap-2 mt-2'>
              {project.techstacks?.map((techstack, index) => (
                <button className='btn btn-xs bg-[#94a3b8] rounded-lg text-xs text-white py-1' key={index}>{techstack}</button>
              ))}
            </div>
            <div className='flex flex-row mt-4'>
              <Tooltip title="Endorsements">
                <IconButton size='small'>
                  <FlareIcon fontSize='10' />
                </IconButton>
              </Tooltip>
              <h1 className='text-xs my-auto'>{project.endorsements.length}</h1>
              <Tooltip title="Comments">
                <IconButton size='small' sx={{ marginLeft: "15px" }}>
                  <MapsUgcRoundedIcon fontSize='10' />
                </IconButton>
              </Tooltip>
              <h1 className='text-xs my-auto'>{project.comments.length}</h1>
            </div>
          </div>
          <a href={`/project-detail/${project._id}`} className='text-xs mt-2 text-[#0284c7]'>More...</a>
        </div>
      ))}
    </div>
  )
}

export default FeedMainComponent