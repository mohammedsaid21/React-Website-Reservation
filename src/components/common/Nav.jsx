import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-blue-800 text-white py-4'>
      <div className='mx-auto max-w-[1024px]'>
        <div className='flex justify-between'>
          <Link to='/' className='text-xl'>mohmedbooking</Link>
          <div>
            <button className='bg-white text-blue-800 px-3 py-2 ml-3 font-medium transition-all hover:bg-gray-300'>Register</button>
            <button className='bg-white text-blue-800 px-3 py-2 ml-3 font-medium transition-all hover:bg-gray-300'>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav