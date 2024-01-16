"use client"
import React from 'react'
import logo from '@/assets/1.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'
import { usePathname } from 'next/navigation'
import { HiMenuAlt2 } from 'react-icons/hi'

const NavBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const navBarList = [{ title: 'Home', link: '/' }, { title: 'Shop', link: '/shop' },  { title: 'Cart', link: '/cart' },{title:'Profile',link:'/profile'}, {title:'Studio',link:'/studio'}];
  const  pathname = usePathname()


  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-400">
      <nav className="w-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2">
        <Link href="/">
          <Image src={logo} alt="logo" height={50} width={50} className="w-20 p-2" />
        </Link>
        <div className='relative w-full hidden lg:inline-flex lg:w-[500px] h-10 text-base text-primeColor border-[1px] rounded-xl border-black items-center gap-2 justify-between px-6'>
          <input type="text"  
          className='flex-1 h-full outline-none bg-transparent placeholder:text-gray-600' 
          placeholder=' Search your products here' 
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery} />
          {searchQuery?(<IoCloseOutline onClick={() => setSearchQuery('')} className="w-5 h-5 text-red-300 duration-200 hover:cursor-pointer"/>):(<FaSearch className="w-5 h-5 hover:cursor-pointer"/>)}
        </div>
        <div className='hidden md:inline-flex items-center gap-2'>
          {navBarList.map((item, index) => (
            
              <Link href={item?.link} key={index} 
              className={` flex hover:font-medium hover:text-gray-950 duration-300 w-20 h-6 justify-center items-center px-12 
              md:border-r-[1px] border-r-gray-600 last:border-r-0 ${pathname === item?.link ? "text-gray-950 underline": "text-gray-600"}`}>{item?.title}</Link>

          ))}
        </div>
        <HiMenuAlt2 className='inline-flex md:hidden cursor-pointer w-8 h-6'/>
      </nav>
    </div>
  )
}

export default NavBar