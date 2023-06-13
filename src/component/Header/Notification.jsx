import React from 'react';
import { useSelector } from 'react-redux';
import { selectAll } from '../../feature/AllSlices/PostSlice';

export default function Notification() {
  const posts = useSelector(selectAll);
  return (
    <div>
      <div className="">
        <span className="fs-4 me-2 fw-bold text-light">
          Post{posts.length > 1 ? 's' : ''}
        </span>
        <span className="fs-4 badge bg-light text-dark">
          {posts.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </div>
    </div>
  );
}
