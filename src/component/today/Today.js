import React from "react";
import './Today.css';
import DateTime from "../../class/DateTime";
import InformationPanel from "./InformationPanel";
import LocalCity from "../location/LocalCity";
import WeatherStatus from "../weather/WeatherStatus";
import HourlyTimeline from "./HourlyTimeline";
import Navigation from "../navigation/Navigation";
import SunriseSunset from "../weather/SunriseSunset";

export default function Today(props) {

    const {data, name, currentPage, setCurrentPage} = props;
    const date = new DateTime(data?.current?.time);
    const hourly = data?.hourly?.time,
    temperature = data?.hourly?.temperature_2m,
    weather_code = data?.hourly?.weather_code,
    current_time = data?.current?.time;


    return (
        <>
            <div className="display-container">
                <div className="inner-container">
                    <Navigation {...{currentPage, setCurrentPage}}/>
                    <div className="today">
                        <div className="left-container">
                            <LocalCity {...props}/>
                            <InformationPanel {...props}/>
                        </div>
                        <div className="right-container">
                            <WeatherStatus {...props}/>
                        </div>
                        <HourlyTimeline {...{hourly, temperature, weather_code, current_time}}/>
                    </div>
                </div>
            </div>
            <SunriseSunset/>
        </>
        
        
    )
}