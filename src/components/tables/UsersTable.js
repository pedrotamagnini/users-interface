import React, { useState, useEffect } from 'react';
import './UsersTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function UsersTable() {
    const [usersData, setUsersData] = useState([]);
        
    // Função para buscar os dados do Postman
    const fetchPostmanData = async () => {
        try {
            // Realize a solicitação GET para a URL do Postman
            const response = await axios.get('https://gorest.co.in/public/v2/users');

            // Os dados da resposta estarão em response.data
            const usersData = response.data;

            // Atualize o estado dos dados do Postman
            setUsersData(usersData);
        } catch (error) {
            // Lidar com erros, por exemplo, exibindo uma mensagem de erro
            console.error('Erro ao buscar dados do Postman:', error);
        }
    };

// Chame a função para buscar dados quando o componente for montado
    useEffect(() => {
        fetchPostmanData();
    }, []);

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