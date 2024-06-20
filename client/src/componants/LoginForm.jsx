import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [value , setValue] = useState({
        email : '',
        password : ''
    })
    const handleChange = (e) =>{
      setValue({
        ...value , [e.target.name] : e.target.value
      })
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const response = await axios.post('http://localhost:8080/api/adminlogin', value);
        console.log(response.data);
        if(response.data.success === true){
            // alert('you log in successfull');
            navigate('/home');
        }
    }

  return (
    <>
      <div className="flex flex-col container ms-[300px]  mt-4 border h-[87vh] w-[1250px]">
        <form className="w-[30%] my-auto mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name ='email'
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
              value = {value.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name = 'password'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value = {value.password}
              onChange={handleChange}
            />
          </div>
          
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
