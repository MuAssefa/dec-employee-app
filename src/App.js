import React, { useState } from "react";
import "./App.css";

import Nav from "./Components/Navbar/Navbar";
import WrapperContainer from "./Components/WrapperContainer/WrapperContainer";


const employeeData = [
  {
  name:"jenny Dee",
  occupation:"SE Enginer",
  image:" https://media.istockphoto.com/id/1478036377/photo/female-student-studying-online-on-a-laptop-computer-at-home.webp?b=1&s=170667a&w=0&k=20&c=2LQljNW4weMrv-F3XXLOOUmXws7PZxTJ7u8k5o952DQ=",
  callOffice:"7416890281",
  mobile:"125487629-4",
  sms:"1254781238",
  email:"jenny@gmail.com"
},
{
  name:"mike sam",
  occupation:"FE Archtict",
  image:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
  callOffice:"4268710391",
  mobile:"321740268-0",
  sms:"0001547947",
  email:"mike@gmail.com"
},
{
  name:"john doe",
  occupation:"FE Enginer",
  image:" https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  callOffice:"8887453878",
  mobile:"247697423-8",
  sms:"1111475308",
  email:"john@gmail.com",
},
{
  name:"Donell Elis",
  occupation:"Manager FE Enginer",
  image:"https://media.istockphoto.com/id/1461077577/photo/spring-portrait-of-excited-young-woman.webp?b=1&s=170667a&w=0&k=20&c=Q3EUxr0Rpv1g4JJTdumH2IEb4marv2pCXZWZbBXuQa8=",
  callOffice:"1452874690",
  mobile:"021478329-4",
  sms:"4102574690",
  email:"Donell@gmail.com",
}
]
const App = () => {
   const [employee, setEmployee] = useState(employeeData)
  return (
    <>
    <Nav />
   <WrapperContainer employeeData={employee}  setEmployee={setEmployee}/>
    </>
  )
}
export default App;

