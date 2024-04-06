import React from 'react'
import wind from "../assets/wind.png"
import humidity from "../assets/humidity.png"
import cloud from "../assets/cloud.png"
function Info({val}) {
  return (
    <div>
      <div>
        <p data-cityName>{val?.name}</p>
        <img data-countryIcon src={`https://flagcdn.com/144x108/${val?.sys?.country.toLowerCase()}.png`} alt="" />
      </div>
      <p data-weatherDesc>
    {val?.weather?.[0]?.description}
      </p>

      <img src={`https://openweathermap.org/img/w/${val?.weather?.[0]?.icon}.png`} alt="" />
      <p>
        {/* temp */}
        {val?.main?.temp}
      </p>

      {/* 3 cards parameter */}
      <div>
      <div>
        <img src={wind} alt="" />
        <p>windspeed</p>
        {/* windspeed */}
        <p>{val?.wind?.speed}</p>
      </div>
      <div>
        <img src={humidity} alt="" />
        <p>Humidity</p>
        {/* humidity */}
        <p>{val?.main?.humidity}</p>
      </div>
      <div>
        <img src={cloud} alt="" />
        <p>Clouds</p>
        {/* cloud */}
        <p>{val?.clouds?.all}</p>
      </div>
      </div>
    </div>
  )
}

export default Info
