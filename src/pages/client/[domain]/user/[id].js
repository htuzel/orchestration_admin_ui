import React, { useEffect, useState } from 'react';
import styles from '@/styles/Client.module.scss';
import Button from "@mui/material/Button";
import { Icon } from '@iconify/react';
import Chip from '@mui/material/Chip';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { LeadScore } from "@/components/mini/mini";
import { useRouter } from "next/router";
import Link from 'next/link'
import { CLIENT } from "@/commons/router";
import { fetUserDetail } from "@/redux/actions/clientsAction";
import { connect } from "react-redux";
import { checkUserEmail } from "@/commons/helpers";
import LinearProgress from "@mui/material/LinearProgress";
import { FiSettings } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';
import { fatureLıst, fatureLıstDelete } from '@/redux/actions/featureListAction';
import { useDispatch, useSelector } from 'react-redux';
import { userIdOnSave } from '@/redux/actions/clientsAction';

const UserDetail = (props) => {
    const { fetUserDetail } = props;
    const router = useRouter()
    const domain = router.query.domain
    const [selectedUser, setSelectedUser] = useState("");
    const [showContent, setShowContent] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState("");
    const { segments } = useSelector(state => state.featureLıstReducer)
    const dispatch = useDispatch();
    const { user } = selectedUser;

    useEffect(() => {
        const initalUserDetail = async () => {
            const userDetail = await fetUserDetail();
            setSelectedUser(userDetail);
        }
        initalUserDetail();
    }, []);

    const toggleContent = () => {
        setShowContent(!showContent);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setError("");
    };

    const handleAddChip = () => {
        if (inputValue !== '') {
            const isValueExists = segments.some(segment => segment.value === inputValue);
            if (!isValueExists) {
                dispatch(fatureLıst(inputValue));
                setInputValue('');
            } else {
                setError("Aynı segment eklenemez.");
            }
        }
    }
    
    const handleDeleteChip = (index) => {
        dispatch(fatureLıstDelete(index));
    };

    return (
        <>
            {
                selectedUser
                    ?
                    <div className={styles.clientDashboard}>
                        <div className="content-wrapper">
                            <div className="header">
                                <div className="left">
                                    <div className="client"><span>{checkUserEmail(user.email)}</span></div>
                                </div>
                                <div className="right">
                                    <Link href={`${CLIENT}/${domain}`}><Button variant="outlined" className="back">Back to users</Button></Link>
                                    <Button variant="outlined" className="config"><Icon icon="mdi:gear" /></Button>
                                </div>
                            </div>
                            <div className="content">
                                <div className="left">
                                    <div className="progress-bar custom-card">
                                        <LeadScore value={50} />
                                        <div className="mini-title">Lead Score</div>
                                    </div>

                                    <div className="segments custom-card">
                                        <div className="content">
                                            <p>Hangi tarayıcan vs gelmiş</p>
                                        </div>
                                        <div className="mini-title">Details</div>
                                    </div>

                                    <div className="segments custom-card">
                                        <div className="content">
                                            <p>Hangi kampanyadan gelmiş</p>
                                        </div>
                                        <div className="mini-title">Kampanyalar</div>
                                    </div>

                                    <div className="segments custom-card">
                                        <div className="addToFeature">
                                            <div className="addFeature">
                                                <p>Segments Ayarla</p>
                                                <div className="outSettings" onClick={toggleContent}>
                                                    <FiSettings className='Settings' />
                                                </div>
                                            </div>
                                            {
                                                showContent &&
                                                <div className="addto-text">
                                                    <div className='addto-ınput'>
                                                        <input className='textInput' type="text" value={inputValue} onChange={handleInputChange} />
                                                        <div className="outCheck" onClick={handleAddChip}>
                                                            <AiOutlinePlus className='check' />
                                                        </div>
                                                    </div>
                                                    {error && <p>{error}</p>}
                                                </div>
                                            }
                                        </div>
                                        {
                                            <div className="content">
                                                {
                                                    (segments.length > 0) &&
                                                    segments.map((chip, index) => (
                                                        <div key={index} className='item-list'>
                                                            <p className='item-prg'>{chip.value}</p>
                                                            <IoIosClose className="delete-icon" onClick={() => handleDeleteChip(index)} />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        }
                                        <div className="mini-title">Segments</div>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="timeline-wrapper">
                                        <div className="timeline custom-card">
                                            <div className="mini-title">Timeline</div>
                                            <div className="content">
                                                <Timeline position="alternate">
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color="text.secondary">
                                                            09:30 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot />
                                                            <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent>Eat</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color="text.secondary">
                                                            10:00 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot />
                                                            <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent>Code</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color="text.secondary">
                                                            12:00 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot />
                                                            <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent>Sleep</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color="text.secondary">
                                                            9:00 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot />
                                                            <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent>Repeat</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color="text.secondary">
                                                            09:30 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot />
                                                            <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent>Eat</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color="text.secondary">
                                                            10:00 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot />
                                                            <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent>Code</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color="text.secondary">
                                                            12:00 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot />
                                                            <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent>Sleep</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color="text.secondary">
                                                            9:00 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot />
                                                            <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent>Repeat</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color="text.secondary">
                                                            09:30 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot />
                                                            <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent>Eat</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color="text.secondary">
                                                            10:00 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot />
                                                            <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent>Code</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color="text.secondary">
                                                            12:00 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot />
                                                            <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent>Sleep</TimelineContent>
                                                    </TimelineItem>
                                                    <TimelineItem>
                                                        <TimelineOppositeContent color="text.secondary">
                                                            9:00 am
                                                        </TimelineOppositeContent>
                                                        <TimelineSeparator>
                                                            <TimelineDot />
                                                            <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent>Repeat</TimelineContent>
                                                    </TimelineItem>
                                                </Timeline>
                                            </div>
                                        </div>
                                        <div className="custom-card"></div>
                                    </div>
                                    <div className="actions">
                                        <div className="custom-card">
                                            <div className="mini-title">Major Events</div>
                                        </div>
                                        <div className="custom-card">
                                            <div className="mini-title">Actions</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
    fetUserDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);