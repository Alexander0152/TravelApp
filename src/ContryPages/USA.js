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

function USA() {

//   const imagePass = 'assets/images/' + country.name + '.jpg';
  const newStyles = {...card_container, ...{backgroundImage: `url(assets/images/USA.jpg)`}};
  return (
    <div className="card_item" style={newStyles}>
      <h3>USA</h3>
    </div>
  )
}

export default USA;