import React, { useState, useEffect } from 'react';
import './PostsTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function PostsTable() {
    const [postsData, setPostsData] = useState([]);
    
    // Função para buscar os dados do Postman
    const fetchPostmanData = async () => {
        try {
            // Realize a solicitação GET para a URL do Postman
            const response = await axios.get('https://gorest.co.in/public/v2/posts');

            // Os dados da resposta estarão em response.data
            const postData = response.data;

            // Atualize o estado dos dados do Postman
            setPostsData(postData);
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
    const [selectedPost, setSelectedPost] = useState(null);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDeletePost = (post) => {
        const updatedPosts = postsData.filter((p) => p !== post);
        setPostsData(updatedPosts);
        setSelectedPost(null);
    };

    const filteredPosts = postsData.filter((post) => {
        const matchesSearchTerm = post.user_id.toString().includes(searchTerm);
        return matchesSearchTerm;
    });

    return (
        <div className='post-table'>
            <input
                type='text'
                placeholder='Search post by USER ID'
                value={searchTerm}
                onChange={handleSearch}
            />

            <div className='table-container'>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>USER_ID</th>
                        <th>TITLE</th>
                        <th>POST</th>
                        <th>ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredPosts.map((post, index) => (
                        <tr key={index} onClick={() => setSelectedPost(post)}>
                            <td>{post.id}</td>
                            <td>{post.user_id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                {selectedPost === post && (
                                    <FontAwesomeIcon icon={faTrash} onClick={() => handleDeletePost(post)} />
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

export default PostsTable;
