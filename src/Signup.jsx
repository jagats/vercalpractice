import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Signup() {
   const [userid,setUserid]= useState("");
   const [user_name,setUser_name] = useState("");
   const [password,setPassword] = useState("")
  const navigate = useNavigate();
   async function addUser (){
    let data = {
      userid,
      user_name,
      password
    }
     try {
      const result = await axios.post("http://localhost:4300/api/registaruser/", data);
      const resp = await result.data
      console.log(resp);
      alert("user added successfully")
     } catch (error) {
      console.log(error)
     }
  }

   const handleClick = () => {
     navigate('/login')
   }

  return (
    <>
    <div className='h-[100vh] w-full bg-gradient-to-r from-green-500 to-orange-500 flex justify-center items-center'>
        <div>
        <form>
            <h1 className='font-bold text-2xl px-12 '>
               SIGNUP FORM
            </h1>
            <button onClick={handleClick} className='h-10 w-32 border-2 border-black rounded-2xl mt-5 '>Login </button>
            <button className='bg-blue-500 h-10 w-32 rounded-lg mt-5 ml-5'>Signup</button>
            <br></br>
            <input value={userid} onChange={(e)=>setUserid(e.target.value)}
             className='p-3 w-72 h-10 bg-red-500 border-2 border-black mt-3' type="text" placeholder='enter your id'/>
            <br></br>
            <input value={user_name} onChange={(e)=>setUser_name(e.target.value)}
             className='p-3 w-72 h-10 bg-red-500 border-2 border-black mt-3' type="text" placeholder='enter your user name' />
            <br></br>
            <input value={password} onChange={(e)=>setPassword(e.target.value)}
             className='p-3 w-72 h-10 bg-red-500 border-2 border-black mt-3' type="password" placeholder='enter your password' />
             
             <br></br>
             <button onClick={addUser}
              className='bg-blue-500 h-10 w-72 rounded-lg mt-5'>Signup</button>
        </form>
        </div>
        </div> 
        </>
  )
}

export default Signup