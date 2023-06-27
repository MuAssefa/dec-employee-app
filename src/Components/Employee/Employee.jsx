import React from 'react'
import HomePage from "../HomePage/HomePage";

const StyleEmployee = {
maxWidth:"800px",
backgroundColor:"#fff",
height:"100%",
margin:"0 auto",
padding:"1rem",
}

function Employee(props) {
  return <div style={StyleEmployee}>
    <HomePage employeeData={props.employeeData} />
  </div>
  
}

export default Employee;