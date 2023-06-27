import React from 'react'

function Header(props) {
  return (
    <h3 
      style={{
      padding:0,
      marginBottom:"1rem",
      }}
      >
    {props.title}
   </h3>
  );
}

export default Header;

  