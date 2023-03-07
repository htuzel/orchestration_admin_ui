import React, {useState, useEffect, useRef} from 'react';
import {Icon} from '@iconify/react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import {LeadScore} from "@/components/mini/mini";
import ListItemText from "@mui/material/ListItemText";
import {connect} from "react-redux";
import Alert from '@mui/material/Alert';
import Link from "next/link";
import {CLIENT, MERCHANTS} from "@/commons/router";
import ClickAwayListener from '@mui/base/ClickAwayListener';
import {fetchUserWithSearch} from "@/redux/actions/clientsAction";
import LinearProgress from '@mui/material/LinearProgress';

const Search = (props) => {
    const {fetchUserWithSearch, searchedUsers} = props;
    const [search, setSearch] = useState("");
    const [showList, setShowList] = useState(false);
    const [load, setLoad] = useState(false);
    const nextStepTimer = useRef(null)

    const searchUser = (value) => {
        setSearch(value);
        setLoad(true);
        if (nextStepTimer.current) {
            clearTimeout(nextStepTimer.current);
        }
        if (value) {
            nextStepTimer.current = setTimeout(async () => {
                await fetchUserWithSearch(value);
                setLoad(false);
            }, 350);
        }
        else {
            setLoad(false);
        }
    };


    return (
        <ClickAwayListener onClickAway={() => setShowList(false)}>
            <div className="search">
                <div className="search-group" onClick={() => setShowList(true)}>
                    <input type="text" placeholder="Search clients" onChange={e => searchUser(e.target.value)} value={search}/>
                    <div className="search-icon">
                        <Icon icon="material-symbols:search-rounded"/>
                    </div>
                </div>
                {
                    showList &&
                    <div className="list">
                        {
                            !load ?
                                searchedUsers.length > 0
                                    ?
                                    <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                                        {
                                            searchedUsers.map((user, key) => (
                                                <ListItem alignItems="flex-start" key={key}>
                                                    <ListItemAvatar>
                                                        <LeadScore value={10} className="default"/>
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary={
                                                            <Link href={`${MERCHANTS}${CLIENT}/${user && user._id}`} onClick={() => setShowList(false)}>
                                                                {user.email}
                                                            </Link>
                                                        }
                                                        secondary={user.client}
                                                    />
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                    :
                                    <Alert severity="warning">There were no results</Alert>
                                :
                                <LinearProgress/>
                        }
                    </div>

                }
            </div>
        </ClickAwayListener>
    );
};

const mapStateToProps = (state) => {
    return {
        clients: state.merchantsReducer.clients,
        searchedUsers: state.clientsReducer.searchedUsers,
    }
}

const mapDispatchToProps = {
    fetchUserWithSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
