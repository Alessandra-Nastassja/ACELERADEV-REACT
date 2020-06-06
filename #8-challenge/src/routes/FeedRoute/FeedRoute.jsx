import React, { useState, useEffect } from 'react';

import Posts from '../../containers/Posts';
import Stories from '../../containers/Stories';

import Loading from '../../components/Loading';

import { getAPI } from '../environment';

import './FeedRoute.scss';

const FeedRoute = () => {
  const environment = getAPI();

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [stories, setStories] = useState([]);

  // Busca pelo número de usuário que fizeram um post relacionados com o usuário logado
  const [usersFetched, setUsersFetched] = useState(0);

  // Faz um filro em que o id do post seja igual ao id do usuário
  const getUserPostById = (postUserId) => users.find((user) => postUserId === user.id);

  // GET - Buscando todos os usuários
  useEffect(() => {
    const endpoint = `${environment}/users`;

    fetch(endpoint)
      .then((res) => res.json())
      .then(data => {
        setUsers(data);
      })
  }, [])

  // GET - Buscando todos os usuários relacionados ao usuário logado
  useEffect(() => {
    if (usersFetched === users.length) {
      return;
    } 

    const endpoint = `${environment}/users/${users[usersFetched].id}/posts`;

    fetch(endpoint)
      .then((res) => res.json())
      .then(data => {
        setPosts([...posts, ...data]);
        setUsersFetched(usersFetched + 1);
      })
  }, [users, usersFetched])

  // GET - Buscando pelos os stores
  useEffect(() => {
    const endpoint = `${environment}/stories`;

    fetch(endpoint)
      .then((res) => res.json())
      .then(data => {
        setStories(data)
      })
  }, [])

  return (
    <div data-testid="feed-route">
      {
        (users.length > 0 && stories.length >  0 && (
          <Stories 
            stories={stories}
            getUserHandler={getUserPostById}
          />
        ))
      }
      {
        users.length !== usersFetched ?
        <Loading /> :
        (
          <Posts 
            posts={posts} 
            getUserHandler={getUserPostById}
          />
        )
      }
    </div>
  );
};

export default FeedRoute;
