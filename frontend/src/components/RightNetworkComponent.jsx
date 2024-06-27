import { Button, TextField } from '@mui/material'
import LeakAddIcon from '@mui/icons-material/LeakAdd';
import SpokeIcon from '@mui/icons-material/Spoke';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import React from 'react'
import NetworkComponent from './NetworkComponent';

const RightNetworkComponent = ({ networkState, setNetworkState, network, connections, requests }) => {
    return (
        <div className='flex flex-col p-4 sticky top-0'>
            <div className='flex flex-row bg-slate-600 rounded-lg mb-2'>
                <Button sx={{ textTransform: "none", margin: "10px auto" }} startIcon={<SpokeIcon />} size='small' style={{ textTransform: "none", color: networkState === 'Network' ? "#86efac" : "white" }} onClick={() => setNetworkState('Network')}>Network</Button>
                <Button sx={{ textTransform: "none", margin: "10px auto" }} startIcon={<LeakAddIcon />} size='small' style={{ textTransform: "none", color: networkState === 'Connections' ? "#86efac" : "white" }} onClick={() => setNetworkState('Connections')}>Connections</Button>
                <Button sx={{ textTransform: "none", margin: "10px auto" }} startIcon={<AssignmentLateIcon />} size='small' style={{ textTransform: "none", color: networkState === 'Requests' ? "#86efac" : "white" }} onClick={() => setNetworkState('Requests')}>Requests</Button>
            </div>
            <TextField size='small' placeholder='Search Users' />
            {networkState === 'Network' && <NetworkComponent networkState={'Network'} data={network} setNetworkState={setNetworkState}/>}
            {networkState === 'Connections' && <NetworkComponent networkState={'Connections'} data={connections} setNetworkState={setNetworkState}/>}
            {networkState === 'Requests' && <NetworkComponent networkState={'Requests'} data={requests} setNetworkState={setNetworkState}/>}
        </div>
    )
}

export default RightNetworkComponent