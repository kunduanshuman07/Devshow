import React from 'react'
import { Drawer, IconButton, List, ListItem } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
const DrawerComponent = ({ drawerState, setDrawerState, anchor, sidebar }) => {
    const navigate = useNavigate();
    const { setAuth } = useAuth();
    const handleSignout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        setAuth(false);
        navigate("/login");
    }
    const handleItemClick = (to) => {
        setDrawerState(false);
        navigate(to);
    }
    return (
        <Drawer
            anchor={anchor}
            open={drawerState}
            sx={{
                ".css-4t3x6l-MuiPaper-root-MuiDrawer-paper": {
                    width: "250px"
                },
                ".css-1160xiw-MuiPaper-root-MuiDrawer-paper": {
                    width: anchor === 'right' ? "250px" : "0px"
                },
            }}
        >
            <List sx={{ padding: "10px" }}>
                <ListItem sx={{ display: "flex" }}>
                    <img src='/assets/Logo.svg' alt='Devshow' width={30} />
                    <IconButton size='small' sx={{ marginLeft: "auto", borderRadius: "5px" }} onClick={() => setDrawerState(false)}>
                        <CloseIcon sx={{ fontSize: "14px" }} />
                    </IconButton>
                </ListItem>
                <div className='mt-5'>
                    {sidebar.map((tabs, index) => (
                        <ListItem key={index} sx={{
                            ":hover": {
                                background: "#f1f5f9",
                                borderRadius: "10px",
                                cursor: "pointer"
                            }
                        }} onClick={() => handleItemClick(tabs.to)}>
                            <img src={`/assets/${tabs.title}.svg`} alt={tabs.title} width={15} />
                            <a href={tabs.to} className='ml-3 text-sm'>{tabs.title}</a>
                        </ListItem>
                    ))}
                    {anchor === 'right' && <ListItem sx={{
                        ":hover": {
                            background: "#f1f5f9",
                            borderRadius: "10px",
                            cursor: "pointer"
                        }
                    }} onClick={handleSignout}>
                        <img src={`/assets/Signout.svg`} alt='Signout' width={15} />
                        <button className='ml-3 text-sm' onClick={handleSignout}>Signout</button>
                    </ListItem>}
                </div>
            </List>
        </Drawer>
    )
}

export default DrawerComponent