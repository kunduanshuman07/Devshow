import React, { useState } from 'react'
import AppbarComponent from '../components/AppbarComponent'
import DrawerComponent from '../components/DrawerComponent';
import { sidebar, rightSidebar } from '../common/sidebars';
import { Routes, Route } from "react-router-dom"
import FeedPage from '../pages/FeedPage';
import NewProjectPage from '../pages/NewProjectPage';
import ProfilePage from '../pages/ProfilePage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import NetworkPage from '../pages/NetworkPage';

const Layout = () => {
    const [drawerState, setDrawerState] = useState(false);
    const [rightDrawer, setRightDrawer] = useState(false);
    return (
        <div className='flex flex-col'>
            <AppbarComponent setDrawerState={setDrawerState} setRightDrawer={setRightDrawer} />
            <DrawerComponent drawerState={drawerState} setDrawerState={setDrawerState} anchor={'left'} sidebar={sidebar} />
            <DrawerComponent drawerState={rightDrawer} setDrawerState={setRightDrawer} anchor={'right'} sidebar={rightSidebar} />
            <div className='main'>
                <Routes>
                    <Route path='/' element={<FeedPage />} />
                    <Route path='/new' element={<NewProjectPage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/project-detail' element={<ProjectDetailPage />} />
                    <Route path='/network' element={<NetworkPage/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Layout