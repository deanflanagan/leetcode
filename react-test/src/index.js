
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import data from "./data.json";
import SortIcon from "@material-ui/icons/ArrowDownward";
import "./styles.css";

function App() {
  const [tableRowsData, setTableRowsData] = useState(data);

  const searchTags = async (e) => {
    var searchData = data.filter((item) => {
      if (
        item.tags
          .toString()
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        return item;
      }
    });
    setTableRowsData(searchData);
  };
 

  const headerResponsive = [
    {
      name:"Number",
      selector: "number",
    },
    {
      name:"Title",
      selector: "title",
    },
    {
      name: "Difficulty ",
      selector: "difficulty",
      sortable: true,
      conditionalCellStyles: [
        {
          when: row => row.difficulty === 'Easy',
          style: {
            backgroundColor: 'rgba(63, 195, 128, 0.9)',
            color: 'white',
            '&:hover': {
              cursor: 'pointer',
            },
          },
        },
        {
          when: row => row.difficulty === 'Medium',
          style: {
            backgroundColor: 'rgba(248, 148, 6, 0.9)',
            color: 'white',
            '&:hover': {
              cursor: 'pointer',
            },
          },
        },
        {
          when: row => row.difficulty === 'Tough',
          style: {
            backgroundColor: 'rgba(242, 38, 19, 0.9)',
            color: 'white',
            '&:hover': {
              cursor: 'not-allowed',
            },
          },
        },
      ],
    },
    {
      name: "Language",
      selector: "language",
      sortable: true,
    }
    ,
    {
      name: "Git Link",
      selector: "git",

      cell: row => (
        <a href={row.git} target="_blank" rel="noopener noreferrer">
          {row.title}
        </a>
      ),

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
    }
  ];

  useEffect(() => {}, [tableRowsData]);

  return (
    <DataTable
      title="Problems"
      columns={headerResponsive}
      data={tableRowsData}
      sortIcon={<SortIcon />}
      keyField='id'
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
