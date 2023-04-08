import React from 'react';
import Link from 'next/link'

const Dashboard = () => {
    return (
        <div>
            <Link href="/clients"><button>clients</button></Link>
        </div>
    );
};

export default Dashboard;

