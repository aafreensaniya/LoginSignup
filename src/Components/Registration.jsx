import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Alert,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { Registerschema } from "../Validation/YupValidation";
import axios from "axios"; // now we are doing authentication
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    username: "",
  };
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: Registerschema,
    onSubmit: async (values) => {
      const result = await axios.post("http://localhost:2525/adduser", values);
      setMsg(result.data);
    },
  });

  console.log("Errors", errors);
  useEffect(() => {
    if (msg !== "") {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [msg]);
  return (
    <form onSubmit={handleSubmit}>
      <React.Fragment>
        <Card style={{ width: "400px", marginLeft: "35%", marginTop: "40px" }}>
          <CardContent>
            <Grid container spacing={1} align="center">
              <Grid item xs={12}>
                <h2> Employee Registration</h2>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  value={values.name}
                  type="text"
                  label="enter name"
                  fullWidth
                  onChange={handleChange}
                />
                <p style={{ color: "red" }}>{errors.name}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  value={values.email}
                  type="email"
                  label="email"
                  fullWidth
                  onChange={handleChange}
                />
                <p style={{ color: "red" }}>{errors.email}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="mobile"
                  onChange={handleChange}
                  value={values.mobile}
                  type="number"
                  label="Mobile"
                  fullWidth
                />
                <p style={{ color: "red" }}>{errors.mobile}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  onChange={handleChange}
                  value={values.username}
                  variant="outlined"
                  type="text"
                  label="enter username"
                  fullWidth
                />
                <p style={{ color: "red" }}>{errors.username}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  variant="outlined"
                  type="password"
                  label="Password"
                  fullWidth
                />
                <p style={{ color: "red" }}>{errors.password}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  name="confirmPassword"
                  value={values.confirmPassword}
                  variant="outlined"
                  type="password"
                  label=" ConfirmPassword"
                  fullWidth
                />
                <p style={{ color: "red" }}>{errors.confirmPassword}</p>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit" fullWidth>
                  SignUp
                </Button>
              </Grid>
              <Grid item xs={12}>
                {msg !== "" && <Alert severity="success">{msg}</Alert>}
              </Grid>
              <Grid item xs={12}>
                Already have an account?
                <span>
                  <Link to="/"> Login Here</Link>
                </span>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </React.Fragment>
    </form>
  );
};
