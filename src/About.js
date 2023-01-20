import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function About() {
  const [userForm, setUserForm] = useState({
    product_name: "union",
    price: "",
    quantity: "",
    tax: "",
  });

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
  let formData = JSON.parse(localStorage.getItem("userData"));
  const [product, setProduct] = useState(formData);

  const selectProduct = (event) => {
    console.log(event.target.value);
    const newItem = product.filter((newVal) => {
      return newVal.product_name === event.target.value;
    });
  };
  return (
    <div>
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
            <StyledTableRow key={userForm.product_name}>
              <StyledTableCell>
                <FormControl variant="standard" sx={{ minWidth: 100 }}>
                  <InputLabel>Product</InputLabel>
                  <Select onChange={selectProduct}>
                    {formData.map((item) => (
                      <MenuItem value={item.product_name}>
                        {item.product_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </StyledTableCell>

              <StyledTableCell>{userForm.price}</StyledTableCell>
              <StyledTableCell>{userForm.quantity}</StyledTableCell>
              <StyledTableCell> {userForm.tax}</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default About;
