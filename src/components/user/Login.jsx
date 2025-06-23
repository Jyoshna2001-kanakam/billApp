import React, { useState } from 'react'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";


const Register = () => {
  let [formData,setFormData]=useState({
    email:'',
    password:''
  })
 
 const handleChange=(e)=>{
  let {name,value}=e.target
  setFormData((preval)=>({...preval,[name]:value}))
 }

 const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(formData); 
 }

  return (
    <div className='size-full h-screen flex justify-center items-center'>
    <form action="" onSubmit={handleSubmit}  className='border-2 shadow-2xl w-5/12 h-1/3 px-6 rounded-2xl  flex justify-center items-center flex-col gap-4  lg:w-[50%]'>
      <div>
      <h1 className=' flex justify-center items-center font-bold text-2xl max-sm:text-xs'>Login Form</h1>
      </div>
      
      <div className='w-full flex justify-center items-center rounded-sm border-2 px-2 py-1'>
        <input type="email" name="email"  placeholder='Enter the email'className='outline-0 p-[5px] w-full' onChange={handleChange}/>
        <span><MdOutlineAlternateEmail /></span>
      </div>
      <div className='w-full flex justify-center items-center rounded-sm border-2 px-2 py-1'>
        <input type="password" name="password"  placeholder='Enter password'className='outline-0 p-[5px] w-full' onChange={handleChange}/>
        <span><MdPassword /></span>
      </div>
    
      <div className='w-md rounded-md  max-lg:w-[50%] px-4 h-10 bg-black text-white flex justify-center border-0'>
        <button className='w-full'>Click</button></div>
    </form>
    
    </div>
  )
}

export default Register