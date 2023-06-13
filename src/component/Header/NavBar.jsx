import React from 'react';
import Notification from './Notification';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary z-3 w-100">
      <div className="container-fluid">
        <Link
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          <Notification />
        </Link>
        <Link
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          <h2 className="text-light">Redux Blog Home</h2>
        </Link>

        <Link
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="post"
        >
          <h5 className="text-dark py-2 px-3 rounded bg-light">Add Post</h5>
        </Link>
        <Link
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
          to="user"
        >
          <h5 className="text-dark py-2 px-3 rounded bg-light">Users</h5>
        </Link>
      </div>
    </nav>
  );
}
