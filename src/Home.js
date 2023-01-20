import React from "react";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Formmodel from "./Formmodel";
import Tablemodel from "./Tablemodel";

function Home() {
  let formData = JSON.parse(localStorage.getItem('userData'))
  const [userList, setUserList] = useState(formData || []);
  const [userForm, setUserForm] = useState({
    product_name: "",
    price: "",
    quantity: "",
    tax: "",
  })

  function submitForm(value){
    setUserList([...userList,value])
  }

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userList))
  },[userList]);

  return (
    <Grid container>
      <Grid item lg={6} md={6} xs={6}>
        <Tablemodel userList={userList} />
      </Grid>
      <Grid item lg={6} md={6} xs={6}>
        <Formmodel
          userList={userList}
          userForm={userForm}
          submitForm={submitForm}
        />
      </Grid>
    </Grid>
  );
}

export default Home;
