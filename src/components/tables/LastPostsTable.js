import React, { useState } from 'react';
import './LastPostsTable.css'; // Importe o arquivo CSS

function LastPostsTable() {
    const lastPosts = [
        {
            "user_id": 5354499,
            "title": "Et comminor cupressus earum cometes.",
        },
        {
            "user_id": 5354496,
            "title": "Degero acidus validus ambulo amor correptius autem adinventitias delego.",
        },
        {
            "user_id": 5354496,
            "title": "Thorax quisquam summisse condico tersus triumphus civis viduata utpote.",
        },
    ];

    return (
        <div className='last-posts-table'>
            <h2>📄 Last Posts Added</h2>
            <table>
                <thead>
                <tr>
                    <th>USER ID</th>
                    <th>TITLE</th>
                </tr>
                </thead>
                <tbody>
                {lastPosts.map((post, index) => (
                    <tr key={index}>
                        <td>{post.user_id}</td>
                        <td className="post-title">
                            {post.title.length > 30 ? `${post.title.substring(0, 60)}...` : post.title}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default LastPostsTable;
