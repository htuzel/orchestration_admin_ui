import styles from './Clients.module.scss'
import customTableStyles from '@/styles/CustomTable.module.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {connect} from "react-redux";
import PageTabs from "@/components/page-tabs/pageTabs";
import {Icon} from '@iconify/react';
import Link from 'next/link'
import {CLIENT} from "@/commons/router";
import {LinearProgress} from '@mui/material';

const Clients = (props) => {
    const {allClients} = props;
    return (
        <>
            <PageTabs test={"engin"}/>
            {
                Object.keys(allClients).length > 0
                    ?
                    <main className={styles.clients}>
                        <div className="content-wrapper">
                            <div className="content">
                                <div className="client">
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
                                                    allClients.map((client, key) => (
                                                        <TableRow hover key={key}>
                                                            <TableCell component="th" scope="row">
                                                                <Link href={`${CLIENT}/${client._id}`}>{client._id}</Link>
                                                            </TableCell>
                                                            <TableCell align="center">{client?.userCount || 0}</TableCell>
                                                            <TableCell align="center">{client?.sessionCount || 0}</TableCell>
                                                            <TableCell align="center">{client?.pageviewCount || 0}</TableCell>
                                                            <TableCell align="center">{client?.eventCount || 0}</TableCell>
                                                            <TableCell align="center">0</TableCell>
                                                            <TableCell align="center" className="manage">
                                                                <span><Icon icon="mdi:gear"/></span>
                                                                {/*<Link href={`${CLIENT}/${client && client._id}/dashboard`}><span><Icon icon="material-symbols:dashboard"/></span></Link>*/}
                                                                <span><Icon icon="material-symbols:dashboard"/></span>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                        </div>
                    </main>

                    : <LinearProgress/>
            }
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        allClients: state.clientsReducer.allClients,
    }
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
