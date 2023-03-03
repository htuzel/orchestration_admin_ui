import {useEffect} from 'react';
import styles from '@/styles/Merchants.module.scss'
import customTableStyles from '@/styles/CustomTable.module.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {connect} from "react-redux";
import {fetchMerchants} from "@/redux/actions/merchantsAction";
import PageTabs from "@/components/page-tabs/pageTabs";
import {Icon} from '@iconify/react';
import Link from 'next/link'
import {MERCHANTS, CLIENT} from "@/commons/router";

const Merchants = (props) => {
    const {merchants} = props;

    return (
        <>
            <PageTabs/>
            <main className={styles.merchants}>
                <div className="content-wrapper">
                    <div className="content">
                        {
                            Object.keys(merchants).length > 0 ? merchants.map((merchant, key) => (
                                    <div className="merchant" key={key}>
                                        <div className="header">
                                            <h2>{merchant.email}</h2>
                                            <p><span>{merchant.clients.length}</span> sonuç listelendi</p>
                                        </div>
                                        <TableContainer component={Paper} className={customTableStyles.customTable}>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Client</TableCell>
                                                        <TableCell align="center">Users</TableCell>
                                                        <TableCell align="center">Sessions</TableCell>
                                                        <TableCell align="center">Pageviews</TableCell>
                                                        <TableCell align="center">Events</TableCell>
                                                        <TableCell align="center">Major Events</TableCell>
                                                        <TableCell align="center">Manage</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {
                                                        merchant.clients.map((client, key) => (
                                                            <TableRow hover key={key}>
                                                                <TableCell component="th" scope="row">
                                                                    <Link href={`${MERCHANTS}${CLIENT}/${client && client._id}`}>{client.domain}</Link>
                                                                </TableCell>
                                                                <TableCell align="center">{client.detail?.users}</TableCell>
                                                                <TableCell align="center">{client.detail?.sessions}</TableCell>
                                                                <TableCell align="center">{client.detail?.pageviews}</TableCell>
                                                                <TableCell align="center">{client.detail?.events}</TableCell>
                                                                <TableCell align="center">0</TableCell>
                                                                <TableCell align="center" className="manage">
                                                                    <span><Icon icon="mdi:gear"/></span>
                                                                    <Link href={`${MERCHANTS}${CLIENT}/${client && client._id}/dashboard`}><span><Icon icon="material-symbols:dashboard"/></span></Link>
                                                                </TableCell>
                                                            </TableRow>
                                                        ))
                                                    }
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </div>
                                ))
                                : "yükleniyor..."
                        }
                    </div>
                </div>
            </main>
        </>
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
