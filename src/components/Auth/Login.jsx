import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center h-screen w-screen justify-center'>
     <div className='border-2 border-emerald-400 rounded-lg'>
        <form className='flex flex-col item-center justify-center p-24'>
            <input required className='border-2 border-emerald-600 py-3 px-5 text-xl outline-none rounded-full bg-transparent placeholder:text-grey-100' type="email" placeholder='Enter your email' />
            <input required className='border-2 border-emerald-600 py-3 px-5 text-xl outline-none rounded-full bg-transparent placeholder:text-grey-100 mt-3' type="password" placeholder='Enter password' />
            <button className='border-none bg-emerald-600 py-3 px-3 text-xl text-grey-100 outline-none rounded-full bg-transparent  mt-3'>Login</button>
        </form>
     </div>
    </div>
  )
}

export default Login
