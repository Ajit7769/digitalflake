import React, { useEffect, useState } from 'react'
import Navbar from './componants/Navbar'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import LoginForm from './componants/LoginForm'
import Home from './Pages/Home'
import City from './Pages/City'
import State from './Pages/State'
import Wearhouse from './Pages/Wearhouse'
import Sidebar from './componants/Sidebar'
import AddSate from './Pages/AddSate'
import EditState from './Pages/EditState'
import AddCity from './Pages/AddCity'
import AddWearHouse from './Pages/AddWearHouse'
import EditCity from './Pages/EditCity'
import EditWearhouse from './Pages/EditWearhouse'
import axios from 'axios'

const App = () => {
  const [stateData , setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);

    useEffect(()=>{
        const fetchCity = async () => {
            const response = await axios.get("http://localhost:8080/api/allstate");
            console.log(response.data);
            setStateData(response.data.allData);
          };
          fetchCity();
    },[])


  useEffect(() => {
    const fetchCity = async () => {
      const response = await axios.get("http://localhost:8080/api/allcity");
      console.log(response.data);
      setCityData(response.data.city);
    };
    fetchCity();
  }, []);

  const [addwearhouse, setAddWearhouse] = useState({
    wearhousename: "",
    state: "",
    city: "",
  });


  const handleChange = (e) => {
    setAddWearhouse({
      ...addwearhouse,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = axios
      .post("http://localhost:8080/api/addwearhouse", addwearhouse)
      .then((res) => {
        console.log(res);
        if (res.success === true) {
          alert(" wearhouse Added Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Sidebar />
     <Routes>
      <Route path='/' element={<LoginForm />} />
      <Route path='/home' element={<Home />} />
      <Route path='/city' element={<City  city={cityData}/>} />
      <Route path='/state' element={<State stateData = {stateData } />} />
      <Route path='/wearhouse' element={<Wearhouse />} />
      <Route path='/addstate' element={<AddSate />} />
      <Route path='/editstate/:id' element={<EditState stateData = {stateData }/>} />

      <Route path='/addcity' element={<AddCity />} />
      <Route path='/editcity/:id' element={<EditCity state = {stateData }/>} />
      <Route path='/addwearhouse' element={<AddWearHouse state = {stateData } city = {cityData} handleChange = {handleChange} 
      handleSubmit={handleSubmit} addwearhouse = {addwearhouse}/>} />
      <Route path='/editwearhouse/:id' element={<EditWearhouse />} />
     </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
