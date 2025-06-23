import React, { useState } from 'react'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import empServices from '../../service/empServices';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
  let [formData,setFormData]=useState({
    email:'',
    password:''
  })
 
 const handleChange=(e)=>{
  let {name,value}=e.target
  setFormData((preval)=>({...preval,[name]:value}))
  // console.log(name,value);
 }

 const handleSubmit=(e)=>{
  e.preventDefault()
  let {password,email}=formData
  if (!password || ! email){
    toast.error("All fields are mandatory")
    return
  }
  console.log(formData); 
 
(async() => {
  let data= await empServices.loginUser(formData)
  // console.log(data);
    try {
      if(data.status==200){
        toast.success("Login successfully")
        navigate('/home')
      }
      else{
        toast.error(`${data.response.data.message}`)
      }
      
    } catch (error) {
      // console.log(error);
      toast.error("something went wrong")
    }
  
})()
 }

  return (
    <div className='size-full h-screen  flex justify-center items-center'>
    <form action="" onSubmit={handleSubmit}  className='border-2 shadow-2xl w-1/3 h-1/3 px-6 rounded-2xl  flex justify-center items-center flex-col gap-4  lg:w-[50%]'>
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
      <div>
        <Link to ={'register'}>Click here to Register...</Link>
      </div>
    </form>
    
    </div>
  )
}

export default Login