'use client'
import React, { useState } from 'react'
import { blog_data } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'

const BlogList = () => {

    const [category, setCategory] = useState('All')

  return (
    <div>
      <div className="flex">
        <button onClick = {(e)=>{setCategory('All')}} >All</button>
        <button onClick = {(e)=>{setCategory('Technology')}} >Technology</button>
        <button onClick = {(e)=>{setCategory('Startup')}} >Startup</button>
        <button onClick = {(e)=>{setCategory('Lifestyle')}} >Lifestyle</button>
      </div>
      <div className="grid grid-cols-4">
            {blog_data.filter((item) => category === 'All' ? true : item.category === category).map((item, index) => (
                <div key = {index} className="flex flex-col">
                    <Link href = {`/blogs/${item.id}`}>
                        <Image src={item.image} alt="" />
                    </Link>
                    <p>{item.category}</p>
                    <b>{item.title}</b>
                    <p>{item.description}</p>
                </div>
            ))}
      </div>
    </div>
  )
}

export default BlogList
