import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Avatar, Tooltip } from '@mui/material';
import { useMessNotifContext } from '../context/MessageNotificationContext';
import MessNotificationModal from './MessNotificationModal';
import { sidebar } from "../common/sidebars";

const AppbarComponent = ({ setDrawerState, setRightDrawer }) => {
  const { modalOpen, modalState, setModalOpen, setModalState, handleClose } = useMessNotifContext();
  const handleModalOpen = (state) => {
    setModalState(state);
    setModalOpen(true);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#f1f5f9", boxShadow: "none", borderBottom: "1px solid #cbd5e1"}} square={false}>
        <Toolbar sx={{ display: "flex" }}>
          {/* <IconButton
            size="small"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2, border: "1px solid #cbd5e1", borderRadius: "5px" }}
            onClick={() => setDrawerState(true)}
          >
            <MenuIcon />
          </IconButton> */}
          <img src='/assets/Logo.svg' alt='Devshow' width={30} />
          <div className='flex flex-row ml-auto cursor-pointer'>
            {sidebar?.map((tab, index) => (
              <a className={`flex flex-col ml-8 py-1 px-2`} key={index} href={tab.to} style={{ borderBottom: window.location.pathname === tab.to ? "4px solid black" : "" }}>
                <img src={`/assets/${tab.title}.svg`} alt={tab.title} width={18} style={{ margin: "auto" }} />
                <h1 className='text-xs font-bold text-slate-500 mt-1'>{tab.title}</h1>
              </a>
            ))}
          </div>
          <Tooltip title='Notifications' sx={{ cursor: "pointer" }} onClick={() => handleModalOpen("Notifications")}>
            <img src='/assets/Notifications.svg' alt='Notifications' width={20} style={{ marginLeft: "auto", cursor: "pointer" }} />
          </Tooltip>
          <Tooltip title='Messages' sx={{ cursor: "pointer" }} onClick={() => handleModalOpen("Messages")}>
            <img src='/assets/Messages.svg' alt='Messages' width={20} style={{ marginLeft: "10px", cursor: "pointer" }} />
          </Tooltip>
          <IconButton sx={{ marginLeft: "10px", cursor: "pointer" }} onClick={() => setRightDrawer(true)}>
            <Avatar sx={{ width: "25px", height: "25px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      {modalOpen && <MessNotificationModal modalOpen={modalOpen} handleClose={handleClose} modalState={modalState} />}
    </Box>
  );
}

export default AppbarComponent;
