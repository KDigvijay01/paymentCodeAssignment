import React,{ useState } from 'react';
import {Avatar,Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@material-ui/core';
import { Navigate, useHistory, NavLink } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import App from '../App'







function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();





export default function Login(props) {




    const user=props.user;
    const setUser= props.setUser;

    const [flag, setFlag]=useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
        name:data.get('name'),
        email: data.get('email'),
        password: data.get('password'),
        });

        console.log("here in handleSubmit")
        setUser({ ...user, emailError: false, passwordError: false, errorMessage: '' }); 
        if (validateForm()) {
          const { name, email, password } = user;
        //   console.log("validate form ",email)
            setFlag((flag)=>!flag)
            

        
        }


    };



    const validateForm = () => {
        const { name, email, password } = user;

        let emailErr = false, passWordErr = false, nameErr= false;
        if (!email || !/\S+@\S+\.\S+/img.test(email)) {      
          emailErr = true;
        }
        setUser({ ...user, emailError: emailErr });
        
        if (!name || name.trim().length < 3) {      
            nameErr = true;
          }
          setUser({ ...user, nameError: nameErr });

        if (!password || password.length < 8) {      
          passWordErr = true;
        }
        setUser({ ...user, emailError: emailErr, passwordError: passWordErr, nameError: nameErr });
        return (!emailErr && !passWordErr && !nameErr);
      };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
            variant='outlined'
            margin="normal"
            required
            fullWidth
            id="email"
            label="Name"
            name="name"
            value={user.name}
            onChange={(e)=>props.setUserData(e)}
            autoComplete='off'
            error={user.nameError}
            helperText={user.nameError ? 'invalid-name' : ''}


            />
            <TextField
             variant='outlined'
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={user.email}
              onChange={(e)=>props.setUserData(e)}
              autoFocus
              autoComplete='off'
              error={user.emailError}
              helperText={user.emailError ? 'invalid-email' : ''}
              
            />
            <TextField
              margin="normal"
              variant='outlined'
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e)=>props.setUserData(e)}
              value={user.password}
              autoComplete="current-password"
              error={user.passwordError}
              helperText={user.passwordError ? 'invalid-password' : ''}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >
            Submit
            </Button>
            
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />

        <NavLink className="nav-link" to={flag ? "/" : ''}> 
            {flag ? (
               <Typography variant='h5' style={{color: 'green', border:'2px solid black', backgroundColor:'orange'}}> Go to Payment Page </Typography>
            ): null}
        </NavLink>
      </Container>
    </ThemeProvider>
  );
}

