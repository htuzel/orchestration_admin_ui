import React, {useState} from 'react';
import Button from '@mui/material/Button';
import styles from '@/styles/Login.module.scss';
import TextField from '@mui/material/TextField';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        
    }

    return (
        <div className={styles.login}>
            <div className="content">
                <div className="logo"><img src="https://flalingo.com/cdn-cgi/image/f=auto,width=550,quality=90/img/new_home/responsive_img/logo_withouth_motto_w_1400.webp"/></div>
                <div className="form">
                    <TextField required label="Username" onChange={(e) => {
                        setUsername(e.target.value)
                    }}/>
                    <TextField required label="Password" type={"password"} onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                    <Button variant="contained" size={"large"} onClick={() => handleLogin()}>Login</Button>
                    <p className="forgot-password">Forgot Password?</p>
                </div>
                <div className="other"></div>
                <div className="no-account">Don't have an account? <a href="#">Sign Up</a></div>
            </div>
        </div>
    );
};

export default Login;
