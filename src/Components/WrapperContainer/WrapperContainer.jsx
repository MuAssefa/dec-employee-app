import React from 'react'
import Employee from '../Employee/Employee';

function WrapperContainer(props) {
  return <div
             style={{backgroundColor:"rgba(188, 170, 164,1.0)",
             maxWidth:"1200px",
             height:"90vh",
             margin:"0 auto",
             padding:"3rem 0rem",
            }}
            >
            <Employee employeeData={props.employeeData} />
            </div>
}

export default WrapperContainer;