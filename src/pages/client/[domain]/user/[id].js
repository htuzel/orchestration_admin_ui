import React, {useEffect, useState} from 'react';
import styles from '@/styles/Client.module.scss';
import Button from "@mui/material/Button";
import {Icon} from '@iconify/react';
import Chip from '@mui/material/Chip';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {LeadScore} from "@/components/mini/mini";
import {useRouter} from "next/router";
import Link from 'next/link'
import {CLIENT} from "@/commons/router";
import {fetUserDetail} from "@/redux/actions/clientsAction";
import {connect} from "react-redux";
import {checkUserEmail} from "@/commons/helpers";
import LinearProgress from "@mui/material/LinearProgress";
import {FiSettings} from 'react-icons/fi';
import {useDispatch, useSelector} from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


const top100Films = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},
    {title: 'The Godfather: Part II', year: 1974},
    {title: 'The Dark Knight', year: 2008},
    {title: '12 Angry Men', year: 1957},
    {title: "Schindler's List", year: 1993},
    {title: 'Pulp Fiction', year: 1994},
];

const UserDetail = (props) => {
    const {fetUserDetail} = props;
    const router = useRouter()
    const domain = router.query.domain
    const [selectedUser, setSelectedUser] = useState("");
    const [session, setSession] = useState("");
    const [showContent, setShowContent] = useState(false);
    const {segments} = useSelector(state => state.featureLıstReducer)
    const {user, sessions} = selectedUser;
console.log(sessions)
    useEffect(() => {
        const initalUserDetail = async () => {
            const userDetail = await fetUserDetail(1, 2, 3);
            setSelectedUser(userDetail);
        }
        initalUserDetail();
    }, []);

    return (
        <>
            {
                selectedUser
                    ?
                    <div className={styles.clientDashboard}>
                        <div className="content-wrapper">
                            <div className="header">
                                <div className="left">
                                    <div className="sessions">
                                        <Icon icon="ph:caret-left"/>
                                        <FormControl className="custom-select" sx={{m: 1, minWidth: 120}} size="small">
                                            <InputLabel id="demo-select-small-label">Sessions</InputLabel>
                                            <Select
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={session}
                                                label="Sessions"
                                                onChange={(e) => setSession(e.target.value)}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Icon icon="ph:caret-left" rotate={2}/>
                                    </div>
                                </div>
                                <div className="right">
                                    <Link href={`${CLIENT}/${domain}`}><Button variant="outlined" className="back">Back to users</Button></Link>
                                    <Button variant="outlined" className="config"><Icon icon="mdi:gear"/></Button>
                                </div>
                            </div>
                            <div className="content">
                                <div className="left">
                                    <div className="client"><span>{checkUserEmail(user.email)}</span></div>

                                    <div className="progress-bar custom-card">
                                        <LeadScore value={50}/>
                                        <div className="mini-title">Lead Score</div>
                                    </div>

                                    <div className="custom-card">
                                        <div className="content">
                                            <p>Hangi tarayıcan vs gelmiş</p>
                                        </div>
                                        <div className="mini-title">Details</div>
                                    </div>

                                    <div className="custom-card">
                                        <div className="content">
                                            <p>Hangi kampanyadan gelmiş</p>
                                        </div>
                                        <div className="mini-title">Kampanyalar</div>
                                    </div>

                                    <div className="segments custom-card">
                                        <div className="content">
                                            <FiSettings className='settings' onClick={() => setShowContent(!showContent)}/>
                                            {
                                                showContent ?
                                                    <div className="add-segment">
                                                        <Autocomplete
                                                            multiple
                                                            id="tags-outlined"
                                                            options={top100Films.map((option) => option.title)}
                                                            defaultValue={[top100Films[0].title]}
                                                            freeSolo
                                                            disableClearable
                                                            renderTags={(value, getTagProps) =>
                                                                value.map((option, index) => (
                                                                    <Chip variant="outlined" label={option} {...getTagProps({index})} />
                                                                ))
                                                            }
                                                            renderInput={(params) => (
                                                                <TextField
                                                                    {...params}
                                                                    variant="outlined"
                                                                    label="Selected Segments"
                                                                    placeholder="Add Segment"
                                                                />
                                                            )}
                                                            size="small"
                                                        />
                                                    </div>
                                                    :
                                                    <div className="item-list">
                                                        {
                                                            segments.map((segment, index) => (
                                                                <div className="item" key={index}>
                                                                    <span>{segment.value}</span>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                            }
                                        </div>
                                        <div className=" mini-title">Segments</div>
                                    </div>
                                </div>
                                <div className=" right">
                                    <div className=" timeline-wrapper">
                                        <div className=" timeline custom-card">
                                            <div className=" mini-title">Timeline</div>
                                            <div className="content">
                                                <Timeline position="alternate">
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color=" text.secondary">
                                                            09:30 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot/>
                                                            <TimelineConnector/>
                                                        </TimelineSeparator>
                                                        <TimelineContent>Eat</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color=" text.secondary">
                                                            10:00 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot/>
                                                            <TimelineConnector/>
                                                        </TimelineSeparator>
                                                        <TimelineContent>Code</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color=" text.secondary">
                                                            12:00 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot/>
                                                            <TimelineConnector/>
                                                        </TimelineSeparator>
                                                        <TimelineContent>Sleep</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color=" text.secondary">
                                                            9:00 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot/>
                                                            <TimelineConnector/>
                                                        </TimelineSeparator>
                                                        <TimelineContent>Repeat</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color=" text.secondary">
                                                            09:30 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot/>
                                                            <TimelineConnector/>
                                                        </TimelineSeparator>
                                                        <TimelineContent>Eat</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color=" text.secondary">
                                                            10:00 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot/>
                                                            <TimelineConnector/>
                                                        </TimelineSeparator>
                                                        <TimelineContent>Code</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color=" text.secondary">
                                                            12:00 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot/>
                                                            <TimelineConnector/>
                                                        </TimelineSeparator>
                                                        <TimelineContent>Sleep</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color=" text.secondary">
                                                            9:00 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot/>
                                                            <TimelineConnector/>
                                                        </TimelineSeparator>
                                                        <TimelineContent>Repeat</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color=" text.secondary">
                                                            09:30 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot/>
                                                            <TimelineConnector/>
                                                        </TimelineSeparator>
                                                        <TimelineContent>Eat</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color=" text.secondary">
                                                            10:00 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot/>
                                                            <TimelineConnector/>
                                                        </TimelineSeparator>
                                                        <TimelineContent>Code</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color=" text.secondary">
                                                            12:00 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot/>
                                                            <TimelineConnector/>
                                                        </TimelineSeparator>
                                                        <TimelineContent>Sleep</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color=" text.secondary">
                                                            9:00 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot/>
                                                            <TimelineConnector/>
                                                        </TimelineSeparator>
                                                        <TimelineContent>Repeat</TimelineContent>
                                                    </TimelineItem>
                                                </Timeline>
                                            </div>
                                        </div>
                                        <div className=" custom-card"></div>
                                    </div>
                                    <div className=" actions">
                                        <div className=" custom-card">
                                            <div className=" mini-title">Major Events</div>
                                        </div>
                                        <div className=" custom-card">
                                            <div className=" mini-title">Actions</div>
                                        </div>
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
    fetUserDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);