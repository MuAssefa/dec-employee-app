import React from 'react'

function EmployeeListItem(props) {
  return (
   <>
   {
props.employeeData.map((employee,index) =>{
    return(
        <div style={StyledEmployeeListItem} key={index}>
        <img style={StyledImage}src={employee.image} alt="person"/>
        <div>
        <h4>{employee.name}</h4>
        <p>{employee.occupation}</p>
        </div>
        </div>
    );
})}
   </>
  );
}
const StyledEmployeeListItem = {
display:"flex",
alignItem:"center",
gap:"10px",
padding:"0.6rem",
width:"50%",
backgroundColor:"#fff",
marginBottom:"0.6rem",
boxShadow:"0px 2px 4px rgba(0,0,0,0.26)",
}
const StyledImage = {
width:"50px",
height:"50px",
borderRadius:"50px",
}

export default EmployeeListItem;