import React from "react";

function Table() {
  return (
    <div className="Table">
      <header className="Table-header">
        <p>table heading</p>
      </header>
    </div>
  );
}

function makeTable() {
  return (
    <div className="Table-Table">
      <table>
        <tbody>
          <tr>
            <th>SE Method</th>
            <th>Author</th>
          </tr>

          <tr>
            <td>TDD</td>
            <td>Josh Stroud</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  //return "a";
}

export { Table, makeTable };
