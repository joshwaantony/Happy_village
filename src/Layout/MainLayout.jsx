import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../component/Nav'
import SideBar from '../page/SideBar'

function MainLayout() {
  return (
    <div>
      <Nav/>
      <Outlet/>
    
    </div>
  )
}

export default MainLayout