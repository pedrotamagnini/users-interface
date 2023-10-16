import React from 'react';
import './TotalPostsTable.css';

function TotalPostsTable({ totalPosts }) {
    return (
        <div className="total-posts-table">
            <h2>Total Posts</h2>
            <table>
                <thead>
                </thead>
                <tbody>
                <tr>
                    <td>225</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TotalPostsTable;
