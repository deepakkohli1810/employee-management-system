import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-lg font-medium text-white'>Hello <br/> <span className='text-2xl font-semibold'>Deepak 👋</span></h1>
      <button className='px-4 py-2 bg-red-600 rounded-md  font-medium'>Log Out </button>
    </div>
  )
}

export default Header
