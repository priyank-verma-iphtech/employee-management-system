import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();

  const getInitials = (name) => {
    if (!name) return 'U';
    const parts = name.trim().split(' ');
    if (parts.length > 1) {
      return parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
    }
    return parts[0][0].toUpperCase();
  };

  const initials = currentUser ? getInitials(currentUser.name) : 'U';

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-avatar">{initials}</div>
        <h2>{currentUser ? currentUser.name : 'User Name'}</h2>
        <p>{currentUser ? currentUser.email : 'user@example.com'}</p>
        <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
      </div>
    </div>
  );
};

export default Profile;
