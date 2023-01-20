import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Box, FormLabel, Button } from "@mui/material";

function Formmodel(props) {
  const formik = useFormik({
    initialValues: {
      product_name: "",
      price: "",
      quantity: " ",
      tax: "",
    },

    validationSchema: Yup.object({
      product_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required(" product name is Required"),
      price: Yup.number().max(10000).required(" price is Required!"),
      quantity: Yup.number().max(100).required(" quantity is Required!"),
      tax: Yup.string()
        .matches(
          /(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/,
          "enter valid number"
        )
        .required("tax is required"),
    }),
    onSubmit: (values, action) => {
      props.submitForm(values);
      action.resetForm();
    },
  });

  return (
    <>
      <FormLabel>POS-FORM</FormLabel>
      <br></br>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        noValidate
        //  sx={{backgroundColor: 'lightblue'}}
        sx={{ color: "white", border: 2, fontStyle: "bold", margin: "dense" }}
      >
        <Box>
          <TextField
            id="filled-basic"
            label="enter product name"
            variant="filled"
            type="text"
            name="product_name"
            placeholder=""
            value={formik.values.product_name}
            onChange={formik.handleChange}
            autoFocus
            fullWidth
          />
          {formik.errors.product_name && formik.touched.product_name && (
            <p style={{ color: "red" }}>{formik.errors.product_name}</p>
          )}
        </Box>
        <Box>
          <TextField
            id="filled-basic"
            label="enter price"
            variant="filled"
            type="text"
            placeholder=""
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            autoFocus
            fullWidth
          />
          {formik.errors.price && formik.touched.price && (
            <p style={{ color: "red" }}>{formik.errors.price}</p>
          )}
        </Box>

        <Box>
          <TextField
            id="filled-basic"
            label="enter quantity"
            variant="filled"
            type="text"
            placeholder=""
            name="quantity"
            value={formik.values.quantity}
            onChange={formik.handleChange}
            autoFocus
            fullWidth
          />
          {formik.errors.quantity && formik.touched.quantity && (
            <p style={{ color: "red" }}>{formik.errors.quantity}</p>
          )}
        </Box>
        <Box>
          <TextField
            id="filled-basic"
            label="enter tax"
            variant="filled"
            type="text"
            placeholder=""
            name="tax"
            value={formik.values.tax}
            onChange={formik.handleChange}
            autoFocus
            fullWidth
          />
          {formik.errors.tax && formik.touched.tax && (
            <p style={{ color: "red" }}>{formik.errors.tax}</p>
          )}
          <Button type="button" onClick={formik.handleReset}>Reset</Button>
          <Button variant="contained" type="submit" fullWidth>
            Send
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Formmodel;



