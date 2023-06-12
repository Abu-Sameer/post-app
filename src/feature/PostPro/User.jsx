import React from 'react';
import { useSelector } from 'react-redux';
import { sellectAllUsers } from '../AllSlices/UserSlice';

export default function User({ userId }) {
  const allUser = useSelector(sellectAllUsers);
  const author = allUser.find((users) => users.id === userId);
  return <span>by: {author ? author.name : 'Unknown Author'}</span>;
}
