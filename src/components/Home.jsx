import React, {useEffect, useRef, useState} from 'react';
import {Alert, Button, Container, Form, Stack} from "react-bootstrap";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const Home = () => {
    const [showError, setShowError] = useState(false);
    const [eachDayWeather, setEachDayWeather] = useState([]);
    const [cityWeather, setCityWeather] = useState([]);
    const cityRef = useRef();
    const fetchWeatherForecast = async (event) => {
        event.preventDefault();
        const cityName = cityRef.current.value;
        if(cityName.length) {
            try {
                const response = await axios.get(
                    `http://api.openweathermap.org/data/2.5/forecast?q=${cityRef.current.value}&units=imperial&APPID=767ca9c391439e1addd64f3fcbbf1033`
                )
                setCityWeather(response.data.list);
                const weatherData = response.data.list.filter(weather => weather.dt_txt.includes("00:00:00"));
                console.log(weatherData);
                setEachDayWeather(weatherData);
                setShowError(false);
            } catch (e) {
                setShowError(true);
                setEachDayWeather([]);
            }
        } else {
            setShowError(true);
        }
    }

    useEffect(() => {
        cityRef.current.focus();
    });

    return (
        <>
            {
                showError &&
                <Alert variant="danger" className="text-center position-absolute top-0 w-100" dismissible
                       onClose={() => {
                           setShowError(false)
                       }}>Please provide valid city name!!!</Alert>
            }
            <Container className="text-center mt-5 pt-5">
                <h3>Weather Forecast</h3>
                <Stack direction="horizontal" gap={3} className="mt-5">
                    <Form.Control className="me-auto" placeholder="Enter city name" ref={cityRef}/>
                    <Button variant="primary" type="submit" className="btn-dark"
                            onClick={fetchWeatherForecast}>Submit</Button>
                </Stack>
                <Stack className="cards" direction="horizontal" gap={3}>
                    {
                        eachDayWeather.map((weather, index) => (
                            <WeatherCard
                                weather={weather}
                                key={index}
                                cityWeather={cityWeather}
                                cityName={cityRef.current.value}
                            />
                        ))
                    }
                </Stack>

            </Container>
        </>

    )
};

export default Home;