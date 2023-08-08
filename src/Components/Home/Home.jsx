// import React,{useContext} from "react";
// import { EmployeeContext } from "../../EmployeeContext";
import styled  from "styled-components";
import {Typography,Button} from '@mui/material';
import { Link } from "react-router-dom";

const Header = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;
const HeaderParagraph = styled.p`
   text-align:center;
   line-height:2;
   color:#000;
   padding:0rem 5rem;
`;
const StyledButton = styled(Button)`
     margin: 0rem 1rem !important ;
     
`;

const StyledButtonGroup = styled.div`
          margin: 3rem auto;
          max-width: 300px;
`;

function Home() {
  return (
    <div>
    <Typography variant ="h3" sx={{padding: "1ren 3rem", textAlign: "center"}}
    >
      Welcome to Front-End Employee Management Portal !
    </Typography>
    <Typography variant ="body1"sx={{padding: "1ren 3rem", textAlign: "justify"}}
     >
       An employee management portal is an indispensable tool for modern businesses, 
      streamlining and centralizing essential HR processes. This comprehensive platform empowers employees 
      to access and update their personal information, such as contact details, tax forms, and performance 
      reviews. It enables supervisors to effortlessly track attendance, assign tasks, and provide 
      feedback, ensuring smooth workflow management. The portal also facilitates seamless communication 
      by acting as a hub for company-wide announcements, policy updates, and employee surveys. 
      Additionally, employees can leverage the portal to request time off, view their schedules, and 
      participate in training programs. With its intuitive interface and robust security measures, the 
      employee management portal promotes efficiency, transparency, and a collaborative work 
      environment.
    </Typography>

      <StyledButtonGroup>
      <Link to="/login">
      <StyledButton variant="contained">Login</StyledButton>
      </Link>
      <StyledButton variant="outlined">Register</StyledButton>
      </StyledButtonGroup>
    </div>
  )
}

export default Home;