import DateTime from "../../class/DateTime";
import './SunriseSunset.css';

export default function SunriseSunset({daily}) {


    return (
        <div className="sunrise-sunset-container">
            <p>Sunrise & Sunset</p>
            <Sunrise {...{time: daily?.sunrise[0]}}/>
            <Sunset {...{time: daily?.sunset[0]}}/>
        </div>
    )
}

/*
* @params time - An ISO8601 String
**/
export function Sunrise({time}) {
    return (
        <div className="sunrise">
            <img src="res/weather_icon/sunrise.svg"/>
            <div>
                <p className="sunrise-label">Sunrise</p>
                <p className="time-label">{new DateTime(time).getTime()}</p>
            </div>
        </div>
    )
}

/*
* @params time - An ISO8601 String
**/
export function Sunset({time}) {
    return (
        <div className="sunrise">
            <img src="res/weather_icon/sunset.svg"/>
            <div>
                <p className="sunrise-label">Sunset</p>
                <p className="time-label">{new DateTime(time).getTime()}</p>
            </div>
        </div>
    )
}