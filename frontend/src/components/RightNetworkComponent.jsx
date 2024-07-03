import React from 'react'
import Avatar from "@mui/material/Avatar"
import { Button } from '@mui/material'
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { useNavigate } from "react-router-dom"
const RightNetworkComponent = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className='flex flex-col ml-4 sticky top-16 p-4 cursor-pointer'>
      <div className='flex flex-col rounded-lg border'>
        <div className='w- bg-[#0369a1] rounded-lg' style={{ height: "70px" }}>
        </div>
        <Avatar sx={{ width: "80px", height: "80px", marginLeft: "20px", marginTop: "-30px" }} variant='circular' />
        <div className='flex flex-col mt-2 p-2'>
          <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nemo.</p>
          <h1 className='text-slate-600 font-bold mt-2'>{user?.firstName} {user?.lastName}</h1>
          <h1 className='text-slate-400 font-bold text-sm'>{user?.username}</h1>
        </div>
        <div className='flex flex-col p-2 pt-0'>
          <Button size='small' sx={{ color: "#0369a1", marginRight: "auto", textTransform: "none", padding: "0px" }} endIcon={<InsertLinkIcon />} onClick={() => navigate('/profile')}>Profile</Button>
          <Button size='small' sx={{ color: "#0369a1", marginRight: "auto", textTransform: "none", padding: "0px" }} endIcon={<InsertLinkIcon />} onClick={() => navigate('/my-network')}>Network</Button>
        </div>
      </div>
    </div>
  )
}

export default RightNetworkComponent