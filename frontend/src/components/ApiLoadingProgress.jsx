import { Box, CircularProgress, LinearProgress, Skeleton } from '@mui/material'
import React from 'react'

const ApiLoadingProgress = ({title}) => {
  return (
    <div className='flex flex-col'>
      <LinearProgress/>
      <CircularProgress sx={{ margin: "20px auto", color: "#0369a1" }} size={14} />
      <h1 className='text-sm mx-auto my-2'>{title}</h1>
      <Box sx={{ width: 300, margin: "10px auto" }}>
        <Skeleton />
        <Skeleton animation="wave" />
      </Box>
    </div>
  )
}

export default ApiLoadingProgress