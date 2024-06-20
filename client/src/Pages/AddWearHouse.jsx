import React, { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const AddWearHouse = ({state , city , handleChange , handleSubmit , addwearhouse}) => {
  const [showState, setShowState] = useState(state);
  const [showCity, setShowCity] = useState(city);

  
  return (
    <>
      <div className="flex flex-col container ms-[300px]  mt-4 border h-[87vh] w-[1250px]">
        <div className="p-3">
          <div className="flex justify-start items-center">
            <Link onClick={() => window.history.back()}>
              <IoArrowBackSharp className="text-2xl" />
            </Link>
            <h1 className="font-sans font-semibold text-2xl mx-8">
              Add Wearhouse
            </h1>
          </div>

          <form className="w-full mx-4" onSubmit={handleSubmit}>
            <div className=" mt-5  flex gap-3 p-4">
              <div className="relative z-0 w-full mb-5 group">
                <label
                  for="username-success"
                  class="block mb-2 text-sm font-medium text-black"
                >
                  wearhouse name
                </label>
                <input
                  type="text"
                  name="wearhousename"
                  id="username-success"
                  class="bg-transparent border-2 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                  placeholder="Bonnie Green"
                  value={addwearhouse.wearhousename}
                  onChange={handleChange}
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <label
                  for="username-success"
                  class="block mb-2 text-sm font-medium text-black"
                >
                  state
                </label>
                <select
                  type="text"
                  name="state"
                  id="username-success"
                  class="bg-transparent border-2 text-green-900  placeholder-gray-300  text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                  placeholder="Bonnie Green"
                  value={addwearhouse.state}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    select State
                  </option>
                  {showState.allData?.map((currEle) => {
                    return (
                      <option
                        key={currEle.statename}
                        name={currEle.statename}
                        value={currEle.statename}
                      >
                        {currEle.statename}
                      </option>
                    );
                  })}
                </select>
              </div>

         
                <div className="relative z-0 w-full mb-5 group">
                  <label
                    for="username-success"
                    class="block mb-2 text-sm font-medium text-black"
                  >
                    city
                  </label>
                  <select
                    type="text"
                    name="city"
                    id="username-success"
                    class="bg-transparent border-2 text-green-900  placeholder-gray-300  text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                    placeholder="Bonnie Green"
                    value={addwearhouse.city}
                    onChange={handleChange}
                  >
                    {" "}
                    <option value="" disabled>
                      Select City
                    </option>
                    {showCity.map((currEle) => {
                      return (
                        <option
                          name={currEle.cityname}
                          value={currEle.cityname}
                        >
                          {currEle.cityname}
                        </option>
                      );
                    })}
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
  );
};

export default AddWearHouse;
