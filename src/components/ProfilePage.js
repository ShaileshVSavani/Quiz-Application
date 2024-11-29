

import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedAuthData = JSON.parse(localStorage.getItem('auth'));

    if (storedAuthData) {
      // If user data exists, set state variables
      setUserEmail(storedAuthData.email);
   
      // Use the email or any part of the data to create a username or initials for avatar
      setUserName(storedAuthData.email.split('@')[0]);
    } else {
      // Handle case when no user data is found in localStorage
      setUserEmail('No email found');
      setUserName('User');
    }
  }, []);

  // Generate avatar URL using the user's name or email initials
  const avatarUrl = `https://ui-avatars.com/api/?name=${userName}&background=random&color=fff&size=128`;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">Your Profile</h1>
      
      <div className="text-center mb-6">
        {/* Display avatar image */}
        <img src={avatarUrl} alt="User Avatar" className="w-32 h-32 rounded-full mx-auto mb-4" />
        
        <p className="text-xl">Email: {userEmail}</p>
       
      </div>
    </div>
  );
};

export default ProfilePage;
