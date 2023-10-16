import React from 'react';

function UserStatsPopup({ user, onClose }) {
    return (
        <div className="user-stats-popup">
            <h2>User Statistics</h2>
            <p>ID: {user.id}</p>
            <p>USER ID: {user.user_id}</p>
            {/* Add code to fetch and display the number of posts and comments made by the user */}
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default UserStatsPopup;
