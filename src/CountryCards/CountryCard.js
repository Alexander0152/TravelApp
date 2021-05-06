import React from "react";
import PropTypes from 'prop-types';
// import { NavLink } from "react-router-dom";

const card_container = {
  width: '300px',
  height: '300px',
  backgroundColor: 'red',
  backgroundSize: 'cover',
  marginBottom: '50px',
  padding: 0,
  borderRadius: '9px',
  color: 'white'
}

function CountryCard({ country }) {

  const imagePass = 'assets/images/' + country.name + '.jpg';
  const newStyles = {...card_container, ...{backgroundImage: `url(${imagePass})`}};
  return (
    <div style={newStyles}>
      <h3>{country.name}</h3>
    </div>
  )
}

export default CountryCard;