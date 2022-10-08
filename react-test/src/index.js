
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import movies from "./data.json";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "./styles.css";

function App() {
  const [tableRowsData, setTableRowsData] = useState(movies);

  const searchTags = async (e) => {
    var searchData = movies.filter((item) => {
      if (
        item.genres
          .toString()
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        return item;
      }
    });
    setTableRowsData(searchData);
  };
  const conditionalRowStyles = [
    {
      when: row => row.difficulty === 'Easy',
      style: {
        // backgroundColor: 'green',
        color: 'green',
        // backgroundColor: 'orange' 
      },
    },
  ];
  
  

  const headerResponsive = [
    {
      name:"Number",
      selector: "id",
      sortable: true
    },
    {
      name:"Title",
      selector: "title",
      sortable: true
    },
    {
      name: "Difficulty ",
      selector: "difficulty",
      sortable: true
    },
    {
      name: "Language",
      selector: "language",
      sortable: true,
      // right: true
    }
    ,
    {
      name: "Git Link",
      selector: "git",
      sortable: false,
      // right: true
    }
    ,
    {
      name: (
        <div>
          Tags
          <input type="text" onChange={searchTags} style={{ width: "80%" }} />
        </div>
      ),
      selector: "tags",
      sortable: true,
      // right: true
    }
  ];

  useEffect(() => {}, [tableRowsData]);

  return (
    <DataTable
      title="Movies"
      columns={headerResponsive}
      data={tableRowsData}
      defaultSortField="title"
      sortIcon={<SortIcon />}
      // pagination
      // conditionalRowStyles={conditionalRowStyles}
      selectableRows
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
