import { Button } from '@mui/material'
import React from 'react'
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';

const FeedAnnComponent = () => {
  return (
    <div className='p-4 flex flex-col sticky top-16'>
      <div className='rounded-lg p-4 flex flex-col' style={{ background: "linear-gradient(to right, #000428, #004e92)" }}>
        <div className='flex flex-row'>
          <img src='/assets/Logo.svg' alt='Logo' width={30} height={30} />
          <h1 className='text-xl text-white ml-2'>Events</h1>
        </div>
        <p className='text-sm text-white mt-4'>Join us for the 10th anniversary of our global developer event on AI, DevEx, and security.
        </p>
        <p className='text-xs text-gray-200 mt-2'>Get 35% off your tickets to Devshow Universe, only until July 8.</p>
        <Button style={{ background: "white", color: "black", marginTop: "10px", textTransform: "none", fontWeight: "bold" }} size='small'>Register</Button>
      </div>
      <div className='rounded-md border mt-4 p-2 flex flex-col'>
        <h1 className='mb-2'>Featured Projects</h1>
        <Button startIcon={<FiberManualRecordRoundedIcon />} size='small' style={{ textTransform: "none", color: "#0369a1", marginRight: "auto", marginTop: "5px", padding: "0px" }}>InfoFusion</Button>
        <Button startIcon={<FiberManualRecordRoundedIcon />} size='small' style={{ textTransform: "none", color: "#0369a1", marginRight: "auto", marginTop: "5px", padding: "0px" }}>Trippin.Trips</Button>
      </div>
    </div>
  )
}

export default FeedAnnComponent