import {
  Alert,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Validation } from "../Validation/LoginValidation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:2525/login", values);
    if (result.data.msg === "ok") {
      navigate("/home");
    } else {
      setMsg(result.data.msg);
    }
    localStorage.setItem("token", result.data.token);
    setError(Validation(values));
    // console.log("error==>",error);
  };
  useEffect(()=>{
    const token=localStorage.getItem("token")
    
    token &&  navigate("/home")
    
  },[])
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Card style={{ width: "300px", marginLeft: "35%", marginTop: "80px" }}>
          <CardContent>
            <Grid container spacing={2} align="center">
              <Grid item xs={12}>
                <h2> Employee Login</h2>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  onChange={handleChange}
                  variant="outlined"
                  type="text"
                  label="enter email"
                  fullWidth
                />
                {error ? <p style={{ color: "red" }}>{error.email}</p> : ""}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  onChange={handleChange}
                  variant="outlined"
                  type="password"
                  label="Password"
                  fullWidth
                />
                {error ? <p style={{ color: "red" }}>{error.password}</p> : ""}
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                {msg !== "" && <Alert severity="error">{msg}</Alert>}
              </Grid>
              <Grid item xs={12}>
                Dont have an account?
                <Link
                  to="/regist"
                  style={{ marginLeft: "10px", textDecoration: "none" }}
                >
                  
                  SignUp Here
                </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </React.Fragment>
  );
};
