import React from 'react'
import EmployeeListItem from '../EmployeeListItem/EmployeeListItem'

function EmployeeList(props) {
  return <EmployeeListItem employeeData={props.employeeData} />
}

export default EmployeeList
   