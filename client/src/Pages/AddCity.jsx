import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
const AddCity = () => {
  const [showState , setShowState] = useState([]);
    const [addCity , setAddCity] = useState({
        cityname : "",
        citycode : "",
        state : ''
    })
    const nevigate = useNavigate();
    
    const handleChange = (e) => {
       setAddCity({
        ...addCity , 
        [e.target.name] : e.target.value
       })
    }
  

    useEffect(()=>{
      const fetchCity = async () => {
          const response = await axios.get("http://localhost:8080/api/allstate");
          console.log(response.data);
          setShowState(response.data);
        };
        fetchCity();
  },[])


    const handleSubmit = async (e) =>{
        e.preventDefault();
          await axios.post("http://localhost:8080/api/addcity", addCity).then((res) =>{
            console.log(res.data);
           nevigate('/city') 
        }).catch((err) =>{
            console.log(err);
        })
    }

  return (
    <>
       <div className="flex flex-col container ms-[300px]  mt-4 border h-[87vh] w-[1250px]">
      <div className="p-3">
      <div className="flex justify-start items-center">
        <Link onClick={() => window.history.back()}><IoArrowBackSharp className="text-2xl"/></Link>
        <h1 className="font-sans font-semibold text-2xl mx-8">Add City</h1>
        </div>

        <form className="w-full mx-4" onSubmit={handleSubmit}>
          <div className=" mt-5  flex gap-3 p-4">
          <div className="relative z-0 w-full mb-5 group">
              <label
                for="username-success"
                class="block mb-2 text-sm font-medium text-black"
              >
                city name
              </label>
              <input
                type="text"
                id="username-success"
                class="bg-transparent border-2 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                placeholder="Bonnie Green"
                name = 'cityname'
                value = {addCity.cityname}
                onChange={handleChange}
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <label
                for="username-success"
                class="block mb-2 text-sm font-medium text-black"
              >
                city code
              </label>
              <input
                type="text"
                id="username-success"
                class="bg-transparent border-2 text-green-900  placeholder-gray-300  text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                placeholder="Bonnie Green"
                name = "citycode"
                value = {addCity.citycode}
                onChange={handleChange}
              />
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                State
              </label>
              <select
                id="countries"
                name = 'state'
                value={addCity.state}
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              > <option value = "" disabled>select State</option>
                {
                  showState.allData?.map((currEle) =>{
                    return (
                      <option name={currEle.statename} value = {currEle.statename} >{currEle.statename}</option>
                    )
                  })
                }
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
              type="submit"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-16 py-2.5 text-center mb-2 "
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default AddCity