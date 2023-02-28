import React, {useState} from 'react';
import Button from '@mui/material/Button';
import styles from '@/styles/Login.module.scss';
import TextField from '@mui/material/TextField';
import {login} from "@/redux/actions/authAction";
import {connect} from "react-redux";
import {useRouter} from 'next/router'
import {DASHBOARD} from "@/commons/router";

const Login = (props) => {
    const router = useRouter()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleLogin = async () => {
        const loginResponse = await props.login(email, password);
        if (loginResponse) {
            router.push(DASHBOARD)
            setError(false);
        }
        else {
            setError(true);
        }
    }

    return (
        <div className={styles.login}>
            <div className="content">
                <div className="logo"><img src="https://flalingo.com/cdn-cgi/image/f=auto,width=550,quality=90/img/new_home/responsive_img/logo_withouth_motto_w_1400.webp"/></div>
                <div className="form">
                    <TextField required label="Username" onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
                    <TextField required label="Password" type={"password"} onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                    {error && <p className="error">Invalid email or password</p>}
                    <Button variant="contained" size={"large"} onClick={() => handleLogin()}>Login</Button>
                    <div className="forgot-password">Forgot Password?</div>
                </div>
                <div className="other"></div>
                <div className="no-account">Don't have an account? <a href="#">Sign Up</a></div>
            </div>
        </div>
    );
};

const mapStateToProps = (state => ({
}));

const mapDispatchToProps = {
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
