import React from 'react'
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const ProfileLeft = () => {
  return (
    <div className='w-3/4 p-2 flex flex-col'>
      <h1 className='font-bold text-slate-400'>Bio</h1>
      <p className='bg-[#f8fafc] rounded-lg p-2 text-xs mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat veniam perferendis commodi laudantium beatae? Consequatur, nulla omnis eius laudantium at neque error praesentium a quia laboriosam, soluta quo! Hic, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nam sunt numquam eius odit nihil reprehenderit harum corporis cumque suscipit accusamus hic sit, error deserunt distinctio optio dolor, veniam id.</p>
      <h1 className='mt-4 text-slate-400 font-bold'>Skills</h1>
      <div className='grid grid-cols-10 gap-2 mt-2'>
        <button className='btn btn-xs bg-[#94a3b8] rounded-lg text-xs text-white py-1'>React Js</button>
        <button className='btn btn-xs bg-[#94a3b8] rounded-lg text-xs text-white py-1'>Node Js</button>
        <button className='btn btn-xs bg-[#94a3b8] rounded-lg text-xs text-white py-1'>MongoDb</button>
      </div>
      <h1 className='mt-4 text-slate-400 font-bold'>Experience</h1>
      <p className='bg-[#f8fafc] rounded-lg p-2 text-sm mt-2'><HdrWeakIcon sx={{marginRight: "10px"}}/> Software Engineer Incedo Inc</p>
      <a className='mt-4 text-sky-600 text-xs font-bold' href='/'><LinkedInIcon sx={{marginRight: "10px"}}/> https://kundu763476.com</a>
      <a className='mt-2 text-sky-600 text-xs font-bold' href='/'><GitHubIcon sx={{marginRight: "10px"}}/> https://kundu763476.com</a>
    </div>
  )
}

export default ProfileLeft