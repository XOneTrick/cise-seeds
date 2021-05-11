import React from "react";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const tableHeader = [
  {
    id: "Method",
    color: "secondary",
    align: "center",
    //disablePadding: true,
    label: "method",
  },
  {
    id: "Title",
    color: "secondary",
    align: "center",
    label: "title",
  },
  {
    id: "Author",
    color: "secondary",
    aligh: "center",
    label: "author",
  },
];

function ArticleTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {tableHeader.map((tableHeader) => (
          <TableCell
            key={tableHeader.id}
            align={tableHeader.align}
            padding={tableHeader.disablePadding ? "none" : "default"}
            sortDirection={orderBy === tableHeader.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === tableHeader.id}
              direction={orderBy === tableHeader.id ? order : "ascd"}
              onClick={createSortHandler(tableHeader.id)}
            >
              <Typography color={tableHeader.color}>
                {tableHeader.label}
              </Typography>
              {orderBy === tableHeader.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "descd" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default BasicTable;
