import React, {useState, useEffect} from 'react';
import styles from '@/styles/Client.module.scss';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Link from "next/link";
import {CLIENT, CLIENTS} from "@/commons/router";
import {Icon} from '@iconify/react';
import customTableStyles from '@/styles/CustomTable.module.scss'
import Button from '@mui/material/Button';
import {useRouter} from 'next/router'
import {connect} from "react-redux";
import {fetchClientUsersWithPagination} from "@/redux/actions/clientsAction";
import Pagination from '@mui/material/Pagination';
import {CLIENT_USERS_LIMIT} from "@/commons/constants";
import Chip from "@mui/material/Chip";
import {checkUserEmail} from "@/commons/helpers";

const Client = (props) => {
    const router = useRouter()
    const domain = router.query.domain
    const {clientUsers, fetchClientUsersWithPagination} = props;

    const [selectedClientUsers, setSelectedClientUsers] = useState("");
    const [selectedPage, setSelectedPage] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [maxPage, setMaxPage] = useState("");
    useEffect(() => {
        if (domain) {
            fetchClientUsersWithPagination(domain, pageNumber);
        }
    }, [domain]);

    useEffect(() => {
        if (clientUsers[domain]) {
            changeSelectedPage();
        }
    }, [clientUsers]);

    useEffect(() => {
        if (clientUsers[domain]?.[pageNumber]) {
            changeSelectedPage();
        }
        else {
            if (domain) {
                fetchClientUsersWithPagination(domain, pageNumber);
            }
        }
    }, [pageNumber, domain]);

    const changeSelectedPage = () => {
        const selectedUsers = clientUsers[domain];
        setSelectedClientUsers(selectedUsers)
        setSelectedPage(selectedUsers[pageNumber]);

        if (!maxPage) {
            setMaxPage(Math.ceil(selectedUsers[pageNumber].total / CLIENT_USERS_LIMIT))
        }
    };

    const changePageNumber = (event, value) => {
        setPageNumber(value);
    };

    return (
        <>
            {
                selectedClientUsers ?
                    <div className={styles.client}>
                        <div className="content-wrapper">
                            <div className="header">
                                <div className="left">
                                    <div className="client">{domain}</div>
                                </div>
                                <div className="right">
                                    <Link href={CLIENTS}><Button variant="outlined" className="back">Back to clients</Button></Link>
                                    <Button variant="outlined" className="config"><Icon icon="mdi:gear"/></Button>
                                </div>
                            </div>
                            <div className="content">
                                <TableContainer component={Paper} className={customTableStyles.customTable}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="left">E-mail</TableCell>
                                                <TableCell align="center">Manage</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                selectedPage?.results.map((user, key) => (
                                                    <TableRow hover key={key}>
                                                        <TableCell align="left">{checkUserEmail(user.email)} <Chip label={user._id} size={"small"} color="primary"/></TableCell>
                                                        <TableCell className="manage">
                                                            <Link href={`${CLIENT}/${domain}/user/${user._id}`}><span><Icon icon="material-symbols:dashboard"/></span></Link>
                                                        </TableCell>
                                                    </TableRow>
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                            {
                                maxPage ?
                                    <div className="paginate">
                                        <Pagination count={maxPage} page={pageNumber} onChange={changePageNumber}/>
                                    </div>
                                    : ""
                            }
                        </div>
                    </div>
                    :
                    "Yükleniyor.."
            }
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        clientUsers: state.clientsReducer.clientUsers,
    }
}

const mapDispatchToProps = {
    fetchClientUsersWithPagination
};

export default connect(mapStateToProps, mapDispatchToProps)(Client);
