import React, { useState,useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {EmployeeContext} from '../../EmployeeContext'

const SearchContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 4px;
`;

const SearchButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
`;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const{employees,setEmployees} = useContext(EmployeeContext) 

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
    console.log("employee data:", employees );

    const searchResult = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.occupation.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // console.log("Search result:", searchResult);
    setEmployees(searchResult);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <SearchButton onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;












  