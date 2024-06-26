import { Avatar, Button, InputAdornment, TextField } from '@mui/material'
import React from 'react'

const OpenMessageComponent = ({ handleCloseMessage }) => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col sticky top-0 bg-white p-2'>
                <div className='flex flex-row mt-1'>
                    <Avatar sx={{ width: "25px", height: "25px" }} />
                    <h1 className='text-sm ml-2 my-auto'>Anshuman Kundu</h1>
                    <Button onClick={handleCloseMessage} sx={{textTransform: "none", fontSize: "10px", marginLeft: "auto", padding: "0px", color: "black"}}>Back</Button>
                </div>
                <div className='sticky top-90 mt-4 mb-2'>
                    <TextField size='small' placeholder='Type Message ...' fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button sx={{ textTransform: "none", fontSize: "12px", padding: "0px", fontWeight: "bold" }}>Send</Button>
                                </InputAdornment>
                            )
                        }}

                    />
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='bg-sky-700 w-2/3 mt-2 p-2 rounded-lg mr-auto'>
                    <p className='text-white text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, recusandae?</p>
                </div>
                <div className='bg-teal-400 w-2/3 mt-2 p-2 rounded-lg ml-auto'>
                    <p className='text-white text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, recusandae?</p>
                </div>
                <div className='bg-sky-700 w-2/3 mt-2 p-2 rounded-lg mr-auto'>
                    <p className='text-white text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, recusandae?</p>
                </div>
                <div className='bg-teal-400 w-2/3 mt-2 p-2 rounded-lg ml-auto'>
                    <p className='text-white text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, recusandae?</p>
                </div>
                <div className='bg-sky-700 w-2/3 mt-2 p-2 rounded-lg mr-auto'>
                    <p className='text-white text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, recusandae?</p>
                </div>
                <div className='bg-teal-400 w-2/3 mt-2 p-2 rounded-lg ml-auto'>
                    <p className='text-white text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, recusandae?</p>
                </div>
                <div className='bg-sky-700 w-2/3 mt-2 p-2 rounded-lg mr-auto'>
                    <p className='text-white text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, recusandae?</p>
                </div>
                <div className='bg-teal-400 w-2/3 mt-2 p-2 rounded-lg ml-auto'>
                    <p className='text-white text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, recusandae?</p>
                </div>
                <div className='bg-sky-700 w-2/3 mt-2 p-2 rounded-lg mr-auto'>
                    <p className='text-white text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, recusandae?</p>
                </div>
                <div className='bg-teal-400 w-2/3 mt-2 p-2 rounded-lg ml-auto'>
                    <p className='text-white text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, recusandae?</p>
                </div>
                <div className='bg-sky-700 w-2/3 mt-2 p-2 rounded-lg mr-auto'>
                    <p className='text-white text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, recusandae?</p>
                </div>
                <div className='bg-teal-400 w-2/3 mt-2 p-2 rounded-lg ml-auto'>
                    <p className='text-white text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, recusandae?</p>
                </div>
                <div className='bg-sky-700 w-2/3 mt-2 p-2 rounded-lg mr-auto'>
                    <p className='text-white text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, recusandae?</p>
                </div>
                <div className='bg-teal-400 w-2/3 mt-2 p-2 rounded-lg ml-auto'>
                    <p className='text-white text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, recusandae?</p>
                </div>
            </div>
        </div>
    )
}

export default OpenMessageComponent