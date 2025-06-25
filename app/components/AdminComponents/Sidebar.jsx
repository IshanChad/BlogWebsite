import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-20 p-8 bg-slate-100 h-screen'>
      <Image className='border border-black py-4 w-full px-6 ' src={assets.logo}></Image>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 p-2 border border-black shadow-[-5px_5px_0px_#000000]">
            <Link href = '/admin/addProduct' className="flex items-center gap-2">
                <Image src={assets.add_icon}></Image>
                <p>Add blogs</p>
            </Link>
        </div>
        <div className="flex gap-2 p-2 border border-black shadow-[-5px_5px_0px_#000000]">
            <Link href = '/admin/bloglist'  className="flex items-center gap-2">
                <Image src={assets.blog_icon}></Image>
                <p>Blog lists</p>
            </Link>
        </div>
        <div className="flex gap-2 p-2 border border-black shadow-[-5px_5px_0px_#000000]">
            <Link href = '/admin/subscriptions'  className="flex items-center gap-2">
                <Image src={assets.email_icon}></Image>
                <p>Subscriptions</p>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
