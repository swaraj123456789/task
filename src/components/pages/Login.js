
import {
    Avatar,
    Button,
    Grid,
    Link,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import './Login.css';
import React, { useState, useContext } from "react";

import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        username: "",
        password: "",
    });
    const [hasError, setHasError] = useState();

    const [wrongCredentials, setwrongCredentials] = useState();

    const handleChange = (e) => {
        setUserDetails((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleLogin = (e) => {

        e.preventDefault();
        if (userDetails.username === "" || userDetails.password === "") {
            setHasError("All filled are Mandatory")
            setTimeout(() => {
                setHasError("");
            }, 3000);

            return;
        } else {
            navigate("/userData"); 
            
        }
    }

    return (


        <Grid className='container-fluid'>
            <Grid className='row'>

                <h2>Login</h2>
            </Grid>
            <form>
                <Grid >
                    <TextField
                        label="username"
                        placeholder=" Enter username"
                        variant='filled'
                        onChange={handleChange}
                        name="username"
                        value={userDetails.username}
                        fullWidth required />
                </Grid>
                <Grid >
                    <TextField
                        className='mt-2'
                        label="Password"
                        placeholder=" Enter password"
                        variant='filled'
                        type="password"
                        onChange={handleChange}
                        name="password"
                        value={userDetails.password}
                        fullWidth required />
                </Grid>
                <p style={{ color: "red", fontSize: '15px' }}>{wrongCredentials}</p>
                <p style={{ color: "red", fontSize: '15px' }}>{hasError}</p>
                <Button
                    className='mt-2'
                    style={{
                        backgroundColor: "OrangeRed",
                    }}
                    onClick={handleLogin}
                    variant="contained"
                    fullWidth> The Chef Lane </Button>
            </form>
            <Typography className='mt-2'>
                <Link href="/forgetPassword"
                >
                    <h5> Forgot password ?</h5>
                </Link>
            </Typography>


        </Grid>

    )
}

export default Login;