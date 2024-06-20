import { Avatar, Button } from '@mui/material'
import React from 'react'
import EditIcon from "@mui/icons-material/Edit";

const ProfileHeader = () => {
  return (
    <div className='flex flex-col w-full cursor-pointer pb-4' style={{borderBottom: "1px solid #cbd5e1"}}>
      <div className='w-full rounded-lg' style={{background: "#0369a1", height: "100px"}}>

      </div>
      <div className=' flex flex-row'>
        <Avatar sx={{width: "100px", height: "100px", borderRadius: "5px", margin: "-25px 0px 0px 40px"}}/>
        <div className='flex flex-col ml-4 mt-2'>
          <h1 className=''>Anshuman Kundu</h1>
          <h1 className='text-xs font-bold'>kundu_anshuman</h1>
          <Button startIcon={<EditIcon/>}style={{backgroundColor: "#0369a1", textTransform: "none", color: "white", fontSize: "10px", padding: "2px 10px", marginTop: "5px", marginRight: "auto"}} size='small'>Edit</Button>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader