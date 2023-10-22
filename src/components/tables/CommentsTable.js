import React, { useState, useEffect } from 'react';
import './CommentsTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Comments() {
    const [commentsData, setCommentsData] = useState([]);
    
    // Função para buscar os dados do Postman
    const fetchPostmanData = async () => {
        try {
            // Realize a solicitação GET para a URL do Postman
            const response = await axios.get('https://gorest.co.in/public/v2/comments');

            // Os dados da resposta estarão em response.data
            const commentsData = response.data;

            // Atualize o estado dos dados do Postman
            setCommentsData(commentsData);
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
    const [selectedComment, setSelectedComment] = useState(null);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDeleteComment = (comment) => {
        const updatedComments = commentsData.filter((c) => c !== comment);
        setCommentsData(updatedComments);
        setSelectedComment(null);
    };

    const filteredComments = commentsData.filter((comment) => {
        const matchesSearchTerm = comment.post_id.toString().includes(searchTerm);
        return matchesSearchTerm;
    });

    return (
        <div className='comment-table'>
            <input
                type='text'
                placeholder='Search comment by POST ID'
                value={searchTerm}
                onChange={handleSearch}
            />

            <div className='table-container'>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>POST ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>COMMENT</th>
                        <th>ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredComments.map((comment, index) => (
                        <tr key={index} onClick={() => setSelectedComment(comment)}>
                            <td>{comment.id}</td>
                            <td>{comment.post_id}</td>
                            <td>{comment.name}</td>
                            <td>{comment.email}</td>
                            <td>{comment.body}</td>
                            <td>
                                {selectedComment === comment && (
                                    <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteComment(comment)} />
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

export default Comments;
