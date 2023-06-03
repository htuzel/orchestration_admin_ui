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
import {LinearProgress} from '@mui/material';
import {checkUserEmail} from "@/commons/helpers";
import {useDispatch, useSelector} from 'react-redux';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Client = (props) => {
    const router = useRouter()
    const domain = router.query.domain
    const {clientUsers, fetchClientUsersWithPagination} = props;
    const [selectedClientUsers, setSelectedClientUsers] = useState("");
    const [selectedPage, setSelectedPage] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const {segments} = useSelector(state => state.featureLıstReducer);
    const {allSegments} = useSelector(state => state.featureLıstReducer);

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
        } else {
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

    const top100Films = [
        {title: 'Test', year: 1994},
        {title: 'Deneme', year: 1972},
        {title: 'Deneme3', year: 1974},
    ];

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
                                <div className="left">
                                    <div className="filters">
                                        <div className="segments">
                                            <Autocomplete
                                                multiple
                                                id="tags-outlined"
                                                options={top100Films.map((option) => option.title)}
                                                disableClearable
                                                renderTags={(value, getTagProps) =>
                                                    value.map((option, index) => (
                                                        <Chip variant="outlined" size="small" label={option} {...getTagProps({index})} />
                                                    ))
                                                }
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        variant="outlined"
                                                        label="Segment Filter"
                                                    />
                                                )}
                                                size="small"
                                            />
                                        </div>
                                        <div>
                                            <FormControl>
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                    defaultValue="all"
                                                >
                                                    <FormControlLabel value="all" control={<Radio size="small"/>} label="All"/>
                                                    <FormControlLabel value="anonymous" control={<Radio size="small"/>} label="Anonymous"/>
                                                    <FormControlLabel value="users" control={<Radio size="small"/>} label="Users"/>
                                                </RadioGroup>
                                            </FormControl>
                                        </div>
                                    </div>
                                    <TableContainer component={Paper} className={customTableStyles.customTable}>
                                        <Table className='table' aria-label="simple table">
                                            <TableHead className='table-head'>
                                                <TableRow className='table-nav'>
                                                    <TableCell className='table-title'>E-mail</TableCell>
                                                    <TableCell className='table-title'>Segments</TableCell>
                                                    <TableCell className='table-title'>Manage</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody className='table-body'>
                                                {
                                                    selectedPage?.results.map((user, key) => (
                                                        <TableRow className='user' hover key={key}>
                                                            <TableCell className='email' align="left">{checkUserEmail(user.email)}</TableCell>
                                                            <TableCell className='segments'>
                                                                {segments.map(segment => (
                                                                    <span key={segment.id}>{segment.value}</span>
                                                                ))}
                                                            </TableCell>
                                                            <TableCell className="manage">
                                                                <Link href={`${CLIENT}/${domain}/user/${user._id}`}><span><Icon icon="material-symbols:dashboard"/></span></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    {
                                        maxPage ?
                                            <div className="paginate">
                                                <Pagination count={maxPage} page={pageNumber} onChange={changePageNumber}/>
                                            </div>
                                            : ""
                                    }
                                </div>
                                <div className="right">
                                    <div className="online-count">
                                        <span className="circle"></span>
                                        <span className="count">34,150 users online</span>
                                    </div>

                                    <div className="custom-card users">
                                        <div className="user"><span className="circle"></span>engin</div>
                                        <div className="user"><span className="circle"></span>denem</div>
                                        <div className="user"><span className="circle"></span>test olarak</div>
                                        <div className="user"><span className="circle"></span>dhansda geldi</div>
                                        <div className="user"><span className="circle"></span>dtest olarka</div>
                                        <div className="user"><span className="circle"></span>tdestes</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <LinearProgress/>
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
