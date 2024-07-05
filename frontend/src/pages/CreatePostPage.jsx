import { InputLabel, TextField, IconButton, Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ApiLoadingProgress from '../components/ApiLoadingProgress';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const ImageInputRef = useRef(null);
  const handleImageInput = () => {
    ImageInputRef.current.click();
  }
  const [caption, setCaption] = useState('');
  const handleAddPost = async () => {
    const res = await axios.post(`${BACKEND_URL}/community/create-post`, {caption, userId: user._id, username: user.username});
    if(res.status===200){
        setLoading(false);
        navigate('/community');
    }
  }
  if (loading) {
    return <ApiLoadingProgress title={'Creating New Post ...'} />
  }
  return (
    <div className='flex flex-col px-72 py-4'>
      <h1 className='text-2xl'>Create a new Post</h1>
      <h1 className='text-xs font-bold text-[#94a3b8] mt-1'>Required fields are marked with an asterisk (*)</h1>
      <div className='pb-4 flex flex-col mt-8' style={{ borderBottom: "1px solid #cbd5e1" }}>
        <InputLabel required sx={{ fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>Caption</InputLabel>
        <TextField size='small' fullWidth value={caption} onChange={(e) => setCaption(e.target.value)} />
      </div>
      <div className='flex flex-row mt-4'>
        <div className='rounded-lg border flex flex-col items-center p-4' style={{ width: "250px", height: "200px" }}>
          <h1 className='text-sm mt-auto'>Upload Media</h1>
          <input
            ref={ImageInputRef}
            type='file'
            style={{ display: 'none' }}
          />
          <IconButton onClick={handleImageInput} sx={{ marginBottom: "auto" }}>
            <AddIcon />
          </IconButton>
        </div>
      </div>
      <Button startIcon={<LibraryAddIcon />} sx={{
        backgroundColor: "#0369a1", color: "white", textTransform: "none", marginRight: "auto", marginTop: "20px", padding: "5px 20px", ":hover": {
          backgroundColor: "#0369a1"
        }
      }} size='small' onClick={handleAddPost}>Add Post</Button>
    </div>
  )
}

export default CreatePostPage;