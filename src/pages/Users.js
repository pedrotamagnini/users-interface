import React from 'react';
import '../App.css';
import UsersTable from '../components/tables/UsersTable.js';
import Nav from '../components/utils/Nav';
import FormUser from "../components/users/FormUsers";

function Users() {
    return (
        <div>
            <h1 className="home-title">Users Dashboard</h1>
            <div>
                <Nav />
            </div>
            <div className="tables-container">
                <UsersTable />
                <FormUser />
            </div>
        </div>
    );
}

export default Users;
