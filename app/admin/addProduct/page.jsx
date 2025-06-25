'use client'

import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

const Page = () => {
    const [image, setImage] = useState(null)
    const [form, setForm] = useState({ // for data to be saved in database
        title: '', 
        description: '',
        category: 'Startup',
        author: 'Alex Bennett',
        authorImg: 'author_img.png',
      })

      const handleClick = async () => {
        const formData = new FormData()
        formData.append('title', form.title)
        formData.append('description', form.description)
        formData.append('category', form.category)
        formData.append('author', form.author)
        formData.append('authorImg', form.authorImg)
        formData.append('image', image)

        const response = await axios.post('/api/blog', formData)
        if(response.data.success){
            toast.success(response.data.msg)
            setImage(null)
            setForm({
                title: '', 
                description: '',
                category: 'Startup',
                author: 'Alex Bennett',
                authorImg: 'author_img.png',
              })
        }else{
            toast.error('Error')
        }
      }

    return (
        <div>
            <p>Upload Image</p>
            <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id="image-upload"
                style={{ display: 'none' }}
            />
            <label htmlFor="image-upload">
                {image ? (
                    <Image
                        src={URL.createObjectURL(image)}
                        width={50}
                        height={50}
                        alt="Uploaded thumbnail"
                    />
                ) : (
                    <Image
                        src={assets.upload_area}
                        width={50}
                        height={50}
                        alt="Upload area placeholder"
                    />
                )}
            </label>
            <input onChange = {(e) => {handleChange(setForm(...form, {[e.target.name] : e.target.value}))}} name = "title" type="text" placeholder='Enter title' />
            <input onChange = {(e) => {handleChange(setForm(...form, {[e.target.name] : e.target.value}))}} name = "description" type="text" placeholder='Enter description' />
            <select onChange = {(e) => {handleChange(setForm(...form, {[e.target.name] : e.target.value}))}} name="category" id="" placeholder = 'Select Category'>
                <option value="Startup">Startup</option>
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
            </select>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Page
