import React from 'react';
import Link from 'next/link'

const Dashboard = () => {
    return (
        <div>
            <Link href="/merchants"><button>Merchants</button></Link>
        </div>
    );
};

export default Dashboard;

