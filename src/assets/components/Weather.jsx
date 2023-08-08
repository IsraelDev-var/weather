import { useState } from "react";
import DarkMode from "./DarkMode";




const Weather = ({weatherInfo, handlesubmit}) => {
  const [iscelcius, setIsCelcius] = useState(true)
  const [minMaxToChange, setMinMaxToChange] = useState(true)
  
  
  const kelvinToCelcius = (tempKelvin) =>{
    return (tempKelvin - 273.15).toFixed(1)
    
  }
  const kelvinToFarenheit = (tempKelvin) =>{
    return (((tempKelvin - 273.15) * 9/5) + 32).toFixed(1)
    
  }
  const resGrado = iscelcius ? kelvinToCelcius(weatherInfo?.main.temp): kelvinToFarenheit(weatherInfo?.main.temp);

  const min = minMaxToChange ? kelvinToCelcius(weatherInfo?.main.temp_min) : kelvinToFarenheit(weatherInfo?.main.temp_min);

  const max = minMaxToChange ? kelvinToCelcius(weatherInfo?.main.temp_max) : kelvinToFarenheit(weatherInfo?.main.temp_max);


  const handleChangesGrado = ( ) =>{
    setIsCelcius(!iscelcius)
    setMinMaxToChange(!minMaxToChange)
    
    
    
  }

  const imagesWeather = {
    
    "01d":"bg-[url(/public/imgs/weather1.jpg)]",
    "02d":"bg-[url(/public/imgs/weather2.jpg)]",
    "03d":"bg-[url(/public/imgs/weather3.jpg)]",
    "04d":"bg-[url(/public/imgs/weather4.jpg)]",
    "09d":"bg-[url(/public/imgs/weather5.jpg)]",
    "10d":"bg-[url(/public/imgs/weather6.jpg)]",
    "11d":"bg-[url(/public/imgs/weather7.jpg)]",
    "12d":"bg-[url(/public/imgs/weather8.jpg)]",
    "01n":"bg-[url(/public/imgs/weather01n.gif)]",
    "02n":"bg-[url(/public/imgs/weather02n.gif)]",
    "03n":"bg-[url(/public/imgs/weather03n.gif)]",
    "04n":"bg-[url(/public/imgs/weather04n.gif)]",
    "9n":"bg-[url(/public/imgs/weather01n.gif)]",
    "10n":"bg-[url(/public/imgs/weather01n.gif)]",
    "11n":"bg-[url(/public/imgs/weather01n.gif)]",
    "12n":"bg-[url(/public/imgs/weather01n.gif)]",
  }


  return (
    <>
    
  <section  className={` select-none flex flex-col  w-full  h-screen  justify-center items-center  ${imagesWeather[weatherInfo?.weather[0].icon]} bg-cover bg-center grid place-items-center`}>
    <section className=" pt-2">
      <form
        onClick={handlesubmit}
        className="flex rounded-md overflow-hidden   mx-auto"
        > 
        <input
        id="city"
        placeholder="search cities"
        className="text-black p-2 w-[140px] md:w-[500px] mb-4  "
        type="text"
        
        />
        <button id="btn-submit" className="   hover:bg-neutral-400 dark:bg-neutral-800 bg-gray-900 hover:text-black px-2 mb-4">Search</button>

      </form>

      </section>

        <h2 className=" font-bold text-neutral-900 dark:text-white p-2 bg-white/30 dark:bg-neutral-800/50 w-[300px] rounded-3xl text-center text-3xl xs:text-xl mb-6">{weatherInfo?.name}, "{weatherInfo?.sys.country}"</h2>
          <DarkMode />
            <section  className="  text-neutral-900 dark:text-white grid md:grid-cols-2  pl-2 pr-2 gap-3 min-w-[375px]: ">
        
              <section className={`bg-white/30 dark:bg-neutral-800/50 rounded-3xl p-2 items-center  grid grid-cols-2 gap-4 `}>

                <h4 className=" font-bold text-center text-ms col-span-2 pt-7 ">{weatherInfo?.weather[0].description}</h4>
          
                  <span >Min {min}º{iscelcius ? "C":"F"}</span>
        
                  <span>Max {max}º{iscelcius ? "C":"F"}</span>
        
                  <span className=" font-bold text-5xl">
                    {resGrado}º{iscelcius ? "C":"F"}
                  </span>
                  
          <div>
            <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
          </div>

      </section>
  
      <section  className=" select-none justify-around  p-3 bg-white/30 dark:bg-neutral-800/50   rounded-3xl flex md:flex-col md:justify-center   gap-6 md:space-y-10 md:max-w-[150px] md:items-start  ">
        <article className=" flex space-x-3 items-center justify-center ">
          <div>
            <img src="/public/images/speed.png" alt="" />
          </div>
          <span>{weatherInfo?.wind.speed } m/s</span>
        </article>

        <article className=" flex space-x-3 items-center">
          <div>
            <img src="/public/images/humidity.png" alt="" />
          </div>
          <span>{weatherInfo?.main.humidity} %</span>
        </article>

        <article className=" flex space-x-3 items-center">
          <div>
            <img  src="/public/images/pressure.png" alt="" />
          </div>
          <span className="">{weatherInfo?.main.pressure} %</span>
            </article>
    </section>

    </section>

    <section className="flex items-center h-40">
    
    <button  className="   animate-bounce bg-[rgb(4,115,171)] 100%)] btn-change hover:bg-cyan-600 dark:text-black  p-2 rounded-2 border-1 border-neutral-400 text-ms hover:text-white" onClick={handleChangesGrado} type="button" >Change to º{iscelcius ? "F":"C"}</button>
    
    </section>

    
    

  </section>

  </>


  )
}
export default Weather