import React, {useState, useEffect} from "react";
import Loading from "../component/loading/Loading";
import "./Home.css";
import Navigation from "../component/navigation/Navigation";
import Today from "../component/today/Today";
import OneDayForecast from "../class/api/OneDayForecast";
import TwoWeekForecast from "../class/api/TwoWeekForecast";
import SunriseSunset from "../component/weather/SunriseSunset";


export default function Home(props) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [currentPage, setCurrentPage] = useState(() => "Today");
    const {location} = props;

    useEffect(() => {
        // fetch(new TwoWeekForecast(location[0], location[1]))
        fetch(new TwoWeekForecast(10.6, 122.9))
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setLoading(!isLoading);
            setData(data);
        })
    }, []);

    function CurrentPage(props) {
        switch(currentPage) {
            case "Today":
                return (<Today {...props}/>);
            default:
                return (<Today {...props}/>);
        }
    }

    if (!isLoading) {
        return (
            <>       
                <CurrentPage {...{currentPage, setCurrentPage, data, ...props}}/>
            </>
        );
    }

    return <Loading/>
}

