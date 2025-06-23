import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { BiRename } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import {validatePassword} from 'val-pass'
import toast from 'react-hot-toast';
import axios from 'axios';
import { data, useNavigate } from 'react-router-dom';
import empServices from '../../service/empServices';

const Register = () => {
  let [formData,setFormData]=useState({
    name:'',
    userName:'',
    email:'',
    password:''
  })
  let navigate=useNavigate()
  let [repeatPassword,setRepeatPassword]=useState(true)
  let [error,setError]=useState('')

 const handleChange=(e)=>{
  let {name,value}=e.target
  if (name=='password'){
    let {validateAll,getAllValidationErrorMessage}=validatePassword(value,8)
    // console.log(validateAll());
    // console.log(getAllValidationErrorMessage());
    validateAll()? setError(''):setError(getAllValidationErrorMessage())
    value==''&& setError('')
  }

  setFormData((preval)=>({...preval,[name]:value}))
 }

 const handleSubmit=(e)=>{
  e.preventDefault()
  let {name,userName,email,password}=formData
  if(!name || !userName || !password || !email){
    toast.error('All fields are mandatory')
    return
  }
  let {validateAll,getAllValidationErrorMessage}=validatePassword(password)
  if(!validateAll()){
    toast.error(`${getAllValidationErrorMessage()}`)
  }
  if(!repeatPassword){
    toast.error('Password and confirm password did not match')
    return
  }
  // console.log(formData); 
 
  // empServices.regiUser(formData)
(async() => {
  let data= await empServices.regiUser(formData)
  console.log(data);
    try {
      if(data.status==201){
        toast.success("Registered successfully")
        navigate('/login')
      }
      else{
        toast.error("Something went wrong")
      }
      
    } catch (error) {
      console.log(error);
      
      toast.error("something went wrong")
    }
  
})()

 }

 const handleRepeatPassword=(e)=>{
    let {value}=e.target
    // if(value!=formData.password){
    //   e.target.style.backgroundColor='red'
    //   setRepeatPassword(true)
    // }
    // else{
    //   setRepeatPassword(false)
    //   e.target.style.backgroundColor='white'
    // }
  formData.password!=value? setRepeatPassword(false):setRepeatPassword(true)
  value=="" && setRepeatPassword(true)

 }

  return (
    <div className='size-full h-screen flex justify-center items-center'>
    <form action="" onSubmit={handleSubmit}  className='border-2 shadow-2xl w-5/12 h-7/12 px-6 rounded-2xl  flex justify-center items-center flex-col gap-4  lg:w-[50%]'>
      <div>
      <h1 className=' flex justify-center items-center font-bold text-2xl max-sm:text-xs'>Register Form</h1>
      </div>
      <div className='w-full flex justify-center items-center rounded-sm border-2 px-2 py-1'>
        <input type="text" name="name"  placeholder='Enter your name' className='outline-0 p-[5px] w-full' onChange={handleChange}/>
        <span><CgNametag /></span>
      </div>
      <div className='w-full flex justify-center items-center rounded-sm border-2 px-2 py-1'>
        <input type="text" name="userName"   placeholder='Enter Username'className='outline-0 p-[5px]  w-full' onChange={handleChange}/>
        <span><BiRename /></span>
      </div>
      <div className='w-full flex justify-center items-center rounded-sm border-2 px-2 py-1'>
        <input type="email" name="email"  placeholder='Enter the email'className='outline-0 p-[5px] w-full' onChange={handleChange}/>
        <span><MdOutlineAlternateEmail /></span>
      </div>
      <div className='w-full flex justify-center items-center rounded-sm border-2 px-2 py-1'>
        <input type="password" name="password"  placeholder='Enter password'className='outline-0 p-[5px] w-full' onChange={handleChange}/>
        <span><MdPassword /></span>
      </div>
      <div className={error? 'w-full flex justify-center items-center  px-2 py-1':'hidden'}>
        <span className='text-red-700'>*{error}</span>
      </div>

      <div className={`w-full flex justify-center items-center rounded-sm border-2 px-2 py-1 ${repeatPassword?'border-black':'border-red-700'}`}>
        <input  type="password" name="repeatPassword" placeholder='Re-type password' className='outline-0 p-[5px] w-full' onChange={handleRepeatPassword}/>
        <span><MdOutlinePassword /></span>
      </div>
      <div className='w-md rounded-md  max-lg:w-[50%] px-4 h-10 bg-black text-white flex justify-center border-0'>
        <button className='w-full'>Click</button></div>
    </form>
    
    </div>
  )
}

export default Register