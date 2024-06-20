import React from 'react';
import Layout from './Layout';
import "../../CSS/Profile.css"; // Import the profile-specific CSS
import Loading from '../../components/Loading';
import { useState } from 'react';

const Profile = () => {
  // Sample admin data
  const adminData = {
    name: 'Admin Name',
    username: 'adminuser',
    password: 'password123',
  };

  const [isLoading,setIsLoading] = useState(true);
  setTimeout(() => {
      setIsLoading(false)
    }, 1500);

  return (
    <div className={isLoading ? 'loading' : 'loaded'}>
      <Loading isLoading={isLoading} />
      <div className="content_">
    <Layout >
      <div className="profile-box">
        <h2>Profile</h2>
        <div className="profile-item">
          <label>Name:</label>
          <p>{adminData.name}</p>
        </div>
        <div className="profile-item">
          <label>Username:</label>
          <p>{adminData.username}</p>
        </div>
        <div className="profile-item">
          <label>Password:</label>
          <p>{adminData.password}</p>
        </div>
      </div>
    </Layout>
    </div></div>
  );
};

export default Profile;
