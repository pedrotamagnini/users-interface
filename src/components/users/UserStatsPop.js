import React from 'react';

function UserStatsPopup({ user, onClose }) {
    return (
        <div className="user-stats-popup">
            <h2>User Statistics</h2>
            <p>ID: {user.id}</p>
            <p>USER ID: {user.user_id}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default UserStatsPopup;
