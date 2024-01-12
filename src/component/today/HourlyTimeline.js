import './HourlyTimeline.css';
import {Icon} from "../weather/WeatherStatus";
import DateTime from '../../class/DateTime';

export default function HourlyTimeline({hourly, temperature, weather_code}) {

    return (
        <div className="hourly-timeline" id="hourly-timeline">
            <div className="content" id="content">
                {hourly?.map((time, index) => <HourlyWeatherStatus key={index} time={time} temperature={temperature[index]} weather_code={weather_code[index]} />)}
            </div>
        </div>
    )
}

export function HourlyWeatherStatus({time, temperature, weather_code}) {

    console.log(new DateTime(new Date()).getTime());

    return (
        <div className="hourly-weather-status">
            <p className="time">{new DateTime(time).getTime()}</p>
            <p><Icon {...{weather_code}}/></p>
            <p className="temperature">{temperature}&deg;</p>
        </div>
    );
}

{/* <HourlyWeatherStatus time="1200PM" temperature="22.1" weather_code="1"/>
                <HourlyWeatherStatus time="1200PM" temperature="22.1" weather_code="2"/>
                <HourlyWeatherStatus time="1200PM" temperature="22.1" weather_code="3"/>
                <HourlyWeatherStatus time="1200PM" temperature="22.1" weather_code="0"/> */}