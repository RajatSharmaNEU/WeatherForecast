import React, {useState, useEffect} from "react";
import moment from "moment/moment";
import WeatherCard from "./WeatherCard";
import {Link, useLocation, useParams} from "react-router-dom";
import {Stack} from "react-bootstrap";

const WeatherDay = () => {
    let {state} = useLocation();
    let {city, day} = useParams();
    let cityWeather = state.cityWeather;

    const [daysWeather, setDaysWeather] = useState([]);

    useEffect(() => {
        const tempData = cityWeather.filter(cd => {
            const timestamp = new Date(cd.dt * 1000);
            return day === moment(timestamp).format("dddd")
        });
        setDaysWeather(tempData);
    }, []);

    return (
        <div className="container-fluid text-center">
            <h4 className="py-3">
                {" "}
                {city} {day} Weather Forecast
            </h4>
            <Link to="/" className="home-link bi bi-house">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor"
                     className="bi bi-house" viewBox="0 0 16 16">
                    <path
                        d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                </svg>
            </Link>
            <div className="d-flex">{displayHourlyData()}</div>
        </div>
    );

    function displayHourlyData() {
        return (
            <Stack className="cards w-25 align-items-center" gap={3}>
                {
                    daysWeather.map((value, index) => (
                        <WeatherCard
                            weather={value}
                            key={index}
                        />
                    ))
                }
            </Stack>
        )
    }
}

export default WeatherDay;
