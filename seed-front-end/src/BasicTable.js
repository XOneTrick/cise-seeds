import React from 'react'
import { useTable } from 'react-table'
import { dataDB } from "./dataMongoDB.js";
function BasicTable() {
  // const columnHeaders = ['Title', 'Author', 'SE Method', 'Research Method', 'Journal', 'Article', 'Publish Date', 'Year', 'Moderated', 'Date Published'];
  // const columnNames = ['col1', 'col2', 'col3', 'col4', 'col5', 'col6', 'col7', 'col8', 'col9', 'col10'];
  const d = require("./dataMongoDB.js");
  // var a = require("./GetDataFromBackEnd.js");
    const data = React.useMemo(
      
      () => [
 
        {
 
          // col1: 'Hello',// title, author, se method, research method, journal, article, publish date, year, moderated, date published
          
          // col2: 'World',
          // col1: 'r1c1',//testing
          col1: d.dataDB.title[0],
          col2: d.dataDB.author[0],
          // col3: d.dataDB.seMethods[0],
 
        },
 
        {
 
           col1: d.dataDB.title[1],
          col2: d.dataDB.author[1],
          // col3: d.dataDB.seMethods[1],
 
        },
 
        {
 
          col1: d.dataDB.title[2],
          col2: d.dataDB.author[2],
          // col3: d.dataDB.seMethods[2],
 
        },
 
      ],
 
      []
 
    )
 
      
    const columns = React.useMemo(
 
      () => [
 
        {
 
          Header: 'Title',
 
          accessor: 'col1', // accessor is the "key" in the data
 
        },
 
        {
 
          Header: 'Author',
 
          accessor: 'col2',
 
        },
        
        {
 
          Header: 'SE Methods',
 
          accessor: 'col3',
 
        },

        {
 
          Header: 'Research Method',
 
          accessor: 'col4',
 
        },

        {
 
          Header: 'Journal',
 
          accessor: 'col5',
 
        },

        {
 
          Header: 'Article',
 
          accessor: 'col6',
 
        },

        {
 
          Header: 'Publish Date',
 
          accessor: 'col7',
 
        },

        {
 
          Header: 'Year',
 
          accessor: 'col8',
 
        },

        {
 
          Header: 'Moderated',
 
          accessor: 'col9',
 
        },

        {
 
          Header: 'Date Published',
 
          accessor: 'col10',
 
        },

      ],
 
      []
 
    )
 
  
 
    const {
 
      getTableProps,
 
      getTableBodyProps,
 
      headerGroups,
 
      rows,
 
      prepareRow,
 
    } = useTable({ columns, data })
 
  
 
    return (
 
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
 
        <thead>
 
          {headerGroups.map(headerGroup => (
 
            <tr {...headerGroup.getHeaderGroupProps()}>
 
              {headerGroup.headers.map(column => (
 
                <th
 
                  {...column.getHeaderProps()}
 
                  style={{
 
                    borderBottom: 'solid 3px red',
 
                    background: 'aliceblue',
 
                    color: 'black',
 
                    fontWeight: 'bold',
 
                  }}
 
                >
 
                  {column.render('Header')}
 
                </th>
 
              ))}
 
            </tr>
 
          ))}
 
        </thead>
 
        <tbody {...getTableBodyProps()}>
 
          {rows.map(row => {
 
            prepareRow(row)
 
            return (
 
              <tr {...row.getRowProps()}>
 
                {row.cells.map(cell => {
 
                  return (
 
                    <td
 
                      {...cell.getCellProps()}
 
                      style={{
 
                        padding: '10px',
 
                        border: 'solid 1px gray',
 
                        background: 'papayawhip',
 
                      }}
 
                    >
 
                      {cell.render('Cell')}
 
                    </td>
 
                  )
 
                })}
 
              </tr>
 
            )
 
          })}
 
        </tbody>
 
      </table>
 
    )
 
  }

  export default BasicTable;