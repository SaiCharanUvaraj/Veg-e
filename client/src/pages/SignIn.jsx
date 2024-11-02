import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VegeInfo from '../components/VegeInfo';

const SignIn = () => {
  const [form, setForm] = useState({
    phone: "",
    pwd: ""
  });

  const inputBoxStyle = "rounded-lg mt-2 w-full md:w-4/5 focus:scale-105 text-lg h-10 transition-all duration-300";
  const lableStyle = "text-lg font-semibold";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen p-4 md:p-0">
      <VegeInfo />
      <div className="bg-[#FCCD2A] rounded-xl w-full sm:w-2/3 md:w-1/3">
        <form className="">
          <center>
            <p className="bg-[#347928] rounded-t-xl text-white p-3 text-center font-bold text-2xl md:text-3xl shadow-lg shadow-black">
              Sign In
            </p>
            <div className="my-3 p-2">
              <div className="my-4">
                <label className={lableStyle}>Your Phone Number</label><br />
                <input type="text" name="phone" value={form.phone} onChange={handleChange} className={inputBoxStyle} />
              </div>
              <div className="my-4">
                <label className={lableStyle}>Your Password</label><br />
                <input type="password" name="pwd" value={form.pwd} onChange={handleChange} className={inputBoxStyle} />
              </div>
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
  );
}

export default SignIn;
