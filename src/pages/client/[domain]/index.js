import React, { useState, useEffect } from 'react';
import styles from '@/styles/Client.module.scss';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Link from "next/link";
import { CLIENT, CLIENTS } from "@/commons/router";
import { Icon } from '@iconify/react';
import customTableStyles from '@/styles/CustomTable.module.scss'
import Button from '@mui/material/Button';
import { useRouter } from 'next/router'
import { connect } from "react-redux";
import { fetchClientUsersWithPagination } from "@/redux/actions/clientsAction";
import Pagination from '@mui/material/Pagination';
import { CLIENT_USERS_LIMIT } from "@/commons/constants";
import Chip from "@mui/material/Chip";
import { LinearProgress } from '@mui/material';
import { checkUserEmail } from "@/commons/helpers";
import { FiFilter } from 'react-icons/fi';
import { fatureLıst, fatureLıstDelete } from '@/redux/actions/featureListAction';
import { useDispatch, useSelector } from 'react-redux';

const Client = (props) => {
    const router = useRouter()
    const domain = router.query.domain
    const { clientUsers, fetchClientUsersWithPagination } = props;
    const [selectedClientUsers, setSelectedClientUsers] = useState("");
    const [selectedPage, setSelectedPage] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const { segments } = useSelector(state => state.featureLıstReducer);
    const { allSegments } = useSelector(state => state.featureLıstReducer);

    segments.forEach((segment) => {
        const existingSegment = allSegments.find((s) => s.value === segment.value);

        if (!existingSegment) {
            allSegments.push(segment);
        }
    });
    
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
                                    <div className="middle">
                                        <div className="list">
                                            {
                                                allSegments.map((chip, index) => (
                                                    <div key={index} className="list-filter">
                                                        <p className='item-prg'>{chip.value}</p>
                                                        <FiFilter />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <Link href={CLIENTS}><Button variant="outlined" className="back">Back to clients</Button></Link>
                                    <Button variant="outlined" className="config"><Icon icon="mdi:gear" /></Button>
                                </div>
                            </div>
                            <div className="content">
                                <TableContainer component={Paper} className={customTableStyles.customTable}>
                                    <Table className='table' aria-label="simple table">
                                        <TableHead className='table-head'>
                                            <TableRow className='table-nav'>
                                                <TableCell className='table-title' >E-mail</TableCell>
                                                <TableCell className='table-title' >Segment</TableCell>
                                                <TableCell className='table-title' >Manage</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody className='table-body'>
                                            {
                                                selectedPage?.results.map((user, key) => (
                                                    <TableRow className='user' hover key={key}>
                                                        <TableCell className='email' align="left">{checkUserEmail(user.email)} <Chip label={user._id} size={"small"} color="primary" />
                                                        </TableCell>
                                                        <TableCell className='segment'>
                                                            {segments.map(segment => (
                                                                <p key={segment.id}>{segment.value}</p>
                                                            ))}
                                                        </TableCell>
                                                        <TableCell className="manage">
                                                            <Link href={`${CLIENT}/${domain}/user/${user._id}`}><span><Icon icon="material-symbols:dashboard" /></span></Link>
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
                                        <Pagination count={maxPage} page={pageNumber} onChange={changePageNumber} />
                                    </div>
                                    : ""
                            }
                        </div>
                    </div>
                    :
                    <LinearProgress />
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
