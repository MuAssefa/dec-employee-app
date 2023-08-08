import React, { useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';

const EmployeeDetail = () => {
  const { employees } = useContext(EmployeeContext);

  return (
    <div>
      <h2>Employee Details:</h2>
      <ul>
          {employees.map((employee) => (
           <li key={employee.id}>
           <strong>Name:</strong> {employee.name}, 
           <strong>Occupation:</strong>{' '}{employee.occupation}, 
           <strong>image:</strong> {employee.image}, 
           <strong>cellOffice:</strong>{' '}{employee.cellOffice},
           <strong>cellMobile:</strong> {employee.cellMobile}, 
            <strong>sms:</strong>{' '}{employee.sms},
             <strong>email:</strong> {employee.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeDetail;
