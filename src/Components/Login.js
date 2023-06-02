import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { login } from "../Api/index";
import { Navigate, Link} from "react-router-dom";

export default function Login() {

  const [email, setemail] = useState(false);
  const [pass, setpass] = useState(false);
  const [redirect, setredirect] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login({
      email: data.get("email"),
      password: data.get("password"),
    })
      .then((res) => {
        console.log(res);
        if(res.err)
        console.log(res?.err?.message)
        else
        {setredirect(true)}
        // if(data.role=="client")
      })
  };

  const handleChange = (e) => {
    if(e.target.name==="email" && e.target.value.length>0)
    {
      setemail(true);
    }
    else if(e.target.name==="email") setemail(false);

    if(e.target.name==="password" && e.target.value.length>0)
    {
      setpass(true);
    }
    else if(e.target.name==="password") setpass(false);
  }

  return (<>
    <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component="nav">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { sm: 'block', textAlign: 'left' } }}
                        >
                            Coding Platform
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <br />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} onChange={handleChange}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={!email || !pass}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link to="/forgotpassword" variant="body2">
                {"Forgot password?"}
              </Link> */}
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {redirect && (
        <Navigate to={`/`} replace={true} />
      )}
    </Container></>
  );
}