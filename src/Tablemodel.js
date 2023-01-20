import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function Tablemodel(props) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      height: 5,
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">product name</StyledTableCell>
              <StyledTableCell align="left">price</StyledTableCell>
              <StyledTableCell align="left">quantity</StyledTableCell>
              <StyledTableCell align="left">tax(%)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.userList?.map((arr, index) => {
              return (
                <StyledTableRow key={index}>
                  <StyledTableCell>{arr.product_name}</StyledTableCell>

                  <StyledTableCell>{arr.price}</StyledTableCell>

                  <StyledTableCell>{arr.quantity}</StyledTableCell>
                  <StyledTableCell> {arr.tax}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default Tablemodel;
