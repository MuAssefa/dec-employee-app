import  { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../../EmployeeContext';

const AddEmployee = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [employee, setEmployee] = useState({
    name: '',
    occupation: '',
    email: '',
    password : '',
    address: '',
    phone: '',
    salary: '',
    image: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newEmployee = { ...employee, id: Date.now() };
    // console.log()
    setEmployees( [...employees, employee]) ;
    setEmployee({
      name: '', occupation: '', email: '', password: '', address: '', phone: '', salary: '',
      image: '',
    });
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={employee.name} onChange={handleChange} required />
        <label>Occupation:</label>
        <input
          type="text"
          name="occupation"
          value={employee.occupation}
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input type="email" name="email" value={employee.email} onChange={handleChange} required />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={employee.password}
          onChange={handleChange}
          required
        />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={employee.address}
          onChange={handleChange}
          required
        />
        <label>Phone:</label>
        <input type="tel" name="phone" value={employee.phone} onChange={handleChange} required />
        <label>Salary:</label>
        <input
          type="number"
          name="salary"
          value={employee.salary}
          onChange={handleChange}
          required
        />
        <label>Image URL:</label>
        <input type="text" name="image" value={employee.image} onChange={handleChange} />
        <button type="submit">Add Employee</button>
        <button type="button" onClick={() => navigate.push('/')}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
