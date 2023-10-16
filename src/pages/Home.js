import React from 'react';
import '../App.css';
import LastUsersTable from '../components/tables/LastUsersTable.js';
import LastPostsTable from '../components/tables/LastPostsTable.js';
import LastCommentsTable from '../components/tables/LastCommentsTable.js';
import TotalUsersTable from '../components/tables/TotalUsersTable.js';
import TotalPostsTable from '../components/tables/TotalPostsTable.js';
import TotalCommentsTable from '../components/tables/TotalCommentsTable.js';
import Nav from '../components/utils/Nav';

function Home() {
    return (
        <div>
            <h1 className="home-title">Dashboard</h1>
            <Nav />
            <div className="tables-container">
                <LastUsersTable />
                <LastPostsTable />
                <LastCommentsTable />
                <TotalUsersTable />
                <TotalPostsTable />
                <TotalCommentsTable />
            </div>
        </div>
    );
}

export default Home;
