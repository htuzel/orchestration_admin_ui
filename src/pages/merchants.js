import {useEffect} from 'react';
import styles from '@/styles/Merchants.module.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {connect} from "react-redux";
import {fetchMerchants} from "@/redux/actions/merchantsAction";
import merchantsReducer from "@/redux/reducers/merchantsReducer";

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

const Merchants = (props) => {
    const {merchants} = props;
    useEffect(() => {
        props.fetchMerchants();
    }, []);
    console.log(merchants)

    return (
        <main className={styles.merchants}>
            <div className="content-wrapper">
                <div className="content">
                    {
                        Object.keys(merchants).length > 0 && merchants.map((merchant, key) => (
                            <div className="merchant" key={key}>
                                <div className="header">
                                    <h2>{merchant.email}</h2>
                                    <p><span>{merchant.clients.length}</span> sonuç listelendi</p>
                                </div>
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
                                            {
                                                merchant.clients.map((client, key) => (
                                                    <TableRow hover key={key}>
                                                        <TableCell component="th" scope="row">{client.domain}</TableCell>
                                                        <TableCell align="center">Test</TableCell>
                                                        <TableCell align="center">Test</TableCell>
                                                        <TableCell align="center">Test</TableCell>
                                                        <TableCell align="center">Test</TableCell>
                                                        <TableCell align="center">Test</TableCell>
                                                        <TableCell align="center">Test</TableCell>
                                                        <TableCell align="center">Test</TableCell>
                                                    </TableRow>
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        merchants: state.merchantsReducer.merchants,
    }
}

const mapDispatchToProps = {
    fetchMerchants
};

export default connect(mapStateToProps, mapDispatchToProps)(Merchants);
