import { Button } from '@mui/material'
import React, { useState } from 'react'
import NetworkConnectionsComponent from '../components/NetworkConnectionsComponent';

const ConnectionsNetworkPage = () => {
  const [tabState, setTabstate] = useState('All');
  return (
    <div className='flex flex-row'>
      <div className='w-1/4 flex flex-col items-center mt-20'>
        <h1 className='text-2xl font-bold sticky top-10 text-[#075985]'>Devshow Network</h1>
        <img src='/assets/Logo.svg' alt='Logo' className='sticky top-20' width={200}/>
      </div>
      <div className='w-3/4 pr-12 flex flex-col p-4'>
        <div className='flex flex-row rounded-lg border sticky top-0 bg-white shadow-md z-10'>
          <Button sx={{ textTransform: "none", margin: "0px 0px", color: tabState === 'All' ? '#075985' : '#0ea5e9', fontWeight: "bold" }} onClick={() => setTabstate('All')}>All</Button>
          <Button sx={{ textTransform: "none", margin: "0px 5px", color: tabState === 'Connections' ? '#075985' : '#0ea5e9', fontWeight: "bold" }} onClick={() => setTabstate('Connections')}>My Connections</Button>
          <Button sx={{ textTransform: "none", margin: "0px 5px", color: tabState === 'Requests' ? '#075985' : '#0ea5e9', fontWeight: "bold" }} onClick={() => setTabstate('Requests')}>Requests</Button>
          <Button sx={{ textTransform: "none", margin: "0px 5px", color: tabState === 'Sent' ? '#075985' : '#0ea5e9', fontWeight: "bold" }} onClick={() => setTabstate('Sent')}>Sent</Button>
        </div>
        <div className='mt-4'>
          <NetworkConnectionsComponent tabState={tabState} setTabstate={setTabstate} />
        </div>
      </div>
    </div>
  )
}

export default ConnectionsNetworkPage