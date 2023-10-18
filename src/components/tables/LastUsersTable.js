import React from 'react';
import './LastUsersTable.css';

function LastUsersTable() {
    const lastUsers = [
        { id: 5372423, name: "Amb. Rajinder Sethi" },
        { id: 5372422, name: "Rati Kapoor" },
        { id: 5372421, name: "Abhirath Mishra LLD" },
    ];

    return (
        <div className='last-users-table'>
            <h2>➕ Last Users Added</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                </tr>
                </thead>
                <tbody>
                {lastUsers.map((user, index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default LastUsersTable;
