import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getCustomers } from "../../data/customerData";
import { Link } from "react-router-dom";

export default function CustomersList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((cust) => (
          <tr key={`customer-${cust.id}`}>
            <th scope="row">{cust.id}</th>
            <td>{cust.name}</td>
            <td>{cust.address}</td>
            <td>
              <Link to={`${cust.id}`}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
