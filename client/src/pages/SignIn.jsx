import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VegeInfo from '../components/VegeInfo';
import axios from 'axios';

const SignIn = () => {
  const [form, setForm] = useState({
    phone: "",
    pwd: ""
  });
  const [msg,setMsg]=useState("");

  const inputBoxStyle = "rounded-lg mt-2 w-5/6 focus:scale-105 text-lg h-10 transition-all duration-300 text-center p-2";
  const lableStyle = "text-lg font-semibold";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(form.phone==="" || form.pwd==="")
    {
      setMsg("Enter your registered phone number and password.");
      return
    }
    const response=await axios.post("http://localhost:3000/auth-user",{phone:form.phone, pwd:form.pwd});
    setMsg(response.data.message);
  };

  return (
    <div>
      <div className='fixed top-0 left-0 bg-transparent p-2'>
        <Link to="/">
          <button className="bg-[#347928] p-2 text-white rounded-lg hover:scale-110 active:scale-95 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" class="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 h-screen gap-5">
        <VegeInfo />
        <div className="bg-[#C0EBA6] flex flex-col justify-center items-center py-10 px-2">
          <p className='nerko-one-regular text-5xl text-[#347928] font-bold text-center pb-10'> Get into your Account here</p>
          <form className="bg-[#FCCD2A] rounded-xl sm:w-4/5 w-full">
            <center>
              <p className="bg-[#347928] rounded-t-xl text-white p-3 text-center font-bold text-2xl md:text-3xl shadow-lg shadow-black">
                Sign In
              </p>
              <div className="my-3 p-4">
                <div className="my-4">
                  <label className={lableStyle}>Your Phone Number</label><br />
                  <input type="text" name="phone" value={form.phone} onChange={handleChange} className={inputBoxStyle} />
                </div>
                <div className="my-4">
                  <label className={lableStyle}>Your Password</label><br />
                  <input type="password" name="pwd" value={form.pwd} onChange={handleChange} className={inputBoxStyle} />
                </div>
              </div>
              <div className='my-2 text-lg text-red-600 font-bold'>
                {msg}
              </div>
              <button className="rounded-lg bg-[#347928] hover:scale-110 active:scale-95 p-2 text-lg md:text-xl text-white transition-all duration-300 mb-2" onClick={handleSubmit}>
                Sign In
              </button>
              <div className='mb-4'>
                  <p className="text-sm">Don't have an account? Then</p>
                  <Link to="/signup" className="text-black hover:underline text-lg font-bold">Sign Up</Link>
              </div>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
