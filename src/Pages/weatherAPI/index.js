import { useEffect, useState } from "react";
import { useLoaderData, Form } from "react-router-dom";
// import Select from 'react-select';
const WeatherData = () => {
    const cities = useLoaderData()
    const [country, setcountry] = useState([])
    const [city, setCity] = useState([])
    const [selectedcity, setselectedcity] = useState([])
    const [weather, setWeather] = useState(null)
    const [temp_type, settemp_type] = useState("C")
    const [days, setdays] = useState([])
    useEffect(() => {
        var countries = [];
        Object.keys(cities).map((key) => (
            countries.push(key)
        ))
        setCity([])
        setcountry([])
        setcountry(countries)
        setCity(cities[countries[2]])
        setselectedcity(cities[countries[2]][0])
    }, [])
    const hundleChangeCity = (event) => {
        setselectedcity(event.target.value)
    }
    const hundleChangeCountry = (event) => {
        setCity([])
        setCity(cities[event.target.value])
    }
    const hundleWeather = async () => {
        const q = selectedcity;
        var data = null;
        const link = 'http://api.weatherapi.com/v1/forecast.json?key=39dfc721bd6e48f0a1f73224241601&q=' + q + '&days=7&aqi=no'
        try {
            const res = await fetch(link)
            console.log(res)
            data = await res.json()
            console.log(data)
            setWeather(data)

            const today = new Date();
            setdays([])
            const alldays = []
            for (let i = 0; i < 7; i++) {

                const nextDay = new Date();
                nextDay.setDate(today.getDate() + i);
                alldays.push(nextDay.toLocaleDateString('en-US', { weekday: 'long' }));
            }
            setdays(alldays)
        } catch (error) {
            console.log(error)
        }
        // const data = res.json();
        console.log(data)
        // console.log(weather.location)
    }
    return (
        <div className="WeatherSearch">
            <div className="d-flex w-100 weathertools">
                {country.length &&
                    <select onChange={hundleChangeCountry} className="mb-0">
                        {country.map((item, index) => (
                            <option selected={index == 2} key={"country" + item} value={item}>{item}</option>
                        ))}
                    </select>
                }
                <Form onSubmit={hundleWeather} className="d-flex flex-grow-1">
                    {city.length &&
                        <select name="q" className="mb-0 flex-grow-1 mx-2" required onChange={hundleChangeCity}>
                            {city.map((item, index) => (
                                <option selected={index == 0} key={"city_" + item} value={item}>{item}</option>
                            ))}
                        </select>
                    }

                    <button type="submit" className="savebtn mt-0">Save</button>
                </Form>
            </div>
            {weather && <div className="weatherDetailsContainer w-100">
                <div className="weatherDetails pt-5">
                    <h3 className="mx-auto mt-4 text-center">
                        {weather.location.name} ,{weather.location.region}, {weather.location.country}
                    </h3>
                    <div className="temps d-flex justify-content-center mt-5">
                        <div className="condition">
                            <img src={weather.current.condition.icon} alt="weather" />
                        </div>
                        <div className="temp">
                            <h2 className={temp_type === "C" ? "active" : "d-none"}>
                                {weather.current.temp_c}°
                            </h2>
                            <h2 className={temp_type === "F" ? "active" : "d-none"}>
                                {weather.current.temp_f}f
                            </h2>
                            <h6 className="d-flex flex-column align-items-center">
                                {weather.current.condition.text}
                                <p className="mt-4">
                                    <small>last updated : {weather.current.last_updated}</small>
                                </p>
                            </h6>
                        </div>
                        <div className="temptools d-flex flex-column">
                            <button className={temp_type == "C" ? "active" : ""} onClick={() => { settemp_type("C") }}>
                                C
                            </button>
                            <button className={temp_type == "F" ? "active" : ""} onClick={() => { settemp_type("F") }}>
                                F
                            </button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between otherdata">
                        <p>
                            feels like : <span className="feelslike">{temp_type === "C" ? weather.current.feelslike_c + "°" : weather.current.feelslike_f + " F"} </span>
                        </p>
                        <p>
                            wind : {weather.current.wind_kph}km/h
                        </p>
                        <p>
                            visibility : {weather.current.vis_km}km
                        </p>
                    </div>
                    {days.length && <div className="d-flex overflow-auto mt-5 waetherdayss">
                        {days.map((day, index) => (
                            <div key={day} className="weatherday">
                                <p className="dataname mt-3">
                                    {day}
                                </p>
                                <img src={weather.forecast.forecastday[index].day.condition.icon} alt={day + "__" + weather.forecast.forecastday[index].date} />
                                <div className="daytemp">
                                    <span className="daytmp">
                                        {temp_type === "C" ? weather.forecast.forecastday[index].day.maxtemp_c + "°" : weather.forecast.forecastday[index].day.maxtemp_f + " f"}
                                    </span>
                                    <span className="nighttmp">
                                        {temp_type === "C" ? weather.forecast.forecastday[index].day.mintemp_c + "°" : weather.forecast.forecastday[index].day.mintemp_f + " f"}
                                    </span>
                                </div>
                                <p>
                                    {weather.forecast.forecastday[index].day.condition.text}
                                </p>
                            </div>
                        ))}
                    </div>}

                </div>
            </div>
            }
        </div>
    )
}
export default WeatherData;