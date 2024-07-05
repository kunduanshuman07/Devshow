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
import CreatePostPage from '../pages/CreatePostPage';
import ConnectionsNetworkPage from '../pages/ConnectionsNetworkPage';
import ColabPage from '../pages/ColabPage';
import JobPage from '../pages/JobPage';
import PostAccesoriesPage from '../pages/PostAccesoriesPage';

const Layout = () => {
    const [drawerState, setDrawerState] = useState(false);
    const [rightDrawer, setRightDrawer] = useState(false);
    return (
        <div className='flex flex-col'>
            <AppbarComponent setDrawerState={setDrawerState} setRightDrawer={setRightDrawer} />
            <DrawerComponent drawerState={drawerState} setDrawerState={setDrawerState} anchor={'left'} sidebar={sidebar} />
            <DrawerComponent drawerState={rightDrawer} setDrawerState={setRightDrawer} anchor={'right'} sidebar={rightSidebar} />
            <div className='main mt-16'>
                <Routes>
                    <Route path='/' element={<FeedPage />} />
                    <Route path='/new' element={<NewProjectPage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/project-detail/:id' element={<ProjectDetailPage />} />
                    <Route path='/community' element={<NetworkPage />} />
                    <Route path='/create-post' element={<CreatePostPage />} />
                    <Route path='/my-network' element={<ConnectionsNetworkPage />} />
                    <Route path='/colab' element={<ColabPage />} />
                    <Route path='/jobs' element={<JobPage />} />
                    <Route path='/saved-posts' element={<PostAccesoriesPage />} />
                    <Route path='/trending-posts' element={<PostAccesoriesPage />} />
                    <Route path='/featured-posts' element={<PostAccesoriesPage />} />
                    <Route path='/my-posts' element={<PostAccesoriesPage />} />
                </Routes>
            </div>
        </div>
    )
}

export default Layout