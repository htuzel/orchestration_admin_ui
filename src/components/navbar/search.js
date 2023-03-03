import React, {useState, useEffect} from 'react';
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

const Search = (props) => {
    const {clients} = props;
    const [search, setSearch] = useState("");
    const [showList, setShowList] = useState(false);

    const filteredClients = clients.filter((client) => {
        return client.domain.includes(search.toLowerCase());
    });

    return (
        <ClickAwayListener onClickAway={() => setShowList(false)}>
            <div className="search">
                <div className="search-group" onClick={() => setShowList(true)}>
                    <input type="text" placeholder="Search clients" onChange={e => setSearch(e.target.value)} value={search}/>
                    <div className="search-icon">
                        <Icon icon="material-symbols:search-rounded"/>
                    </div>
                </div>
                {
                    showList &&
                    <div className="list">
                        {
                            filteredClients.length > 0
                                ?
                                <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                                    {filteredClients.map((client, key) => (
                                        <ListItem alignItems="flex-start" key={key}>
                                            <ListItemAvatar>
                                                <LeadScore value={10} className="default"/>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={
                                                    <Link href={`${MERCHANTS}${CLIENT}/${client && client._id}`} onClick={() => setShowList(false)}>
                                                        {client.domain}
                                                    </Link>
                                                }
                                                secondary="Major Events: 0"
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                :
                                <Alert severity="warning">There were no results</Alert>
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
    }
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
