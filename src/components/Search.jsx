import React, { useState } from 'react'
import search from "../assets/search.png"
import Loading from "../assets/loading.gif"
import Loader from './Loader';
import Info from './Info';
function Search({loading,setLoading,val,setval}) {
  const [city,setCity]=useState("")

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };
  const API_key = "2d26fe5c5da7b75b384423b1a09c210c";
  async function fetchWeatherDetail() {
    try {
      const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setval(data)
      console.log("Weather data:", data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }

  const handleSearch = (event) => {
    setLoading(true);
    event.preventDefault(); // Prevents form submission
    // Perform search action here using the 'city' state value
    console.log("Searching for city:", city);
    fetchWeatherDetail();
   
  };
  return (
    <div>
      <form action="" onSubmit={handleSearch} data-searchForm>
        <input type="text"  placeholder='Search for City ...'   value={city}
          onChange={handleInputChange} />
        <button className='border-2 border-stone-400' >
            <img src={search} className='w-[20px] h-[20px]' loading="lazy" alt="" />
        </button>

      </form>
      <div>
       {loading ? <Loader/>:<Info val={val}/>}
      </div>
    </div>
  )
}

export default Search
