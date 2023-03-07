import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {setApiToken} from "@/redux/actions/authAction";
import {getCookie} from "@/commons/helpers";
import {API_TOKEN_NAME} from "@/commons/constants";
import Navbar from "@/components/navbar/navbar";
import Head from "next/head";
import {fetchMerchants} from "@/redux/actions/merchantsAction";
import LinearProgress from '@mui/material/LinearProgress';

const ProtectedLayout = (props) => {
    const {children, setApiToken, fetchMerchants} = props;
    const [load, setLoad] = useState(false);


    useEffect(() => {
        async function initApp() {
            const apiToken = getCookie(API_TOKEN_NAME);
            await setApiToken(apiToken);
            await fetchMerchants();
            await setLoad(true);
        }
        initApp()
    }, []);

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>

            </Head>
            {
                load
                    ?
                    <>
                        <Navbar/>
                        {children}
                    </>
                    :
                    <LinearProgress/>
            }
        </>
    )
}

const mapStateToProps = (state => ({
    apiToken: state.userReducer.apiToken,
    merchants: state.merchantsReducer.merchants,
}));

const mapDispatchToProps = {
    setApiToken,
    fetchMerchants
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedLayout);
