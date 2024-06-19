import { InputLabel, TextField, IconButton, List, ListItem, InputAdornment, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Delete } from '@mui/icons-material';

const NewProjectPage = () => {
  const [featureValue, setFeatureValue] = useState('');
  const [features, setFeatures] = useState([]);
  const [techValue, setTechValue] = useState('');
  const [techStacks, setTechstacks] = useState([]);
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
  const handleAddTechstacks = () => {
    if (techValue.trim()) {
      setTechstacks([...techStacks, techValue]);
      setTechValue('');
    }
  };
  const handleDeleteTechstacks = (index) => {
    const newtechstacks = techStacks.filter((_, i) => i !== index);
    setTechstacks(newtechstacks);
  }
  return (
    <div className='flex flex-col px-72 py-4'>
      <h1 className='text-2xl'>Create a new project</h1>
      <h1 className='text-xs font-bold text-[#94a3b8] mt-1'>Required fields are marked with an asterisk (*)</h1>
      <div className='py-4 mt-4 flex flex-row' style={{ borderTop: "1px solid #cbd5e1" }}>
        <div className='flex flex-col'>
          <InputLabel required sx={{ fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>Title</InputLabel>
          <TextField size='small' />
        </div>
        <div className='flex flex-col w-full ml-4'>
          <InputLabel required sx={{ fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>Live Demo Url (Website Link or any other source)</InputLabel>
          <TextField size='small' fullWidth />
        </div>
      </div>
      <div className='pb-4 flex flex-col' style={{ borderBottom: "1px solid #cbd5e1" }}>
        <InputLabel required sx={{ fontWeight: "bold", fontSize: "14px", marginBottom: "5px" }}>Description</InputLabel>
        <TextField size='small' fullWidth />
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
                      onClick={handleAddTechstacks}
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
            {techStacks.map((item, index) => (
              <ListItem key={index} style={{ display: "flex" }}>
                <h1 className='text-xs bg-[#f8fafc] rounded-lg py-1 px-2 mr-2'>{index + 1}. {item}</h1>
                <Tooltip title='Delete this Feature'>
                  <IconButton size='small' onClick={() => handleDeleteTechstacks(index)}>
                    <Delete sx={{ fontSize: "14px" }} />
                  </IconButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  )
}

export default NewProjectPage