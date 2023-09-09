import React,{useContext, useState} from 'react';
// import { useNavigate } from "react-router-dom";
import {EmployeeContext} from '../../EmployeeContext'
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Alert from "@mui/material/Alert"
import { Delete,Edit } from '@mui/icons-material';
import axios from 'axios';
import  {Link}  from 'react-router-dom'; 
import SearchBar from '../SearchBar/SearchBar';
import EmployeeDetail from '../EmployeeDetail/EmployeeDetail';




const StyledAction = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`;
const StyledDeleteIcon = styled(Delete)`
margin: 0 5px;
color: red;
cursor: pointer;
`;
const StyledEditIcon = styled(Edit)`
margin: 0 5px;
color: purple;
cursor: pointer;
`;

function EmployeeListItem({ imageUrl, name, index }) {
  const { employees, setEmployees, color } = useContext(EmployeeContext);
  const [showAlert, setShowAlert] = useState(false)

  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/employee/${index}`); 
  // };

  const handleDelete = (employeeId) => {
    axios
    .delete(`https://still-anchorage-76866-40e48e0fa874.herokuapp.com/api/employees/${employeeId}`)
    .then(() =>{
    setShowAlert(true)
    setEmployees(prevEmployees => prevEmployees.filter(employee => employee._id !== employeeId))
    }).catch(error => {
      console.log("failed to delete employee: ", error)
    })
  }
  // console.log("alert", showAlert)

  const handleEdit = (employeeId) => {
    console.log("employee id", employeeId)
  }


  return (
    
      <React.Fragment>
        <h2>Employee Directory</h2>
        < SearchBar />
        <EmployeeDetail />
    {showAlert && (<Alert severity="error">Employee is deleted successfully!</Alert>)}    
{employees.map(({imageUrl, name, occupation, cellOffice, cellMobile, sms, email, _id}, index) => 
          {
           return(
            <StyledEmployeeListItem   key={index} elevation='6'>
             <img style={StyledImage}src={imageUrl} alt="person"/>
             <StyledAction>
              <div>
              <h4 style={{color: color}}>{name}</h4>
               <p>{occupation}</p>
               {/* <p>{cellOffice}</p>
               <p>{cellMobile}</p>
               <p>{sms}</p>
               <p>{email}</p> */}
               </div>
               <div>
                <Link to={`/add-employee/${_id}`}>
                <StyledEditIcon onClick={() => handleEdit(_id)} />
                </Link>
                <StyledDeleteIcon onClick={() => handleDelete(_id)}/>
               </div>
               </StyledAction>
               </StyledEmployeeListItem>
                

    );
})}

   </React.Fragment>
  );
}
const StyledEmployeeListItem = styled(Paper) `
         display:flex;
         align-items: center;
         gap:10px;
         padding:0.5rem;
         width:50%;
         margin-bottom:0.5rem;
     `
const StyledImage = {
    width:"50px",
   height:"50px",
   borderRadius:"50px",
}

export default EmployeeListItem;