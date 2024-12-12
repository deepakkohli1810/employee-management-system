import React, { useState } from 'react'


const Login = () => {

  const [email, setEmail] = useState('')
 const [password ,setPassword ] =useState('')
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('email is ', email)
    console.log('password is' ,password)

    setEmail('')
    setPassword('')
  }
  return (
    <div className='flex items-center h-screen w-screen justify-center'>
     <div className='border-2 border-blue-400 rounded-lg'>
        <form 
        onSubmit= {
          (e  )=>{
            submitHandler(e)
          }
        }
        className='flex flex-col item-center justify-center p-28'>
            <input required className='border-2 border-blue-500 py-3 px-5 text-xl outline-none rounded-full bg-transparent placeholder:text-grey-100' type="email" placeholder='Enter your email'
            value={email}
            onChange={ (e)=>{
    
              setEmail(e.target.value)
            }} />
            <input required className='border-2 border-blue-500 py-3 px-5 text-xl outline-none rounded-full bg-transparent placeholder:text-grey-100 mt-3' type="password" placeholder='Enter password'
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }} />
            <button className='border-none bg-blue-500 py-3 px-3 text-xl text-grey-100 outline-none rounded-full bg-transparent  mt-3'>Login</button>
        </form>
     </div>
    </div>
  )
}

export default Login
