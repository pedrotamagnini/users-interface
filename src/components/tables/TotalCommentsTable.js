import React from 'react';
import './TotalCommentsTable.css';

function TotalCommentsTable({ totalComments }) {
    return (
        <div className="total-comments-table">
            <h2>Total Comments</h2>
            <table>
                <thead>
                </thead>
                <tbody>
                <tr>
                    <td>151</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TotalCommentsTable;
