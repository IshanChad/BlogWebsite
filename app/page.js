import React from 'react'
import Header from './components/Header'
import BlogList from './components/BlogList'

const page = () => {
  return (
      <div className ="flex flex-col items-center gap-10">
        <Header/>
        <BlogList/>
      </div>
  )
}

export default page
