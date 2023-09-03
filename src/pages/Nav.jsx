import React from 'react'
import { Link } from 'react-router-dom'
import SelectControl from '../components/SelectControl'
import StyleSelector from '../components/StyleSelector'

const Nav = () => {
  return (
    <div className='flex w-full h-12'>
      <div className='flex justify-start mr-auto'>
        <SelectControl />
      </div>
      <div className='flex-row justify-center px-5'>
        <Link to='/'>Home</Link>
        <Link to='/blogs'>Blogs</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/layout'>Layout</Link>
        <Link to='/main'>Main</Link>
      </div>
      <div className='flex justify-end ml-auto'>
        <StyleSelector />
      </div>
    </div>
  )
}

export default Nav
