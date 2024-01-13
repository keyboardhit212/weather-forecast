import DateTime from "../../class/DateTime";
import './SunriseSunset.css';

export default function SunriseSunset() {
    return (
        <div className="sunrise-sunset-container">
            a;lskdfjkasdjfkasdjl
        </div>
    )
}

export function Sunrise(time) {
    return (
        <div className="sunrise">
            <img src="res/weather_icon/sunrise.svg"/>
            <div>
                <p>Sunrise</p>
                <p>{new DateTime(time).getTime()}</p>
            </div>
        </div>
    )
}

export function Sunset() {
    return (
        <>
        </>
    )
}