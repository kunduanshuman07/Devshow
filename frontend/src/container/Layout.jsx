import React, { useState } from 'react'
import AppbarComponent from '../components/AppbarComponent'
import DrawerComponent from '../components/DrawerComponent';
import { sidebar, rightSidebar } from '../common/sidebars';

const Layout = () => {
    const [drawerState, setDrawerState] = useState(false);
    const [rightDrawer, setRightDrawer] = useState(false);
    return (
        <div className='flex flex-col'>
            <AppbarComponent setDrawerState={setDrawerState} setRightDrawer={setRightDrawer} />
            <DrawerComponent drawerState={drawerState} setDrawerState={setDrawerState} anchor={'left'} sidebar={sidebar} />
            <DrawerComponent drawerState={rightDrawer} setDrawerState={setRightDrawer} anchor={'right'} sidebar={rightSidebar} />
            <div className='main'>

            </div>
        </div>
    )
}

export default Layout