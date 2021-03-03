import React from "react";
import Table from 'react-bootstrap/Table';

function TableForm(props) {
  return (
    <div className="tableHead">
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>DOB</th>
    </tr>
  </thead>
  {props.results.map(result => (
     <tbody>
     <tr>
       <td>{props.image}</td>
       <td>{props.name}</td>
       <td>{props.phone}</td>
       <td>{props.email}</td>
       <td>{props.dob}</td>
     </tr>
   </tbody>
  )
  )}
</Table>
    </div>
  );
}

export default TableForm;

