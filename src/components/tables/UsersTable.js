import React, { useState } from 'react';
import './UsersTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function UsersTable() {
    const [usersData, setUsersData] = useState([
        {
            "id": 29759,
            "user_id": 5351072,
            "title": "Verbera beneficium speculum bene dolorum thesis voluptatem consectetur.",
            "due_on": "2023-10-25T00:00:00.000+05:30",
            "status": "completed"
        },
        {
            "id": 29750,
            "user_id": 5351056,
            "title": "Deripio ciminatio absorbeo capto nihil vulariter.",
            "due_on": "2023-10-25T00:00:00.000+05:30",
            "status": "pending"
        },
        {
            "id": 29748,
            "user_id": 5351054,
            "title": "Aequus expedita nobis aggredior magnam certe somniculosus unus.",
            "due_on": "2023-10-19T00:00:00.000+05:30",
            "status": "pending"
        },
        {
            "id": 29741,
            "user_id": 5351033,
            "title": "Abbas antiquus adnuo aut statim maxime.",
            "due_on": "2023-10-29T00:00:00.000+05:30",
            "status": "completed"
        },
        {
            "id": 29739,
            "user_id": 5351031,
            "title": "Delicate curriculum crustulum terreo dolorem compello abeo sui.",
            "due_on": "2023-11-05T00:00:00.000+05:30",
            "status": "pending"
        },
        {
            "id": 29730,
            "user_id": 5351012,
            "title": "Sed optio vesco tutis timor pecunia brevis.",
            "due_on": "2023-10-14T00:00:00.000+05:30",
            "status": "pending"
        },
        {
            "id": 29727,
            "user_id": 5351008,
            "title": "Tertius et appono sulum adeo impedit.",
            "due_on": "2023-10-27T00:00:00.000+05:30",
            "status": "completed"
        },
        {
            "id": 29724,
            "user_id": 5351005,
            "title": "Virga teres uredo solium speciosus sursum desipio quo adsuesco.",
            "due_on": "2023-11-10T00:00:00.000+05:30",
            "status": "completed"
        },
        {
            "id": 29712,
            "user_id": 5350982,
            "title": "Patruus quaerat et eum via.",
            "due_on": "2023-11-02T00:00:00.000+05:30",
            "status": "completed"
        },
        {
            "id": 29709,
            "user_id": 5350978,
            "title": "Et curso abundans caute stipes magnam suffoco.",
            "due_on": "2023-11-03T00:00:00.000+05:30",
            "status": "pending"
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
                <option value='completed'>Completed</option>
                <option value='pending'>Pending</option>
            </select>
            <div className='table-container'>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>USER ID</th>
                        <th>TITLE</th>
                        <th>DUE_ON</th>
                        <th>STATUS</th>
                        <th>ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredUsers.map((user, index) => (
                        <tr key={index} onClick={() => setSelectedUser(user)}>
                            <td>{user.id}</td>
                            <td>{user.user_id}</td>
                            <td>{user.title}</td>
                            <td>{user.due_on}</td>
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