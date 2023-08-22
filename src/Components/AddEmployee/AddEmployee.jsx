import  { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../../EmployeeContext';
import './AddEmployee.css'; 
import axios from 'axios';

  const AddEmployee = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [employee, setEmployee] = useState({
    name: '',
    occupation: '',
    cellMobile: '',
    cellOffice : '',
    sms: '',
    email: '',
    imageUrl: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const requestUrl = 
    "https://still-anchorage-76866-40e48e0fa874.herokuapp.com/api/employees/employee";

    async function AddEmployee() {
      try {
        const response = await axios.post(requestUrl,employee);
        console.log("response",response)
      } catch (error) {
        console.error(error);
      }
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    AddEmployee()
    setEmployees( [...employees, employee]) ;
    setEmployee({
      name: '', occupation: '', cellMobile: '', cellOffice: '', sms: '', email: '', 
      imageUrl: '',
    });
  };

  return (
    <div className="add-employee-container">
      <h2>Add Employee</h2>
      <form className="add-employee-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
        type="text"
         name="name" 
         value={employee.name}
          onChange={handleChange}
           required />
        <label>Occupation:</label>
        <input
          type="text"
          name="occupation"
          value={employee.occupation}
          onChange={handleChange}
          required
        />
        <label>CellMobile:</label>
        <input
         type="text"
          name="cellMobile" 
          value={employee.cellMobile}
           onChange={handleChange} 
           required />
        <label>CellOffice:</label>
        <input
          type="cellOffice"
          name="cellOffice"
          value={employee.cellOffice}
          onChange={handleChange}
          required
        />
        <label>sms:</label>
        <input
          type="text"
          name="sms"
          value={employee.sms}
          onChange={handleChange}
          required
        />
        
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          required
        />
        <label>Image URL:</label>
        <input
         type="text"
          name="imageUrl"
           value={employee.imageUrl} 
           onChange={handleChange} />
        <button type="submit">Add Employee</button>
        <button type="button" onClick={() => navigate.push('/')}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
