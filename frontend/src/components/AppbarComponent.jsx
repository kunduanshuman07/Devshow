import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Tooltip } from '@mui/material';

const AppbarComponent = ({ setDrawerState, setRightDrawer }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#f1f5f9", boxShadow: "none", borderBottom: "1px solid #cbd5e1" }} square={false}>
        <Toolbar sx={{ display: "flex" }}>
          <IconButton
            size="small"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2, border: "1px solid #cbd5e1", borderRadius: "5px" }}
            onClick={() => setDrawerState(true)}
          >
            <MenuIcon />
          </IconButton>
          <img src='/assets/Logo.svg' alt='Devshow' width={30} />
          <Tooltip title='Notifications' sx={{ cursor: "pointer" }}>
            <img src='/assets/Notifications.svg' alt='Notifications' width={20} style={{ marginLeft: "auto", cursor: "pointer" }} />
          </Tooltip>
          <Tooltip title='Messages' sx={{ cursor: "pointer" }}>
            <img src='/assets/Messages.svg' alt='Messages' width={20} style={{ marginLeft: "10px", cursor: "pointer" }} />
          </Tooltip>
          <IconButton sx={{ marginLeft: "10px", cursor: "pointer" }} onClick={() => setRightDrawer(true)}>
            <Avatar sx={{ width: "25px", height: "25px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppbarComponent;
