import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Button } from "@mui/material";

export const Home = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    !token && navigate("/");
  }, []);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={() => navigate("/")}
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={8}>
          <h1>home page</h1>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="error"
            fullWidth
            onClick={handleLogOut}
          >
            LogOut
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
