import React from 'react'

const MailList = () => {
  return (
    <div className='bg-blue-800 text-white py-10 text-center w-full' >
      <div className="lg:w-1/3 w-1/2 mx-auto">
        <h3 className='text-4xl font-bold py-4'>Save time, save money!</h3>
        <p className='text-lg py-4'>Sign up and we'll send the best deals to you</p>
        <div className='flex justify-between items-center'>
          <input type='text' placeholder='Your Email' className='px-2 py-4 w-[80%] mr-2 rounded-lg text-black' />
          <button className='py-4 px-2 bg-blue-600 rounded-lg w-[20%]'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default MailList