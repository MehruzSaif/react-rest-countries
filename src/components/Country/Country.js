import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, flags, area, population, region } = props.country;

    return (
        <div className='country'>

            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p><small>Population: {population}</small></p>
            <p><small><b>Region: {region}</b></small></p>

            {/* <h2>Country Name: {name.common}</h2>
            <h4>Population: {population}</h4>
            <p><small>Area: {area}</small></p>
            <p><small>Region: {region}</small></p> */}
        </div>
    );
};

export default Country;