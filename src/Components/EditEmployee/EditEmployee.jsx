import React, { useState } from 'react';
import { useEmployeeContext } from './EmployeeContext';

const EditEmployee = ({ employee, index }) => {
  const { employees, setEmployees } = useEmployeeContext();

  const [editedEmployee, setEditedEmployee] = useState({ ...employee });

  const handleChange = e => {
    const { name, value } = e.target;
    setEditedEmployee({
      ...editedEmployee,
      [name]: value,
    });
  };

  const handleSave = () => {
    setEmployees(prevEmployees => {
      const updatedEmployees = [...prevEmployees];
      updatedEmployees[index] = editedEmployee;
      return updatedEmployees;
    });
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form>
        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={editedEmployee.image}
          onChange={handleChange}
        />
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={editedEmployee.name}
          onChange={handleChange}
        />
        <label>Occupation:</label>
        <input
          type="text"
          name="occupation"
          value={editedEmployee.occupation}
          onChange={handleChange}
        />
         <label>CellOffice:</label>
        <input
          type="text"
          name="occupation"
          value={editedEmployee.occupation}
          onChange={handleChange}
        />
         <label>CellMobile:</label>
        <input
          type="text"
          name="occupation"
          value={editedEmployee.occupation}
          onChange={handleChange}
        />
        <label>Sms:</label>
        <input
          type="text"
          name="occupation"
          value={editedEmployee.occupation}
          onChange={handleChange}
        />
        <label>email:</label>
        <input
          type="text"
          name="occupation"
          value={editedEmployee.occupation}
          onChange={handleChange}
        />
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
