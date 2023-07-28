import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/Nav/Nav";
import Wrapper from "./Components/Wrapper/Wrapper";
import EmployeeListPage from "./Components/EmployeeListPage/EmployeeListPage";
import HomePage from "./Components/HomePage/HomePage";
import AddEmployeePage from "./Components/Page/AddEmployeePage";
import { Routes, Route } from "react-router-dom";
import { EmployeeProvider } from "./EmployeeContext";
import  { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theming/global";
import { theme } from "./theming/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
  <EmployeeProvider>
      <NavBar />
      <Routes>
        <Route
          path='/home'
          element={
            <Wrapper>
              <HomePage />
            </Wrapper>
          }
        />
        {/* localhost:3000 */}
        <Route
          path='/add-employee'
          element={
            <Wrapper>
              <AddEmployeePage />
            </Wrapper>
          }
        />
        {/* localhost:3000/add-employee */}
        <Route
          path='/employee-list'
          element={
            <Wrapper>
              <EmployeeListPage />
            </Wrapper>
          }
        />{" "}
        {/* localhost:3000/employee-list */}
      </Routes>
      {/* <Wrapper employeesData={employees} setEmployees={setEmployees} /> */}
    </EmployeeProvider>
    </ThemeProvider>
  );
};

export default App;