import React, { useState } from 'react';
import './UsersTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function UsersTable() {
    const [usersData, setUsersData] = useState([
        {
            "id": 5372431,
            "name": "Naval Bhattathiri CPA",
            "email": "bhattathiri_cpa_naval@gleichner.test",
            "gender": "male",
            "status": "inactive"
        },
        {
            "id": 5372430,
            "name": "Adheesh Singh",
            "email": "singh_adheesh@hintz-hoppe.example",
            "gender": "male",
            "status": "inactive"
        },
        {
            "id": 5372429,
            "name": "Chandranath Nehru II",
            "email": "chandranath_nehru_ii@ritchie.example",
            "gender": "male",
            "status": "inactive"
        },
        {
            "id": 5372428,
            "name": "Prema Verma",
            "email": "verma_prema@franecki-trantow.example",
            "gender": "female",
            "status": "inactive"
        },
        {
            "id": 5372427,
            "name": "Adripathi Varma",
            "email": "adripathi_varma@farrell.test",
            "gender": "male",
            "status": "inactive"
        },
        {
            "id": 5372425,
            "name": "Nalini Prajapat",
            "email": "nalini_prajapat@pollich.example",
            "gender": "male",
            "status": "inactive"
        },
        {
            "id": 5372424,
            "name": "Siddhi Tagore",
            "email": "tagore_siddhi@schmitt.test",
            "gender": "male",
            "status": "active"
        },
        {
            "id": 5372423,
            "name": "Amb. Rajinder Sethi",
            "email": "rajinder_sethi_amb@little.example",
            "gender": "female",
            "status": "active"
        },
        {
            "id": 5372422,
            "name": "Rati Kapoor",
            "email": "kapoor_rati@gutmann.test",
            "gender": "male",
            "status": "active"
        },
        {
            "id": 5372421,
            "name": "Abhirath Mishra LLD",
            "email": "lld_abhirath_mishra@skiles.test",
            "gender": "male",
            "status": "inactive"
        },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [selectedUser, setSelectedUser] = useState(null);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleStatusFilter = (event) => {
        setSelectedStatus(event.target.value);
    };

    const handleDeleteUser = (user) => {
        const updatedUsers = usersData.filter((u) => u !== user);
        setUsersData(updatedUsers);
        setSelectedUser(null);
    };

    const filteredUsers = usersData.filter((user) => {
        const matchesSearchTerm = user.id.toString().includes(searchTerm);

        if (selectedStatus === 'all') {
            return matchesSearchTerm;
        } else {
            return matchesSearchTerm && user.status === selectedStatus;
        }
    });

    return (
        <div className='user-table'>
            <input
                type='text'
                placeholder='Search user by ID'
                value={searchTerm}
                onChange={handleSearch}
            />

            <select value={selectedStatus} onChange={handleStatusFilter}>
                <option value='all'>All</option>
                <option value='active'>Active</option>
                <option value='inactive'>Inactive</option>
            </select>
            <div className='table-container'>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                        <th>STATUS</th>
                        <th>ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredUsers.map((user, index) => (
                        <tr key={index} onClick={() => setSelectedUser(user)}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td className={`status ${user.status}`}>{user.status}</td>
                            <td>
                                {selectedUser === user && (
                                    <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteUser(user)} />
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UsersTable;