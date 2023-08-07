
import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import Weather from './assets/components/Weather'








function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)
  const [city, setNameCity] = useState([])
  

  const succes = (pos) =>{
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    
    const API_KEY = "5f0e6576f627110b4092fff419b0119f";
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&q=${city}`;

    axios.get(url)
    .then(({data}) => setWeatherInfo(data))
    .catch((err) => console.log(err))
    
    
  }




const handlesubmit = (e) => {
  e.preventDefault()

  const idBtn = document.getElementById("city").value

    setNameCity(idBtn)

}

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(succes)
    
  }, [city])

  return (
    <>
    <main className='
  bg-black
    min-h-screen
  text-white
    font-lato flex
    justify-center
    items-center  '>


    

    <Weather weatherInfo={weatherInfo} handlesubmit={handlesubmit} />
    
    

    </main>
    </>
  )
}

export default App
