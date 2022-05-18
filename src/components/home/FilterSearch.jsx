import React, { useState } from 'react'
import { FaBed } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import './home.css'

const FilterSearch = () => {
  const [date, setDate] = useState([{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
  const [opneDate, setOpenDate] = useState(false)
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })
  const [input, setInput] = useState('')

  const navigate = useNavigate();

  const searchHandler = () => {
    navigate('/hotels', { state: { input, date, options } })
  }

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className='bg-white'>
      <ul className='border-yellow-500 text-gray-400 border-[3px] px-3 py-2 flex justify-between items-center'>
        <li className='cursor-pointer flex justify-between items-center'> <FaBed className='text-2xl mr-2' />
          <input type='text' className='h-full w-full px-4 py-1 border focus:outline-none rounded-md' placeholder='Where are you going' value={input} onChange={e => setInput(e.target.value)} />
        </li>
        <li className='cursor-pointer flex justify-between relative'>
          <MdDateRange onClick={() => setOpenDate(!opneDate)} className='text-2xl mr-2' />
          <span onClick={() => setOpenDate(!opneDate)} className='text-gray-500 '>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
          {opneDate &&
            <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date} className='absolute top-12 z-10'
            />
          }
        </li>
        <li className=' flex justify-between relative'> <MdDateRange className='text-2xl mr-2' />
          <span onClick={() => setOpenOptions(!openOptions)} className='text-gray-500 cursor-pointer'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
          {openOptions && (
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button
                    disabled={options.adult <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.adult}
                  </span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button
                    disabled={options.room <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.room}
                  </span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </li>
        <button className='text-lg bg-blue-800 text-white py-2 px-3 hover:bg-blue-700 transition-all ' onClick={() => searchHandler()}>Search</button>
      </ul>
    </div>
  )
}

export default FilterSearch