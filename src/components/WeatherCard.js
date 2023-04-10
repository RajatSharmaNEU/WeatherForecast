import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";

function WeatherCard(props) {
    const {cityWeather, cityName} = props;
    const {dt, main, weather} = props.weather;
    const {temp, temp_max, temp_min, feels_like} = main;
    const {id, description} = weather[0];

    const timestamp = new Date(dt * 1000);
    const date = moment(timestamp).format("D MMMM, Y");
    const day = moment(timestamp).format("dddd");
    const time = moment(timestamp).format("hh:mm:ss A");

    const _img = `owf owf-${id} owf-3x`;

    const displayWeatherCard = () => {
        return (
            <div className="card p-3 mt-3">
                <h4 className="text-success">{date}</h4>
                <h5>{day}</h5>
                {
                    !cityWeather &&
                    <h5>{time}</h5>
                }
                <h5>Temperature: {temp}°F</h5>
                <i className={_img}></i>
                <p>{description}</p>
                <p>
                    Feels Like: {feels_like} °F
                    <br/>
                    Min Temp: {temp_min}°F
                    <br></br>
                    Max Temp: {temp_max}°F
                </p>
            </div>
        )
    }

    return (
        <>
            {
                cityWeather ?
                    <Link to={`${cityName}/${day}`} state={{cityWeather}}>
                        {
                            displayWeatherCard()
                        }
                    </Link> :
                    displayWeatherCard()
            }
        </>

    );
}

export default WeatherCard;
