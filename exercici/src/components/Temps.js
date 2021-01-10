import React, { useState } from 'react';

import {fetch} from './Fetch';


const Temps = () => {
     const [query, setQuery] = useState(''); 
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetch(query);

            setWeather(data);
           setQuery(''); 
        }
    }


    
    return (
        <div >
            <br/>
            <br/>
            <br/>
            <label>La temperatura en tu ciudad:</label>
            <br/>
            <input type="text"className="search"  value={query}  
              onChange={(e) => setQuery(e.target.value)}onKeyPress={search}  
                placeholder="Nombre de la ciudad..."
             />
            {weather.main && (
                <div >
                    <h2 >
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div >
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div >
                        <img  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Temps;
