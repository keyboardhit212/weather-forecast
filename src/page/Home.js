import React, {useState, useEffect} from "react";
import Loading from "../component/loading/Loading";
import "./Home.css";
import Navigation from "../component/navigation/Navigation";
import Today from "../component/today/Today";
import OneDayForecast from "../class/api/OneDayForecast";
import { today } from "../class/api/api";
import ForwardGeocode from "../class/api/ForwardGeocode";



export default function Home(props) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [currentPage, setCurrentPage] = useState(() => "Today");
    const {location} = props;

    useEffect(() => {
        fetch(new OneDayForecast(location[0], location[1]))
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setLoading(!isLoading);
            setData(data);
        })
        console.log("Hi, this is the use Effect");
    }, []);

    function CurrentPage({currentPage}) {
        switch(currentPage) {
            case "Today":
                return (<Today data={data} {...props}/>);
            default:
                return (<Today data={data} {...props}/>);
        }
    }

    if (!isLoading) {
        return (
            <>
                <div className="display-container">
                    <div className="inner-container">
                        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                        <CurrentPage currentPage={currentPage}/>
                    </div>
                </div>
            </>
        );
    }

    return <Loading/>
}

