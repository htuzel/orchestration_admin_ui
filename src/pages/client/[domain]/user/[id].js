import React from 'react';
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

const Client = () => {
    const router = useRouter()
    const domain = router.query.domain
    return (
        <div className={styles.clientDashboard}>
            <div className="content-wrapper">
                <div className="header">
                    <div className="left">
                        <div className="client"><span>Turacoon.com</span></div>
                    </div>
                    <div className="right">
                        <Link href={`${CLIENT}/${domain}`}><Button variant="outlined" className="back">Back to clients</Button></Link>
                        <Button variant="outlined" className="config"><Icon icon="mdi:gear"/></Button>
                    </div>
                </div>
                <div className="content">
                    <div className="left">
                        <div className="progress-bar custom-card">
                            <LeadScore value={50}/>
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
