import './LastCommentsTable.css';
import React from "react";

function LastCommentsTable() {
    const lastComments = [
        { id: 62864, body: "Maiores est dolores. Nobis natus adipisci. Culpa sapiente dolores. Molestiae quibusdam ut." },
        { id: 62865, body: "Est vel tempore. Et ullam mollitia. Nihil quis est." },
        { id: 62866, body: "Asperiores porro nam. Nihil iste necessitatibus." },
    ];

    return (
        <div className='last-comments-table'>
            <h2>💬 Last Comments Added</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>COMMENT</th>
                </tr>
                </thead>
                <tbody>
                {lastComments.map((comment, index) => (
                    <tr key={index}>
                        <td>{comment.id}</td>
                        <td className="post-body">
                            {comment.body.length > 30 ? `${comment.body.substring(0, 60)}...` : comment.body}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default LastCommentsTable;
