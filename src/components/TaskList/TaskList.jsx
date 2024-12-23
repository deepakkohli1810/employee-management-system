import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[59%] flex overflow-x-auto items-center justify-start gap-10 flex-nowrap w-full py-5 mt-10  '>
     
      <div className='flex-shrink-0 h-full w-[350px] bg-red-400 rounded-xl p-5 '>
      <div className='flex justify-between items-center '>
        <h3 className='bg-red-600 text-sm font-semibold py-2 px-4 rounded-xl'> High </h3>
        <h4 className='font-semibold'> December 23, 2024</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
      <p className='text-[17px] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eius? Commodi, animi! Ratione, vero. Quos a molestiae voluptate quae iusto!</p>
      </div>
      <div className='flex-shrink-0 h-full w-[350px] bg-yellow-400 rounded-xl p-5'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-yellow-500 text-sm font-semibold py-2 px-4 rounded-xl'> Low  </h3>
        <h4 className='font-semibold'> December 23, 2024</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
      <p className='text-[17px] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eius? Commodi, animi! Ratione, vero. Quos a molestiae voluptate quae iusto!</p>
      </div>
      <div className='flex-shrink-0 h-full w-[350px] bg-green-400 rounded-xl p-5'>
                 <div className='flex justify-between items-center'>
                  <h3 className='bg-green-600 text-sm font-semibold py-2 px-4 rounded-xl'> Medium </h3>
                  <h4 className='font-semibold'> December 23, 2024</h4>
                      </div>
                 <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
                  <p className='text-[17px] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eius? Commodi, animi! Ratione, vero. Quos a molestiae voluptate quae iusto!</p>
          </div>
          <div className='flex-shrink-0 h-full w-[350px] bg-blue-400 rounded-xl p-5'>
                 <div className='flex justify-between items-center'>
                  <h3 className='bg-blue-600 text-sm font-semibold py-2 px-4 rounded-xl'> Morderate </h3>
                  <h4 className='font-semibold'> December 23, 2024</h4>
                      </div>
                 <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
                  <p className='text-[17px] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eius? Commodi, animi! Ratione, vero. Quos a molestiae voluptate quae iusto!</p>
          </div>
      
      
    </div>
  )
}

export default TaskList
