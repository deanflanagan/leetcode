import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";

import "./styles.css";

const columns = [
  {
    name: "Email",
    selector: "email",
    sortable: true
  },
  {
    name: "First Name",
    selector: "first_name",
    sortable: true
  },
  {
    name: "Last Name",
    selector: "last_name",
    sortable: true
  }
];

function App(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1&per_page=" + props.page)
      .then(res => res.json())
      .then(res => setData(res.data));
  }, []);

  return (
    <div className="App">
      <DataTable title="User List" columns={columns} data={data} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App page="10" />, rootElement);
