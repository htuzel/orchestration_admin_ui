import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {setApiToken} from "@/redux/actions/authAction";
import {getCookie} from "@/commons/helpers";
import {API_TOKEN_NAME} from "@/commons/constants";
import {useDispatch} from 'react-redux';
import {useRouter} from "next/router";
import {DASHBOARD} from "@/commons/router";

const ProtectedLayout = (props) => {
    const router = useRouter()
    const dispatch = useDispatch();
    const {children, setApiToken} = props;

    useEffect(() => {
        console.log("bidefa")
        const apiToken = getCookie(API_TOKEN_NAME);
        if (apiToken) {
            dispatch(setApiToken(apiToken));
        }
    }, []);

    console.log(props.apiToken)
    return (
        <>
            <button onClick={() => router.push("test")}>test</button>
            {children}
        </>
    )
}

const mapStateToProps = (state => ({
    apiToken: state.userReducer.apiToken
}));

const mapDispatchToProps = {
    setApiToken
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedLayout);
