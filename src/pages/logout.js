import React, {useEffect} from 'react';
import {deleteCookie} from "@/commons/helpers";
import {API_TOKEN_NAME} from "@/commons/constants";
import {useRouter} from "next/router";
import {LOGOUT} from "@/commons/router";
import LinearProgress from "@mui/material/LinearProgress";

const Logout = () => {
    const router = useRouter()

    useEffect(() => {
        deleteCookie(API_TOKEN_NAME);
        router.push(LOGOUT)
    }, []);


    return (
        <LinearProgress/>
    )

};
Logout.getLayout = (page) => <>{page}</>;

export default Logout;
