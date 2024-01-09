import React from "react";
import './InformationPanel.css';
import InformationWidget from "./InformationWidget";

export default function InformationPanel(props) {

    const {data} = props;

    return(
        <div className="information-panel">
            <table>
                <tbody>
                    <tr>
                        <td><InformationWidget icon="res/weather_icon/wind.svg" label="Wind Speed:" result={`${data?.current?.wind_speed_10m}${data?.current_units?.wind_speed_10m}`}/></td>
                        <td><InformationWidget icon="res/weather_icon/compass.svg" label="Wind Direction:" result={`${data?.current?.wind_direction_10m}${data?.current_units?.wind_direction_10m}`}/></td>
                        <td><InformationWidget icon="res/weather_icon/tornado.svg" label="Wind Gust:" result={`${data?.current?.wind_gusts_10m}${data?.current_units?.wind_gusts_10m}`}/></td>
                    </tr>
                    <tr>
                        <td><InformationWidget icon="res/weather_icon/cloud-up.svg" label="Cloud Cover:" result={`${data?.current?.cloud_cover}${data?.current_units?.cloud_cover}`}/></td>
                        <td><InformationWidget icon="res/weather_icon/humidity.svg" label="Humidity:" result={`${data?.current?.relative_humidity_2m}${data?.current_units?.relative_humidity_2m}`}/></td>
                        <td><InformationWidget icon="res/weather_icon/pressure-high.svg" label="Pressure:" result={`${data?.current?.pressure_msl}${data?.current_units?.pressure_msl}`}/></td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    )
}