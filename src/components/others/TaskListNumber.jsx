import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex justify-between gap-5 screen'>
      <div className=' w-[45%] bg-red-400 py-6 px-10 rounded-xl mt-10'>
        <h2 className='text-2xl'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className=' w-[45%] bg-blue-400 py-6 px-10 rounded-xl mt-10'>
        <h2 className='text-2xl'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className=' w-[45%] bg-green-400 py-6 px-10 rounded-xl mt-10'>
        <h2 className='text-2xl'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className=' w-[45%] bg-yellow-400 py-6 px-10 rounded-xl mt-10'>
        <h2 className='text-2xl'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
