// import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import Info from "./components/Info";
import CurrPosition from "./components/CurrPosition";
import Tab from "./components/Tab";

// const App = () => {
//   const [city, setCity] = useState("goa");
//   const [tem,setTem]=useState([])
//   const API_key = "4d8787a7dd759641143714c9a45195cd";

  // async function fetchWeatherDetail() {
  //   try {
  //     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
  //     const data = await response.json();
  //     setTem(data)
  //     console.log("Weather data:", data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

// async function getCustomWeatherDetails(){
//   try{
//   let latitude=15.6333;
//   let longitude=18.3333;

//   const result=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}`)
//   const data=await result.json();
//   console.log(data)
//   }
//   catch(error){
//     console.log(error);
//   }
// }

//   // function renderWeatherInfo(data){
//   //   let newPara=document.createElement('p');
//   //   newPara.textContent= 
//   // }
//   useEffect(() => {
//     fetchWeatherDetail();
//     // getCustomWeatherDetails()
//   }, []);
  // function getLocation(){
  //   if(navigator.geolocation){
  //     navigator.geolocation.getCurrentPosition(showPosition)
  //   }
  //   else{
  //     console.log("geolocation not supported");
  //   }
  // }

  // const showPosition=(position)=>{
  
  //    let lat=position.coords.latitude;
  //  let longi=position.coords.longitude;
  //   console.log(lat);
  //   console.log(longi); 
  // }
//    const [permission,setPermission]=useState(false)
//    const [activeTab, setActiveTab] = useState('current');
//      return (
//     <div className="relative min-h-screen w-screen">
//       <h1>Weather App</h1>
//       {/* <p>Showing weather for {city}</p>
//       <p>{tem?.main?.temp.toFixed(2)} °C</p>
//        <button onClick={getLocation}>Get Your Coordinates</button> */}

//        <div>
//        <Tab activeTabtab={activeTab} setActiveTab={setActiveTab}/>
//        </div>

//        {/* container */}
// <div>
// { permission ? <CurrPosition/>:<Home />}

//   </div>       {/* <Search/>
//        <Info /> */}
//     </div>
//   );
// };

// export default App;

// App.js
import React, { useState, useEffect } from 'react';
// import CurrentWeatherTab from './CurrentWeatherTab';
// import SearchWeatherTab from './SearchWeatherTab';

function App() {
  const [locationAccessGranted, setLocationAccessGranted] = useState(false);
  const [currentTab, setCurrentTab] = useState('current');
  const [loading,setLoading]=useState(false)
  const [val,setval]=useState(null);
  useEffect(() => {
    // Check if geolocation is supported by the browser
    if ("geolocation" in navigator) {
      // Request access to user's location
     if(locationAccessGranted){
      navigator.geolocation.getCurrentPosition(
        () => setLocationAccessGranted(true),
        () => setLocationAccessGranted(false)
      );
     }
    } else {
      // Geolocation is not supported by the browser
      setLocationAccessGranted(false);
    }
  }, []);
 
  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
        {/* <button onClick={() => setCurrentTab('current')}>Current Weather</button>
            <button onClick={() => setCurrentTab('search')}>Search Weather</button> */}
            <Tab currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {locationAccessGranted ? (
          <>
          
          </>
        ) : (
          <>
         <Home locationAccessGranted={locationAccessGranted} setLocationAccessGranted={setLocationAccessGranted}/>
          </>
        )}
      </header>
      {locationAccessGranted && (
        <>
          {currentTab === 'current' && <CurrPosition loading={loading} setLoading={setLoading} val={val} setval={setval} />}
          {currentTab === 'search' && <Search loading={loading} setLoading={setLoading} val={val} setval={setval}/>}
        </>
      )}
    </div>
  );
}

export default App;

