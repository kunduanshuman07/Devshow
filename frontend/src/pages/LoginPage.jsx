import { TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleSignin = async () => {
        const res = await axios.post(`${BACKEND_URL}/auth/login`, { username, password });
        if (res.status === 200) {
            navigate('/');
        }
    }
    return (
        <div className='flex flex-col items-center p-10'>
            <img src='/assets/Logo.svg' alt='Devshow' width={50} />
            <h1 className='text-xl mt-4'>Sign In to Devshow</h1>
            <div className='border-2 rounded-lg p-5 mt-4 flex flex-col'>
                <h1 className='text-xs mb-2 mt-2'>Username</h1>
                <TextField
                    size='small'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <h1 className='text-xs mb-2 mt-4'>Password</h1>
                <TextField
                    size='small'
                    value={password}
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <a className='text-xs text-[#0284c7] mt-1' href='/'>Forgot Password?</a>
                <button className='bg-[#0369a1] text-white mt-4 text-md py-1 px-10 rounded-lg' onClick={handleSignin}>Sign In</button>
            </div>
            <div className='border-2 rounded-lg px-9 py-4 mt-4 flex flex-col'>
                <a className='text-xs mt-1' href='/'>New to Devshow? <span className='text-[#0284c7]'>Create an account</span></a>
            </div>
        </div>
    )
}

export default LoginPage