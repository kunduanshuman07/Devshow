import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import NetworkConnectionsComponent from '../components/NetworkConnectionsComponent';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

const ConnectionsNetworkPage = () => {
  const [tabState, setTabstate] = useState('All');
  return (
    <div className='px-72 flex flex-col pb-4 pt-1' >
      <div className='flex flex-row sticky top-16 bg-white z-10 pb-2'>
        <img src='/assets/Logo.svg' alt='Logo' width={25} style={{ margin: "auto 0px" }} />
        <h1 className='text my-auto ml-2 font-bold text-slate-500'>Devshow Network</h1>
        <TextField sx={{ marginLeft: "auto" }} size='small' placeholder='Search Users'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton>
                  <SavedSearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </div>
      <div className='flex flex-row rounded-lg border shadow-md sticky top-28 bg-white z-10'>
        <Button sx={{ textTransform: "none", margin: "0px 0px", color: tabState === 'All' ? '#075985' : '#0ea5e9', fontWeight: "bold" }} onClick={() => setTabstate('All')}>All</Button>
        <Button sx={{ textTransform: "none", margin: "0px 5px", color: tabState === 'Connections' ? '#075985' : '#0ea5e9', fontWeight: "bold" }} onClick={() => setTabstate('Connections')}>My Connections</Button>
        <Button sx={{ textTransform: "none", margin: "0px 5px", color: tabState === 'Requests' ? '#075985' : '#0ea5e9', fontWeight: "bold" }} onClick={() => setTabstate('Requests')}>Requests</Button>
        <Button sx={{ textTransform: "none", margin: "0px 5px", color: tabState === 'Sent' ? '#075985' : '#0ea5e9', fontWeight: "bold" }} onClick={() => setTabstate('Sent')}>Sent</Button>
      </div>
      <div className='mt-4 bg-sky-100 rounded-lg p-2'>
        <NetworkConnectionsComponent tabState={tabState} setTabstate={setTabstate} />
      </div>
    </div>
  )
}

export default ConnectionsNetworkPage