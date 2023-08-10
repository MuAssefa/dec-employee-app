import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { EmployeeContext } from '../../EmployeeContext';

function EmployeeDetail() {
  const { employeeIndex } = useParams();
  const { employees } = useContext(EmployeeContext);

  // Fetch the employee data using the employeeIndex
  const employee = employees[employeeIndex];

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div>
      <h2>Employee Detail</h2>
      <div>
        <img src={employee.image} alt="person" style={StyledImage} />
        <div>
          <h4>{employee.name}</h4>
          <p>Occupation: {employee.occupation}</p>
          <p>Cell Office: {employee.cellOffice}</p>
          <p>Cell Mobile: {employee.cellMobile}</p>
          <p>SMS: {employee.sms}</p>
          <p>Email: {employee.email}</p>
          {/* <EmployeeEditForm employee={employee} index={index} /> */}
        </div>
      </div>
    </div>
  );
}

const StyledImage = {
  width: '100px',
  height: '100px',
  borderRadius: '50px',
};

export default EmployeeDetail;
