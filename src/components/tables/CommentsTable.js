import React, { useState } from 'react';
import './CommentsTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Comments() {
    const [commentsData, setCommentsData] = useState([
        {
            "id": 62879,
            "post_id": 77241,
            "name": "Avantika Johar CPA",
            "email": "cpa_avantika_johar@sporer.test",
            "body": "Voluptas aut aut. Voluptatem rerum quidem. Labore non qui. Non in illum."
        },
        {
            "id": 62878,
            "post_id": 77241,
            "name": "Tara Talwar",
            "email": "tara_talwar@dietrich-kuhlman.example",
            "body": "Atque omnis deserunt."
        },
        {
            "id": 62873,
            "post_id": 77233,
            "name": "Daevi Khanna DC",
            "email": "daevi_dc_khanna@mueller.test",
            "body": "Quaerat officiis officia. Aut sed et. Dolor dolores nostrum."
        },
        {
            "id": 62872,
            "post_id": 77232,
            "name": "Subhash Panicker PhD",
            "email": "panicker_phd_subhash@gorczany-hermann.test",
            "body": "Sequi quia dolores. Est deserunt nihil."
        },
        {
            "id": 62869,
            "post_id": 77230,
            "name": "Aaratrika Achari",
            "email": "aaratrika_achari@emmerich.example",
            "body": "Dolorum odio blanditiis. Quidem vitae animi. Omnis et velit. Blanditiis consequatur eum."
        },
        {
            "id": 62868,
            "post_id": 77230,
            "name": "Akshaj Mukhopadhyay",
            "email": "akshaj_mukhopadhyay@oreilly.test",
            "body": "Quo quasi rerum. Facilis tempora enim."
        },
        {
            "id": 62867,
            "post_id": 77228,
            "name": "Vishwamitra Devar",
            "email": "vishwamitra_devar@osinski.test",
            "body": "Aliquid cumque quo. Quo praesentium labore. Labore autem quia."
        },
        {
            "id": 62866,
            "post_id": 77227,
            "name": "Dhanu Naik",
            "email": "dhanu_naik@leannon.test",
            "body": "Maiores est dolores. Nobis natus adipisci. Culpa sapiente dolores. Molestiae quibusdam ut."
        },
        {
            "id": 62865,
            "post_id": 77227,
            "name": "The Hon. Mangala Bhattacharya",
            "email": "mangala_hon_bhattacharya_the@konopelski.example",
            "body": "Est vel tempore. Et ullam mollitia. Nihil quis est."
        },
        {
            "id": 62864,
            "post_id": 77226,
            "name": "Bhargava Nambeesan Jr.",
            "email": "bhargava_jr_nambeesan@hilpert.test",
            "body": "Asperiores porro nam. Nihil iste necessitatibus."
        }
    ]);

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
