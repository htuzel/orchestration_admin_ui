import React from 'react';
import styles from '@/styles/Client.module.scss';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Link from "next/link";
import {CLIENT, MERCHANTS} from "@/commons/router";
import {Icon} from '@iconify/react';
import customTableStyles from '@/styles/CustomTable.module.scss'
import Button from '@mui/material/Button';

const Client = () => {
    return (
        <div className={styles.client}>
            <div className="content-wrapper">
                <div className="header">
                    <div className="left">
                        <div className="client">Turacoon.com</div>
                    </div>
                    <div className="right">
                        <Button variant="outlined" className="back">Back to merchants</Button>
                        <Button variant="outlined" className="config"><Icon icon="mdi:gear"/></Button>
                    </div>
                </div>
                <div className="content">
                    <TableContainer component={Paper} className={customTableStyles.customTable}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Users</TableCell>
                                    <TableCell align="center">Sessions</TableCell>
                                    <TableCell align="center">Pageviews</TableCell>
                                    <TableCell align="center">Events</TableCell>
                                    <TableCell align="center">Major Events</TableCell>
                                    <TableCell align="center">Manage</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center" className="manage">
                                        <Link href={`${MERCHANTS}${CLIENT}/$client && client._id`}><span><Icon icon="material-symbols:dashboard"/></span></Link>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
};

export default Client;
