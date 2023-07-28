import React, { useContext, useState } from 'react';
import { EmployeeContext } from './EmployeeContext';

const EmployeeForm = () => {
  const { Employee } = useContext(EmployeeContext);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: Date.now(), // You can generate a unique ID using any method you prefer
      name: name,
    };
    Employee(newEmployee);
    setName('');
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
