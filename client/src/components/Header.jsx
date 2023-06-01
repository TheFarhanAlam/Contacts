import React from 'react'
import img from './Url'
import {Link} from "react-router-dom"

function Header() {
  return (
    <>
    <div className='header flex w-full bg-[#643A6B] h-[10vh] p-4'>
        <div className="header__left flex">
            <img src={img} alt="" className='rounded-3xl mr-2'/>
            <h1 className='mt-1 font-extrabold text-white cursor-pointer'><Link to="/" style={{color: "white", textDecoration: "none"}}>Contacts</Link></h1>
        </div>
        <div className="header__rightItems flex absolute right-8">
        <h1 className='pr-10 font-extrabold mt-1 cursor-pointer '><Link style={{color: 'white', textDecoration: 'none'}} className='header__text' to="/">All Users</Link></h1>
        <h1 className='text-white font-extrabold mt-1 cursor-pointer'><Link style={{color: 'white', textDecoration: 'none'}} className='header__text' to="/addUser">Add User</Link></h1>
        </div>
    </div>
    </>
  )
}

export default Header