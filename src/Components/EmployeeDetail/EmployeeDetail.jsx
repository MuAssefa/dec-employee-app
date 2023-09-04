import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EmployeeDetail() {
  const { employeeIndex } = useParams();
  const [employee, setEmployee] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios
        .get(`https://still-anchorage-76866- 
         40e48e0fa874.herokuapp.com/api/employees/${employeeIndex}`);

        setEmployee(response.data);

        setLoading(false);
      } catch (error) {
        setError('Error fetching employee data');
        setLoading(false);
      }
    };
    
    if (employeeIndex !== undefined) {
      fetchEmployeeData();
    }
  }, [employeeIndex]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {error ? (
            <div>{error}</div>
          ) : (
            <div>
              <h2>Employee Detail</h2>
              <div>
                <img src={employee.imageUrl} alt="person"  />
                <div>
                  <h4>{employee.name}</h4>
                  <p>Occupation: {employee.occupation}</p>
                  <p>Cell Office: {employee.cellOffice}</p>
                  <p>Cell Mobile: {employee.cellMobile}</p>
                  <p>SMS: {employee.sms}</p>
                  <p>Email: {employee.email}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default EmployeeDetail;
