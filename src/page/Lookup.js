import React, {useState, useEffect} from "react";
import './Lookup.css';
import LastKeyUpDelay from "../class/utils/LastKeyUpDelay";
import ForwardGeocode from "../class/api/ForwardGeocode";

export default function Lookup(props) {

    const [cities, setCities] = useState([]);
    const [resultDisplay, setResultDisplay] = useState(false);
    const {setLocation, setName} = props;
    let geocode_api = new ForwardGeocode();

    async function retrieveCities() {
        let searchterm = document.getElementById("searchbar").value;
        if (searchterm !== '') {
            let results = await geocode_api.setLocation(searchterm).getResult();
            setCities(results);
            console.log(results);
            setResultDisplay(true);
        }       
    }

    const citiesList = cities.map((value, index) =>
        (<a href="#" key={index} onClick={() => {
            setLocation([value?.lat, value?.lon]);
            setName(value?.display_name)
        }}>{value?.display_name}</a>)
    );

    return(
        <div className="lookup-outside-container">
            <div className="lookup-container">
                <form action="#" onSubmit={(e) => {
                    e.preventDefault();
                    retrieveCities();
                }}>
                    <input type="text" id="searchbar" name="search-bar" placeholder="Search a place" onKeyDown={(e) => {
                        setResultDisplay(false)
                    }}/>
                    <input type="button" value={"Search"} onClick={() => retrieveCities()}/>
                    <div className="result-container" style={{display: (resultDisplay) ? 'block' : 'none'}}>
                        {citiesList.length === 0 ? (<span>No Results Found</span>) : citiesList}
                    </div>
                </form>
            </div>
        </div>
        
    );
}