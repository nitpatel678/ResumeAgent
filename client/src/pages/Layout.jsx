import React, { useState } from 'react'
import { Outlet , useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { SignIn, useUser } from '@clerk/clerk-react';
function Layout() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const {user } = useUser();
  return user ?(
    <div className='flex flex-col items-start justify-start h-screen '>
      <nav className='w-full px-8 min-h-14 flex items-center justify-between 
      border-b border-gray-200'>
        <img src='./logo.png' className='h-8 cursor-pointer' alt='' onClick={() => navigate('/')}></img>
        {
          sidebar ? <X onClick={()=> setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden'/>
          : <Menu onClick={()=> setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden'/>
        }
      </nav>
      <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className='flex-1 bg-[#ecf1f7]'>
          <Outlet />
        </div>

      </div>
    </div>
  ) : (
    <div className='flex items-center justify-center h-screen'>
      <SignIn/>
    </div>
  )
}

export default Layout