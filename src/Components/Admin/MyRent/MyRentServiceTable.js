import React, { useState } from "react";
import { Form } from "react-bootstrap";

const MyRentServiceTable = ({ singleOrder }) => {
  // console.log(singleOrder._id)
  // const [pending, setPending] = useState(singleOrder.status?.toLowerCase() === 'pending');
  // console.log(pending);

  const [status, setStatus] = useState(singleOrder.status.toLowerCase());

  const onChangeStatusHandler = (e) => {
    setStatus(e.target.value.toLowerCase());
    fetch("https://aqueous-mountain-26751.herokuapp.com/update-status", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: e.target.value,
        id: singleOrder._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <tbody>
      <tr>
        <td scope="row"> {singleOrder.name} </td>
        <td> {singleOrder.email} </td>
        <td> {singleOrder.selectedServiceName} </td>
      </tr>
    </tbody>
  );
};

export default MyRentServiceTable;
