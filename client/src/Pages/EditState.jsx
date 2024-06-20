import axios from "axios";
import React, { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const EditState = ({stateData }) => {

  const [data , setData] = useState(stateData);
  const handleChange = (e) =>{
     setData({...data, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const response = axios.post(`http://localhost:8080/api/updatestate/${data._id}`).then((res)=>{
        console.log(res)
        if(response.data.success === true){
            setData(response)
        }
    }).catch((err)=>{
        console.log(err)
    })
  }


  return (
    <div className="flex flex-col container ms-[300px]  mt-4 border h-[87vh] w-[1250px]">
      <div className="p-3">
        <div className="flex justify-start items-center">
        <Link onClick={() => window.history.back()}><IoArrowBackSharp className="text-2xl"/></Link>
        <h1 className="font-sans font-semibold text-2xl mx-8">  Edit State</h1>
        </div>

        <form className="w-full mx-4" onSubmit={handleSubmit}>
          <div className=" mt-5  flex gap-3 p-4">
          <div className="relative z-0 w-full mb-5 group">
              <label
                for="username-success"
                class="block mb-2 text-sm font-medium text-black"
              >
                state name
              </label>
              <input
                type="text"
                id="username-success"
                class="bg-transparent border-2 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                placeholder="Bonnie Green"
                value={data.statename}
                onChange={handleChange}
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <label
                for="username-success"
                class="block mb-2 text-sm font-medium text-black"
              >
                state code
              </label>
              <input
                type="text"
                id="username-success"
                class="bg-transparent border-2 text-green-900  placeholder-gray-300  text-sm rounded-lg  block w-full p-2.5 "
                placeholder="Bonnie Green"
                value={data.statecode}
                onChange={handleChange}
              />
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
          <div className="btn flex justify-end items-end mr-5 gap-3 mt-96">
            <button
              type="button"
              className="text-purple-700 bg-transparent border-2 border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-16 py-2.5 text-center mb-2"
            >
              Cancle
            </button>
            <button
              type="button"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-16 py-2.5 text-center mb-2 "
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditState;
