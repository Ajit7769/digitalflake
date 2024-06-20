import React from 'react'

const Home = () => {
  return (
    <>
       <div className="flex flex-col container ms-[300px]  mt-4 border h-[87vh] w-[1250px]">
       <div className="flex items-center mx-auto space-x-3 my-auto rtl:space-x-reverse">
        <img src="Images/logo-1.png" className="h-16" alt=" Logo" />
        <img src="Images/logo-2.png" className="h-16 mt-2" alt=" Logo" />
        </div>
        <div className="mx-auto my-auto -mt-64">
            <h2 className='font-bold text-2xl '>Welcome to digitalflake admin</h2>
        </div>
       </div>
    </>
  )
}

export default Home