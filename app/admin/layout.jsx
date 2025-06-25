'use client'
import React from 'react'
import Sidebar from '../components/AdminComponents/Sidebar'

const layout = ({children}) => {
  return (
    <div className='flex'>
      <Sidebar></Sidebar>
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  )
}

export default layout
