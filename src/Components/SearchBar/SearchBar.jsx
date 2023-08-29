import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const StyledInput = styled.input`
  width: 90%;
  padding: 10px 5px;
  border: none;
  border: 1px solid #333;
  border-radius: 6px;
  margin: 4px;
`;

const SearchBar = ({ employeesData, setEmployeesData, originalEmployeesData }) => {
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  const handleSearch = () => {
    const searchResult = employeesData.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.title.toLowerCase().includes(searchItem.toLowerCase())
      );
    });

    setEmployeesData(searchResult);
  };

  const handleClear = () => {
    setSearchItem(""); // Clear the search input
    setEmployeesData(originalEmployeesData); // Reset to the original employee data
  };

  return (
    <>
      <StyledInput type='text' name='' id='' value={searchItem} onChange={handleChange} />
      <FontAwesomeIcon icon={faSearch} size='lg' onClick={handleSearch} />
      <button onClick={handleClear}>Clear</button>
    </>
  );
};

export default SearchBar;

