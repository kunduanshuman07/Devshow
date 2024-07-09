import { TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext"

const RegisterPage = () => {
    const { setAuth, setLoading } = useAuth();
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstname] = useState();
    const [lastName, setLastname] = useState();
    const [email, setEmail] = useState();
    const [cPassword, setCpassword] = useState();
    const navigate = useNavigate();

    const handleSignUp = async () => {
        if (password === cPassword) {
            const res = await axios.post(`${BACKEND_URL}/auth/register`, { username, password, firstName, lastName, email });
            if (res.status === 200) {
                const token = res.data.token;
                const user = res.data.user;
                localStorage.setItem("authToken", token);
                localStorage.setItem("user", JSON.stringify(user));
                setAuth(true);
                setLoading(false);
                navigate('/');
            }
        }
    }
    return (
        <div className='flex flex-col items-center p-10'>
            <img src='/assets/Logo.svg' alt='Devshow' width={50} />
            <h1 className='text-xl mt-4'>Sign Up to Devshow</h1>
            <div className='border-2 rounded-lg p-5 mt-4 flex flex-col'>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='flex flex-col'>
                        <h1 className='text-xs mb-2 mt-2'>Username</h1>
                        <TextField
                            size='small'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-xs mb-2 mt-2'>Email</h1>
                        <TextField
                            size='small'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-xs mb-2 mt-2'>Password</h1>
                        <TextField
                            size='small'
                            value={password}
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-xs mb-2 mt-2'>Confirm Password</h1>
                        <TextField
                            size='small'
                            value={cPassword}
                            type='password'
                            onChange={(e) => setCpassword(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-xs mb-2 mt-2'>First Name</h1>
                        <TextField
                            size='small'
                            value={firstName}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-xs mb-2 mt-2'>Last Name</h1>
                        <TextField
                            size='small'
                            value={lastName}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                </div>
                <button className='bg-[#0369a1] text-white mt-4 text-md py-1 px-10 rounded-lg' onClick={handleSignUp}>Sign Up</button>
            </div>
            <div className='border-2 rounded-lg px-9 py-4 mt-4 flex flex-col'>
                <a className='text-xs mt-1' href='/login'>Already a Devshow user? <span className='text-[#0284c7]'>Sign In</span></a>
            </div>
        </div>
    )
}

export default RegisterPage