import React, { useState, useEffect } from 'react';
import '../App.css';
import LastUsersTable from '../components/tables/LastUsersTable.js';
import LastPostsTable from '../components/tables/LastPostsTable.js';
import LastCommentsTable from '../components/tables/LastCommentsTable.js';
import TotalUsersTable from '../components/tables/TotalUsersTable.js';
import TotalPostsTable from '../components/tables/TotalPostsTable.js';
import TotalCommentsTable from '../components/tables/TotalCommentsTable.js';
import Nav from '../components/utils/Nav';
import './Welcome.css';

function Welcome() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 5000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <h1 className="home-title">Dashboard</h1>
            <Nav />
            {loading ? (
                <div className="loading-container">
                    <div className="loading-icon">
                    </div>
                    <div className="loading-message">Welcome!</div>
                </div>
            ) : (
                <div className="tables-container">
                    <LastUsersTable />
                    <LastPostsTable />
                    <LastCommentsTable />
                    <TotalUsersTable />
                    <TotalPostsTable />
                    <TotalCommentsTable />
                </div>
            )}
        </div>
    );
}

export default Welcome;
