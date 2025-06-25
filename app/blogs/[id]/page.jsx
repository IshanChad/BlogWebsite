'use client'
import React, { useState, useEffect } from 'react'
import { blog_data } from '@/assets/assets'
import Image from 'next/image'

const page = ({params}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        for(let i = 0 ; i < blog_data.length ; i++){
            if(blog_data[i].id === Number(params.id)){
                setData(blog_data[i])
                console.log(data)
                break
            }
        }
    }, [])

  return (
    <div>
      <Image src = {data.author_img}></Image>
      <p>{data.author}</p>
    </div>
  )
}

export default page
