import React, { useState, useEffect } from 'react';

import UsersList from '../../containers/UsersList/UsersList';

import { getAPI } from '../environment';

const environment = getAPI();

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${environment}/users`)
      .then((res) => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
