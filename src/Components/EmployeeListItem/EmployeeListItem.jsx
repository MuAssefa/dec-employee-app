import React,{useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'; 
import {EmployeeContext} from '../../EmployeeContext'
import styled from 'styled-components';
import Paper from '@mui/material/Paper';


function EmployeeListItem({ imageUrl, name, index }) {
  const { employees,color } = useContext(EmployeeContext);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/employee/${index}`); 
  };

  return (
      <React.Fragment>
      {employees.map(({imageUrl, name, occupation, cellOffice, cellMobile, sms, email}, index) => 
          {
           return(
            <Link  to={`/employees/${index}`}>
            <StyledEmployeeListItem  onClick={handleClick}   key={index} elevation='6'>
             <img style={StyledImage}src={imageUrl} alt="person"/>
              <div>
              <h4 style={{color: color}}>{name}</h4>
               <p>{occupation}</p>
               <p>{cellOffice}</p>
               <p>{cellMobile}</p>
               <p>{sms}</p>
               <p>{email}</p>
               </div>
               </StyledEmployeeListItem>
                </Link>

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