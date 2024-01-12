import React from "react";
import './WeatherStatus.css';
import WMOCode from "../../class/utils/WMOCode";

export default function WeatherStatus(props) {

    const {data} = props;
    const temperature = data?.current?.temperature_2m,
    weather_code = data?.current?.weather_code,
    apparent_temperature = data?.current?.apparent_temperature;

    return (
        <div className="weather-status">
            <div className="temperature-container">
                <Description {...{temperature, weather_code, apparent_temperature}}/>
                <Icon {...{weather_code}}/>
            </div>
        </div>
    )
}

function Description({temperature, weather_code, apparent_temperature}) {

    return (
        <>
            <p className="temperature">{temperature}&deg;</p>
            <div className="description-container">
                <p>{WMOCode.getDescription(weather_code)}</p>
                <p>Feels Like {apparent_temperature}&deg;</p>
            </div>
        </>
    );
}

function Icon({weather_code}) {

    return (
        <div className="icon-container">
            <img src={`res/weather_icon/${svg_filename(weather_code)}`}/>
        </div>
    );
}

function svg_filename(weather_code) {
    switch(weather_code) {
        case 0:
        case 1:
            return "clear-day.svg";
        case 2:
            return "partly-cloudy-day.svg";
        case 3:
            return "overcast.svg";
        case 45:
        case 48:
            return "overcast-fog.svg";
        case 51:
            return "light-drizzle.svg";
        case 53:
            return "moderate-drizzle.svg";
        case 55:
            return "extreme-drizzle.svg";
        case 56:
            return "light-drizzle.svg";
        case 57:
            return "extreme-drizzle.svg";
        case 61:
            return "light-rain.svg";
        case 63:
            return "moderate-rain.svg";
        case 65:
            return "extreme-rain.svg";
        case 66:
            return "light-freezing-rain.svg";
        case 67:
            return "extreme-freezing-rain.svg";
        case 71:
            return "light-snow.svg";
        case 73:
            return "moderate-snow.svg";
        case 75:
            return "extreme-snow.svg";
        case 77:
            return "light-snow.svg";
        case 80:
            return "light-rain.svg";
        case 81:
            return "moderate-rain.svg";
        case 82:
            return "extreme-rain.svg";;
        case 85:
            return "light-snow.svg";
        case 86:
            return "extreme-snow.svg";
        case 95:
            return "extreme-thunderstorm.svg";
        case 96:
        case 99:
            return "extreme-thunderstorm-snow.svg";
        default:
            return "clear-day.svg";
    }
}