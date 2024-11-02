import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate ('/');
    }  
  return (
    <>
    <div className='h-[100vh] w-full bg-gradient-to-r from-green-500 to-orange-500 flex justify-center items-center'>
        <div>
        <form>
            <h1 className='font-bold text-2xl px-12 '>
                LOGIN FORM
            </h1>
            <button className='bg-blue-500 h-10 w-32 rounded-lg mt-5'>Login </button>
            <button onClick={handleClick} className='h-10 w-32 border-2 border-black rounded-2xl mt-5 ml-5'>Signup</button>
            <br></br>
            <input className='p-3 w-72 h-10 bg-red-500 border-2 border-black mt-3' type="text" placeholder='enter your email'/>
            <br></br>
            <input className='p-3 w-72 h-10 bg-red-500 border-2 border-black mt-3' type="password" placeholder='enter your password' />
             <h1 className='text-zinc-300 mt-3'>fortget password ?</h1>
             <br></br>
             <button className='bg-blue-500 h-10 w-72 rounded-lg mt-5'>Login</button>
        </form>
        </div>
        </div>
        </>
  )
}

export default Login