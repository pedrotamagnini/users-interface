import React from 'react';
import './TotalUsersTable.css';
import userImage from '../../assets/images/add-user.png';

function TotalUsersTable({ totalUsers }) {
    return (
        <div className="total-users-table">
            <h2>Total Users</h2>
            <table>
                <thead>
                </thead>
                <tbody>
                <tr>
                    <td>10</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TotalUsersTable;
