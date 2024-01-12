import './HourlyTimeline.css';
import {Icon} from "../weather/WeatherStatus";
import DateTime from '../../class/DateTime';

export default function HourlyTimeline({hourly, temperature, weather_code, current_time}) {

    return (
        <div className="hourly-timeline" id="hourly-timeline">
            <div className="content" id="content">
                {hourly?.map((time, index) => <HourlyWeatherStatus key={index} time={time} temperature={temperature[index]} weather_code={weather_code[index]} is_now={DateTime.isTimeWithinHour(current_time, time)} />)}
            </div>
        </div>
    )
}

export function HourlyWeatherStatus({time, temperature, weather_code, is_now}) {

    console.log(`${is_now} ${time}`);

    const highlight = {background: 'rgb(255,109,0)', background: 'linear-gradient(3deg, rgba(255,109,0,0.9051995798319328) 0%, rgba(255,193,7,1) 100%)'};

    return (
        <div className="hourly-weather-status" style={is_now ? highlight : {}}>
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

//                 background: rgb(255,109,0);
// background: linear-gradient(3deg, rgba(255,109,0,0.9051995798319328) 0%, rgba(255,193,7,1) 100%);
