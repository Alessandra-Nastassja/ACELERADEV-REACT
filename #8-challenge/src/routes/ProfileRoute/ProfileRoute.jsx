import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

import { getAPI } from '../environment';

const environment = getAPI();

const ProfileRoute = () => {  
  const [name, setName] = useState('');
  const [id, setUserId] = useState('');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { pathname } = window.location;
    const param = pathname.split("/")[2];

    const endpoint = `${environment}/users?search=${param}`;

    fetch(endpoint)
      .then(response => response.json())
      .then(profileData => {
        setAvatar(profileData[0].avatar);
        setEmail(profileData[0].email);
        setName(profileData[0].name);
        setUsername(profileData[0].username);
        setUserId(profileData[0].id);
      });
  }, []);

  // GET - Busca todos os posts dos usuários
  useEffect(() => {
    if (id) {
      fetch(`${environment}/users/${id}/posts`)
        .then(response => response.json())
        .then(posts => {
          setUserPosts(posts);
          setIsLoading(false)
        });
    }
  }, [id]);

  return (
    <div data-testid="profile-route">
      <UserProfile
        name={name}
        avatar={avatar}
        username={username}
        email={email}
      />

      {isLoading
        ? (<Loading />)
        : <UserPosts posts={userPosts} />
      }
    </div>
  );
};

export default ProfileRoute;
