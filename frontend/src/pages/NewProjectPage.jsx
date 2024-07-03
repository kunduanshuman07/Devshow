import { InputLabel, TextField, IconButton, List, ListItem, InputAdornment, Tooltip, Button, Switch } from '@mui/material'
import React, { useRef, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Delete } from '@mui/icons-material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ApiLoadingProgress from '../components/ApiLoadingProgress';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewProjectPage = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const ImageInputRef = useRef(null);
  const VideoInputRef = useRef(null);
  const handleImageInput = () => {
    ImageInputRef.current.click();
  }
  const handleVideoInput = () => {
    VideoInputRef.current.click();
  }
  const [title, setTitle] = useState('');
  const [demoLink, setDemoLink] = useState('');
  const [description, setDescription] = useState('');
  const [featureValue, setFeatureValue] = useState('');
  const [features, setFeatures] = useState([]);
  const [techValue, setTechValue] = useState('');
  const [techstacks, settechstacks] = useState([]);
  const [repoLink, setRepoLink] = useState('');
  const [contributors, setContributors] = useState('');
  const [seekColab, setSeekColab] = useState(false);
  const [colabDescription, setColabDescription] = useState('');
  const [colabSkills, setColabSkills] = useState([]);
  const [colabs, setColabs] = useState('');

  const handleAddColabs = () => {
    if (colabs.trim()) {
      setColabSkills([...colabSkills, colabs]);
      setColabs('');
    }
  }
  const handleDeleteColabSkills = (index) => {
    const newcolabskills = colabSkills.filter((_, i) => i !== index);
    setColabSkills(newcolabskills);
  }
  const handleAddFeature = () => {
    if (featureValue.trim()) {
      setFeatures([...features, featureValue]);
      setFeatureValue('');
    }
  };
  const handleDeleteFeature = (index) => {
    const newfeatures = features.filter((_, i) => i !== index);
    setFeatures(newfeatures);
  }
  const handleAddtechstacks = () => {
    if (techValue.trim()) {
      settechstacks([...techstacks, techValue]);
      setTechValue('');
    }
  };
  const handleDeletetechstacks = (index) => {
    const newtechstacks = techstacks.filter((_, i) => i !== index);
    settechstacks(newtechstacks);
  }
  const handleAddProject = async () => {
    setLoading(true);
    const res = await axios.post(`${BACKEND_URL}/projects/create-project`, { title, description, demoLink, repoLink, contributors, features, techstacks, seekColab, colabDescription, colabSkills });
    if (res.status === 200) {
      setLoading(false);
      navigate('/');
    }
  }
  if (loading) {
    return <ApiLoadingProgress title={'Creating New Project ...'} />
  }
  return (
    <div className='flex flex-col px-72 py-4'>
      <h1 className='text-2xl'>Create a new project</h1>
      <h1 className='text-xs font-bold text-[#94a3b8] mt-1'>Required fields are marked with an asterisk (*)</h1>
      <div className='py-4 mt-4 flex flex-row' style={{ borderTop: "1px solid #cbd5e1" }}>
        <div className='flex flex-col'>
          <InputLabel required sx={{ fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>Title</InputLabel>
          <TextField size='small' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='flex flex-col w-full ml-4'>
          <InputLabel required sx={{ fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>Live Demo Url (Website Link or any other source)</InputLabel>
          <TextField size='small' fullWidth value={demoLink} onChange={(e) => setDemoLink(e.target.value)} />
        </div>
      </div>
      <div className='pb-4 flex flex-col' style={{ borderBottom: "1px solid #cbd5e1" }}>
        <InputLabel required sx={{ fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>Description</InputLabel>
        <TextField size='small' fullWidth value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className='w-full flex flex-row'>
        <div className='w-1/2 pt-4 flex flex-col'>
          <div className='flex flex-col'>
            <InputLabel required sx={{ fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>Features</InputLabel>
            <TextField
              variant="outlined"
              value={featureValue}
              onChange={(e) => setFeatureValue(e.target.value)}
              size='small'
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      color="primary"
                      onClick={handleAddFeature}
                      sx={{ ml: 1, height: '40px', width: '40px' }}
                    >
                      <AddIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
          <List sx={{ display: "flex", flexDirection: "column" }}>
            {features.map((item, index) => (
              <ListItem key={index} style={{ display: "flex" }}>
                <h1 className='text-xs bg-[#f8fafc] rounded-lg py-1 px-2 mr-2'>{index + 1}. {item}</h1>
                <Tooltip title='Delete this Feature'>
                  <IconButton size='small' onClick={() => handleDeleteFeature(index)}>
                    <Delete sx={{ fontSize: "14px" }} />
                  </IconButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>
        </div>
        <div className='w-1/2 pt-4 flex flex-col ml-2'>
          <div className='flex flex-col'>
            <InputLabel required sx={{ fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>Technologies used</InputLabel>
            <TextField
              variant="outlined"
              value={techValue}
              onChange={(e) => setTechValue(e.target.value)}
              size='small'
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      color="primary"
                      onClick={handleAddtechstacks}
                      sx={{ ml: 1, height: '40px', width: '40px' }}
                    >
                      <AddIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
          <List sx={{ display: "flex", flexDirection: "column" }}>
            {techstacks.map((item, index) => (
              <ListItem key={index} style={{ display: "flex" }}>
                <h1 className='text-xs bg-[#f8fafc] rounded-lg py-1 px-2 mr-2'>{index + 1}. {item}</h1>
                <Tooltip title='Delete this Feature'>
                  <IconButton size='small' onClick={() => handleDeletetechstacks(index)}>
                    <Delete sx={{ fontSize: "14px" }} />
                  </IconButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='rounded-lg border flex flex-col items-center p-4' style={{ width: "150px", height: "150px" }}>
          <h1 className='text-sm mt-auto'>Upload Images</h1>
          <input
            ref={ImageInputRef}
            type='file'
            style={{ display: 'none' }}
          />
          <IconButton onClick={handleImageInput} sx={{ marginBottom: "auto" }}>
            <AddIcon />
          </IconButton>
        </div>
        <div className='rounded-lg border flex flex-col items-center p-4 ml-4' style={{ width: "150px", height: "150px" }}>
          <h1 className='text-sm mt-auto'>Upload Videos</h1>
          <input
            ref={VideoInputRef}
            type='file'
            style={{ display: 'none' }}
          />
          <IconButton onClick={handleVideoInput} sx={{ marginBottom: "auto" }}>
            <AddIcon />
          </IconButton>
        </div>
      </div>
      <div className='flex flex-row' style={{ borderBottom: "1px solid #cbd5e1" }}>
        <div className='pb-4 flex flex-col mt-4 w-full'>
          <InputLabel sx={{ fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>RepoSitory Link</InputLabel>
          <TextField size='small' fullWidth value={repoLink} onChange={(e) => setRepoLink(e.target.value)} />
        </div>
        <div className='pb-4 flex flex-col mt-4 ml-4 w-full'>
          <InputLabel sx={{ fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>Contributors (Team Size)</InputLabel>
          <TextField size='small' fullWidth type='number' value={contributors} onChange={(e) => setContributors(e.target.value)} />
        </div>
      </div>
      <div className='flex flex-row mt-4'>
        <h1 className='font-bold my-auto mr-8'>Seeking Colab?</h1>
        <Switch onChange={() => setSeekColab(!seekColab)} value={seekColab} />
      </div>
      {seekColab && <div className='flex flex-row '>
        <div className='flex flex-col w-1/2 pt-4'>
          <InputLabel required sx={{ fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>Colaboration Description</InputLabel>
          <TextField size='small' value={colabDescription} onChange={(e) => setColabDescription(e.target.value)} />
        </div>
        <div className='w-1/2 pt-4 flex flex-col ml-4'>
          <div className='flex flex-col'>
            <InputLabel required sx={{ fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>Required colaboration skills?</InputLabel>
            <TextField
              variant="outlined"
              value={colabs}
              onChange={(e) => setColabs(e.target.value)}
              size='small'
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      color="primary"
                      onClick={handleAddColabs}
                      sx={{ ml: 1, height: '40px', width: '40px' }}
                    >
                      <AddIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </div>
          <List sx={{ display: "flex", flexDirection: "column" }}>
            {colabSkills.map((item, index) => (
              <ListItem key={index} style={{ display: "flex" }}>
                <h1 className='text-xs bg-[#f8fafc] rounded-lg py-1 px-2 mr-2'>{index + 1}. {item}</h1>
                <Tooltip title='Delete this Feature'>
                  <IconButton size='small' onClick={() => handleDeleteColabSkills(index)}>
                    <Delete sx={{ fontSize: "14px" }} />
                  </IconButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>
        </div>
      </div>}
      <Button startIcon={<LibraryAddIcon />} sx={{
        backgroundColor: "#0369a1", color: "white", textTransform: "none", marginRight: "auto", marginTop: "20px", padding: "5px 20px", ":hover": {
          backgroundColor: "#0369a1"
        }
      }} size='small' onClick={handleAddProject}>Add Project</Button>
    </div>
  )
}

export default NewProjectPage