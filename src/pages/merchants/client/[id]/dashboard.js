import React from 'react';
import styles from '@/styles/Client.module.scss';
import Button from "@mui/material/Button";
import {Icon} from '@iconify/react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


function CircularProgressWithLabel(props) {
    return (
        <Box sx={{position: 'relative', display: 'inline-flex'}}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="text.secondary">
                    {props.value}
                </Typography>
            </Box>
        </Box>
    );
}


const Client = () => {
    return (
        <div className={styles.clientDashboard}>
            <div className="content-wrapper">
                <div className="header">
                    <div className="left">
                        <div className="client"><span>Turacoon.com</span></div>
                    </div>
                    <div className="right">
                        <Button variant="outlined" className="back">Back to clients</Button>
                        <Button variant="outlined" className="config"><Icon icon="mdi:gear"/></Button>
                    </div>
                </div>
                <div className="content">
                    <div className="left">
                        <div className="progress-bar custom-card">
                            <CircularProgressWithLabel value={95} className="lead-score"/>
                            <div className="mini-title">Lead Score</div>
                        </div>

                        <div className="segments custom-card">
                            <div className="content">
                                <Chip label="Çocuklar için ingilizce" color="primary" variant="outlined"/>
                                <Chip label="Çocuklar" color="primary" variant="outlined"/>
                                <Chip label="Büyükler" color="primary" variant="outlined"/>
                                <Chip label="Önemli" color="primary" variant="outlined"/>
                                <Chip label="Kids" color="primary" variant="outlined"/>
                                <Chip label="Satın alabilir" color="primary" variant="outlined"/>
                            </div>
                            <div className="mini-title">Segments</div>
                        </div>

                    </div>
                    <div className="right">
                        <div className="timeline custom-card">
                            <div className="mini-title">Timeline</div>
                            <div className="content">
                                <Timeline position="alternate">
                                    <TimelineItem>
                                        <TimelineOppositeContent color="text.secondary">
                                            09:30 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>Eat</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent color="text.secondary">
                                            10:00 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>Code</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent color="text.secondary">
                                            12:00 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>Sleep</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent color="text.secondary">
                                            9:00 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>Repeat</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent color="text.secondary">
                                            09:30 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>Eat</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent color="text.secondary">
                                            10:00 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>Code</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent color="text.secondary">
                                            12:00 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>Sleep</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent color="text.secondary">
                                            9:00 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>Repeat</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent color="text.secondary">
                                            09:30 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>Eat</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent color="text.secondary">
                                            10:00 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>Code</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent color="text.secondary">
                                            12:00 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot/>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>Sleep</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent color="text.secondary">
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
    );
};

export default Client;
