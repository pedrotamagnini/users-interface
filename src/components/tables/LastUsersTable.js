import React from 'react';
import './LastUsersTable.css';

function LastUsersTable() {
    // Suponha que você tenha uma lista de usuários
    const lastUsers = [
        { id: 29709, user_id: 5351005 },
        { id: 29712, user_id: 5350982 },
        { id: 29724, user_id: 5350978 },
        // Adicione mais usuários, se necessário
    ];

    return (
        <div className='last-users-table'>
            <h2>➕ Last Users Added</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>USER ID</th>
                    {/* Outras colunas, se necessário */}
                </tr>
                </thead>
                <tbody>
                {lastUsers.map((user, index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.user_id}</td>
                        {/* Outras colunas, se necessário */}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default LastUsersTable;
