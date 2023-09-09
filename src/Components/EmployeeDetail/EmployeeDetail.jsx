import React, { useContext } from 'react';
import styled from 'styled-components';
import { EmployeeContext } from '../../EmployeeContext';

const StyledEmployeeDetail = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 16px;
  
`;

function EmployeeDetail() {
  const { employees } = useContext(EmployeeContext);

  const selectedEmployee = employees[0]; 

  return (
    <StyledEmployeeDetail>
      {selectedEmployee && (
        <>
          <h2>Employee Detail</h2>
          <img
            src={selectedEmployee.imageUrl}
            alt={selectedEmployee.name}
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
          />
          <h3>{selectedEmployee.name}</h3>
          <p>Occupation: {selectedEmployee.occupation}</p>
          <p> Cell Office : {selectedEmployee.cellOffice}</p>
          <p> Cell Mobile : {selectedEmployee.cellMobile}</p>
          <p>SMS: {selectedEmployee.sms}</p>
          <p>Email: {selectedEmployee.email}</p>
        </>
      )}
    </StyledEmployeeDetail>
  );
}

export default EmployeeDetail;



