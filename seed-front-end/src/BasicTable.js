import React from "react";
import { useTable } from "react-table";
import BackEnd from "./dataMongoDB.js";
function BasicTable() {
  // const columnHeaders = ['Title', 'Author', 'SE Method', 'Research Method', 'Journal', 'Article', 'Publish Date', 'Year', 'Moderated', 'Date Published'];
  // const columnNames = ['col1', 'col2', 'col3', 'col4', 'col5', 'col6', 'col7', 'col8', 'col9', 'col10'];
  const d = require("./dataMongoDB.js");
  // var tmpMonderated = [];
  // for (var i = 0; i < d.dataDB.moderated.length; i++)
  // {
  //   if (!d.dataDB.moderated[i])
  //   {
  //     tmpMonderated[i].push("false");
  //   }
  //   else
  //   {
  //     tmpMonderated[i].push("true");
  //   }
  // }
  // d.dataDB.moderated = tmpMonderated;
  // var a = require("./GetDataFromBackEnd.js");
  // var tmpData = [d.dataDB.title, d.dataDB.author, d.dataDB.seMethods, d.dataDB.researchMethod, d.dataDB.journal, d.dataDB.article, d.dataDB.publishDate, d.dataDB.year, d.dataDB.moderated, d.dataDB.datePublished];
  // const tmpColumn = {c1: [], c2: [], c3: [], c4: [], c5: [], c6: [],};
  // for(var index = 0; index < 10; index++)
  // {
  //   for (var innerIndex = 0; innerIndex < tmpColumn.length; innerIndex++)
  //   {
  //     tmpColumn[innerIndex] = tmpData[index];
  //   }
  // }
  const data = React.useMemo(
    () => [
      {
        // col1: 'Hello',// title, author, se method, research method, journal, article, publish date, year, moderated, date published

        // col2: 'World',
        // col1: 'r1c1',//testing
        col1: d.dataDB.title[0],
        col2: d.dataDB.author[0],
        col3: d.dataDB.seMethods[0],
        col4: d.dataDB.researchMethod[0],
        col5: d.dataDB.journal[0],
        col6: d.dataDB.article[0],
        col8: d.dataDB.year[0],
        // col9: d.dataDB.moderated[0],
      },

      {
        col1: d.dataDB.title[1],
        col2: d.dataDB.author[1],
        col3: d.dataDB.seMethods[1],
        col4: d.dataDB.researchMethod[1],
        col5: d.dataDB.journal[1],
        col6: d.dataDB.article[1],
        col8: d.dataDB.year[1],
        // col9: d.dataDB.moderated[1],
      },

      {
        col1: d.dataDB.title[2],
        col2: d.dataDB.author[2],
        col3: d.dataDB.seMethods[2],
        col4: d.dataDB.researchMethod[2],
        col5: d.dataDB.journal[2],
        col6: d.dataDB.article[2],
        col7: d.dataDB.datePublished[2],
        col8: d.dataDB.year[2],
        // col9: d.dataDB.moderated[2],
      },

      {
        col1: d.dataDB.title[3],
        col2: d.dataDB.author[3],
        col3: d.dataDB.seMethods[3],
        col4: d.dataDB.researchMethod[3],
        col5: d.dataDB.journal[3],
        col6: d.dataDB.article[3],
        col7: d.dataDB.datePublished[3],
        col8: d.dataDB.year[3],
        // col9: d.dataDB.moderated[2],
      },

      {
        col1: d.dataDB.title[4],
        col2: d.dataDB.author[4],
        col3: d.dataDB.seMethods[4],
        col4: d.dataDB.researchMethod[4],
        col5: d.dataDB.journal[4],
        col6: d.dataDB.article[4],
        col7: d.dataDB.datePublished[4],
        col8: d.dataDB.year[4],
        // col9: d.dataDB.moderated[2],
      },

      {
        col1: d.dataDB.title[5],
        col2: d.dataDB.author[5],
        col3: d.dataDB.seMethods[5],
        col4: d.dataDB.researchMethod[5],
        col5: d.dataDB.journal[5],
        col6: d.dataDB.article[5],
        col7: d.dataDB.datePublished[5],
        col8: d.dataDB.year[5],
        // col9: d.dataDB.moderated[2],
      },

      {
        col1: d.dataDB.title[6],
        col2: d.dataDB.author[6],
        col3: d.dataDB.seMethods[6],
        col4: d.dataDB.researchMethod[6],
        col5: d.dataDB.journal[6],
        col6: d.dataDB.article[6],
        col7: d.dataDB.datePublished[6],
        col8: d.dataDB.year[6],
        // col9: d.dataDB.moderated[2],
      },

      {
        col1: d.dataDB.title[7],
        col2: d.dataDB.author[7],
        col3: d.dataDB.seMethods[7],
        col4: d.dataDB.researchMethod[7],
        col5: d.dataDB.journal[7],
        col6: d.dataDB.article[7],
        col7: d.dataDB.datePublished[7],
        col8: d.dataDB.year[7],
        // col9: d.dataDB.moderated[2],
      },

      {
        col1: d.dataDB.title[8],
        col2: d.dataDB.author[8],
        col3: d.dataDB.seMethods[8],
        col4: d.dataDB.researchMethod[8],
        col5: d.dataDB.journal[8],
        col6: d.dataDB.article[8],
        col7: d.dataDB.datePublished[8],
        col8: d.dataDB.year[8],
        // col9: d.dataDB.moderated[2],
      },

      {
        col1: d.dataDB.title[9],
        col2: d.dataDB.author[9],
        col3: d.dataDB.seMethods[9],
        col4: d.dataDB.researchMethod[9],
        col5: d.dataDB.journal[9],
        col6: d.dataDB.article[9],
        col7: d.dataDB.datePublished[9],
        col8: d.dataDB.year[9],
        // col9: d.dataDB.moderated[2],
      },

      {
        col1: d.dataDB.title[10],
        col2: d.dataDB.author[10],
        col3: d.dataDB.seMethods[10],
        col4: d.dataDB.researchMethod[10],
        col5: d.dataDB.journal[10],
        col6: d.dataDB.article[10],
        col7: d.dataDB.datePublished[10],
        col8: d.dataDB.year[10],
        // col9: d.dataDB.moderated[2],
      },

      {
        col1: d.dataDB.title[11],
        col2: d.dataDB.author[11],
        col3: d.dataDB.seMethods[11],
        col4: d.dataDB.researchMethod[11],
        col5: d.dataDB.journal[11],
        col6: d.dataDB.article[11],
        col7: d.dataDB.datePublished[11],
        col8: d.dataDB.year[11],
        // col9: d.dataDB.moderated[2],
      },
      {
        col1: d.dataDB.title[12],
        col2: d.dataDB.author[12],
        col3: d.dataDB.seMethods[12],
        col4: d.dataDB.researchMethod[12],
        col5: d.dataDB.journal[12],
        col6: d.dataDB.article[12],
        col7: d.dataDB.datePublished[12],
        col8: d.dataDB.year[12],
        // col9: d.dataDB.moderated[2],
      },

      {
        col1: d.dataDB.title[13],
        col2: d.dataDB.author[13],
        col3: d.dataDB.seMethods[13],
        col4: d.dataDB.researchMethod[13],
        col5: d.dataDB.journal[13],
        col6: d.dataDB.article[13],
        col7: d.dataDB.datePublished[13],
        col8: d.dataDB.year[13],
        // col9: d.dataDB.moderated[2],
      },

      {
        col1: d.dataDB.title[14],
        col2: d.dataDB.author[14],
        col3: d.dataDB.seMethods[14],
        col4: d.dataDB.researchMethod[14],
        col5: d.dataDB.journal[14],
        col6: d.dataDB.article[14],
        col7: d.dataDB.datePublished[14],
        col8: d.dataDB.year[14],
        // col9: d.dataDB.moderated[2],
      },
    ],

    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Title",

        accessor: "col1", // accessor is the "key" in the data
        // accessor: tmpColumn[0],
      },

      {
        Header: "Author",

        accessor: "col2",
      },

      {
        Header: "SE Methods",

        accessor: "col3",
      },

      {
        Header: "Research Method",

        accessor: "col4",
      },

      {
        Header: "Journal",

        accessor: "col5",
      },

      {
        Header: "Article",

        accessor: "col6",
      },

      {
        Header: "Publish Date",

        accessor: "col7",
      },

      {
        Header: "Year",

        accessor: "col8",
      },

      {
        Header: "Moderated",

        accessor: "col9",
      },

      {
        Header: "Date Published",

        accessor: "col10",
      },
    ],

    []
  );

  const {
    getTableProps,

    getTableBodyProps,

    headerGroups,

    rows,

    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",

                  background: "aliceblue",

                  color: "black",

                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",

                      border: "solid 1px gray",

                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default BasicTable;
