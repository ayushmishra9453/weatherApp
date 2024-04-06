// import React, { useEffect, useState } from 'react'

// function CurrPosition() {
//   const API_key="2d26fe5c5da7b75b384423b1a09c210c";
//   const [latitude,setLatitude]=useState("")
//   const [longitude,setLongitude]=useState("")
//   function getLocation(){
//     if(navigator.geolocation){
//       navigator.geolocation.getCurrentPosition(showPosition)
//     }
//     else{
//       console.log("geolocation not supported");
//     }
//   }

//   const showPosition = (position) => {
//     if (position.coords.latitude && position.coords.longitude) {
//       setLatitude(position.coords.latitude);
//       setLongitude(position.coords.longitude);
//       console.log("Latitude:", position.coords.latitude);
//       console.log("Longitude:", position.coords.longitude);
//       getCustomWeatherDetails(); // Call getCustomWeatherDetails() here
//     } else {
//       console.log("Invalid coordinates received");
//     }
//   };
//   async function getCustomWeatherDetails() {
//     try {
//       const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}`;
//       console.log("API Request URL:", url);
//       const result = await fetch(url);
//       const data = await result.json();
//       if (data.cod && data.message) {
//         console.log("API Error:", data.message);
//       } else {
//         console.log("Weather Data:", data);
//       }
//     } catch (error) {
//       console.log("Error fetching weather data:", error);
//     }
//   }
//   useEffect(()=>{
//     getLocation();
    
//   },[])
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default CurrPosition


import React, { useEffect, useState } from 'react';
import Loading from "../assets/loading.gif"
import Loader from './Loader';
import Info from './Info';
function CurrPosition({loading,setLoading,val,setval}) {
  const API_key = "2d26fe5c5da7b75b384423b1a09c210c";
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  
  function getLocation() {
    setLoading(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported");
    }
  }

  const showPosition = (position) => {
    if (position.coords.latitude && position.coords.longitude) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    } else {
      console.log("Invalid coordinates received");
    }
  };

  async function getCustomWeatherDetails() {
    
    try {

      if (latitude !== "" && longitude !== "") {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}`;
        console.log("API Request URL:", url);
        const result = await fetch(url);
        const data = await result.json();
        setval(data);
        if (data.cod && data.message) {
          console.log("API Error:", data.message);
        } else {
          console.log("Weather Data:", data);
        }
      } else {
        console.log("Latitude or Longitude is empty");
      }
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    
    getLocation();
  }, []);

  useEffect(() => {
    if (latitude !== "" && longitude !== "") {
      getCustomWeatherDetails();
    }
  }, [latitude, longitude]);

  return (
    <div>
      {loading ? <Loader />:<Info val={val}/>}
    </div>
  );
}

export default CurrPosition;

