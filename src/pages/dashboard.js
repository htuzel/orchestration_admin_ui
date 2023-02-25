import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Navbar from "@/components/navbar/navbar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {connect} from "react-redux";

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Dashboard = (props) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                {/*<link rel="preconnect" href="https://fonts.googleapis.com"/>*/}
                {/*<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}/>*/}
                {/*<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>*/}

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>

            </Head>
            <main className={styles.main}>
                <Navbar/>
                <div className="merchants">
                    <div className="content-wrapper">
                        <div className="top">
                            <div className="title">Merchants</div>
                        </div>
                        <div className="content">
                            <div className="merchant">
                                <TableContainer component={Paper}>
                                    <Table sx={{minWidth: 650}} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Client</TableCell>
                                                <TableCell align="center">Users</TableCell>
                                                <TableCell align="center">Sessions</TableCell>
                                                <TableCell align="center">Pageviews</TableCell>
                                                <TableCell align="center">Events</TableCell>
                                                <TableCell align="center">Major Events</TableCell>
                                                <TableCell align="center">Gear Icon</TableCell>
                                                <TableCell align="center">Dashboard</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow hover>
                                                <TableCell component="th" scope="row">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                            </TableRow>
                                            <TableRow hover>
                                                <TableCell component="th" scope="row">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                            </TableRow>
                                            <TableRow hover>
                                                <TableCell component="th" scope="row">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                            </TableRow>
                                            <TableRow hover>
                                                <TableCell component="th" scope="row">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                                <TableCell align="center">Test</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

const mapStateToProps = (state => ({
    user:state.userReducer.user
}));

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);