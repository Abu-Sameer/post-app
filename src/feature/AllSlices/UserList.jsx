import React from 'react';
import { useSelector } from 'react-redux';
import { sellectAllUsers } from './UserSlice';
import { Link } from 'react-router-dom';

export default function UserList() {
  const users = useSelector(sellectAllUsers);

  const renderedUsers = users.map((user) => (
    <li key={user.id}>
      <Link to={`/user/${user.id}`}>{user.name}</Link>
    </li>
  ));
  return (
    <div className="text-light">
      <h2 style={{ textDecoration: 'underline' }}>Authors</h2>
      <ul>{renderedUsers}</ul>
    </div>
  );
}
