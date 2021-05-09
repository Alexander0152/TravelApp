import React from "react";
// import { NavLink } from "react-router-dom";

const card_container = {
  width: '300px',
  height: '300px',
  backgroundColor: 'red',
  backgroundSize: 'cover',
  marginBottom: '50px',
  padding: 0,
  borderRadius: '9px',
  color: 'white',
  boxShadow: '3px 3px 3px 3px black'
}

function CountryCard({ country }) {

  const imagePass = 'assets/images/' + country.countryname + '.jpg';
  const newStyles = {...card_container, ...{backgroundImage: `url(${imagePass})`}};
  return (
    <div className="card_item" style={newStyles}>
      <h3>{country.countryname}</h3>
    </div>
  )
}

export default CountryCard;