import { useState ,useEffect} from "react"
import apikeys from './apikeys'
import '../App.css';
import axios from 'axios'
export function Container({setSky}){
const [weather,setWeather]=useState({sky:null, windspeed:null,humidity:null,pressure:null,temperature:null,visibility:null});
const [city,setCity]=useState("mumbai")
const [inputCity, setInputCity] = useState("");


useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`${apikeys.base}weather`, {
          params: {
            q: city,
            appid: apikeys.key,
            units: 'metric'
          }
        });
        console.log(response.data)
        const sky=response.data.weather[0].main;
        setSky(sky);
        console.log(sky)
        const windspeed=response.data.wind.speed;
        const humidity=response.data.main.humidity;
        const pressure=response.data.main.pressure;
        const temp=response.data.main.temp;
        const visibility=response.data.visibility;
       setWeather({sky:sky,windspeed:windspeed,humidity:humidity,pressure:pressure,temperature:temp,visibility:visibility});
       
      
      } catch (err) {
       console.log(err)
      }
    };

    fetchWeather();
  }, [city]);

  const handleInputChange = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    setCity(inputCity);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return(<div>
    
    <input class="input" type="text" placeholder="enter city name" onChange={handleInputChange}  onKeyDown={handleKeyDown}  ></input>
    <button class="button" onClick={handleSearch}>search</button>
    <div class='info'>
       <h2>Weather in {city}</h2>
       <ul>
           <li><p>windspeed: {weather.windspeed}m/s</p></li>
           <li><p>humidity: {weather.humidity}%</p></li>
           <li><p>pressure: {weather.pressure}hpa</p></li>
           <li><p>Temperature: {weather.temperature}°C</p></li>
           <li><p>Visibility: {weather.visibility} meters</p></li>
       </ul>
    </div>
</div>)
}
