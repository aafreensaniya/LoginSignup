import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const ForgotPassWord = () => {
  return (
    <React.Fragment>
      <Card style={{width:"300px",marginTop:"80px",marginLeft:"35%"}}>
        <CardContent>
          <Grid container spacing={2} align="center">
            <Grid item xs={12}>
              <h1>Forgot Password</h1>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                type="email"
                label="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                type="text"
                label="username"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained"> Reset Password</Button>
            </Grid>
            <Grid item xs={12}>
                <strong><Link to="/">Back To Login</Link></strong>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
