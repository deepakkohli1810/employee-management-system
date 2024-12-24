import React from 'react'

const CreateTask = () => {
  return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded '>
        <form className='flex flex-wrap items-start justify-betweenw-full ' >
            <div className='w-1/2' >
               <div>
                <h3 className='text-xl text-gray-300 mb-0.5'>Task title </h3>
                  <input className='text-sm py-1.5 px-2 w-4/5 text-white text-[1.1rem] rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                </div>
               <div><h3 className='text-xl text-gray-300 mb-0.5'>Date</h3>
               <input className='text-sm py-1.5 px-2 w-4/5 text-white text-[1.1rem] rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
             </div>
            
             <div><h3 className='text-xl text-gray-300 mb-0.5'>Assign To</h3>
               <input className='text-sm py-1.5 px-2 w-4/5 text-white text-[1.1rem] rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
             </div>
           <div>
               <h3 className='text-xl text-gray-300 mb-0.5'>Category</h3>
               <input className='text-sm py-1.5 px-2 w-4/5 text-white text-[1.1rem] rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design , Dev , Management' />
               </div>
                </div>


             <div className='w-1/2 flex flex-col '> 
                 <div >
                 <h3 className='text-xl text-gray-300 mb-0.5'>Description</h3>
                 <textarea className='w-full h-48 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-grey-400 text-white text-[1.2rem]' name="" id=""></textarea>
                 </div>  

                 <button className=' bg-emerald-500 hover:bg-emerald-600 px-5 py-2 text-white text-[1.1rem] rounded text-sm mt-4 w-full'>Create Task</button>
            </div>
            
        </form>
      </div>
  
  )
}

export default CreateTask
