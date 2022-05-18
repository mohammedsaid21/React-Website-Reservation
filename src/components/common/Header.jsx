import React from 'react'
import { FaBed, FaCarSide } from 'react-icons/fa'
import { MdFlightLand } from 'react-icons/md'
import { AiFillCar } from 'react-icons/ai'
import FilterSearch from '../home/FilterSearch'

const Header = ({ type }) => {
  return (
    <div className='bg-blue-800 text-white py-4'>
      <div className='w-[1024px] mx-auto'>
        <ul className='flex justify-between items-center w-2/3'>
          <li className='flex items-center justify-between text-lg border-[2px] border-white p-2 rounded-2xl'><FaBed className='text-2xl mr-2' /> <span>Stays</span> </li>
          <li className='flex items-center justify-between text-lg'><MdFlightLand className='text-2xl mr-2' /> <span>Flights</span> </li>
          <li className='flex items-center justify-between text-lg'><AiFillCar className='text-2xl mr-2' /> <span>Car rentals</span> </li>
          <li className='flex items-center justify-between text-lg'><FaBed className='text-2xl mr-2' /> <span>Car rentals</span> </li>
          <li className='flex items-center justify-between text-lg'><FaCarSide className='text-2xl mr-2' /> <span>Airport taxis</span> </li>
        </ul>

        {type !== "list" &&
          <>
            <div className='py-20'>
              <h4 className='text-4xl font-bold '>A lifetime of discounts? It's Genius.</h4>
              <p className='text-lg py-4'>Get rewarded for your travels - unlock instant savings of 10% or more with a free Account</p>
              <button className='text-lg bg-blue-600 p-3 rounded-md transition-all hover:bg-blue-500 '>Sign in / Register</button>
            </div>
            <FilterSearch />
          </>
        }
      </div>
    </div>
  )
}

export default Header