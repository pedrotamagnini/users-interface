import React from 'react';
import './LastPostsTable.css';

function LastPostsTable() {
    const lastPosts = [
        {
            "user_id": 5372429,
            "title": "Tunc textor vero ut ut quibusdam.",
        },
        {
            "user_id": 5372427,
            "title": "Commemoro qui stultus pel sit repudiandae.",
        },
        {
            "user_id": 5372427,
            "title": "Peccatus subito volup copia nobis ocer umquam perferendis.",
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
