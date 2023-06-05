import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../AllSlices/PostSlice';
import { sellectAllUsers } from '../AllSlices/UserSlice';

export default function PostAdd() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const dispatch = useDispatch();
  const users = useSelector(sellectAllUsers);

  function saveClick() {
    if (content && title) {
      dispatch(addPost(title, content, userId));
      setContent('');
      setTitle('');
    }
  }

  const cansave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <div className="container text-start w-50">
      <h2 className=" text-light">Add New Post</h2>
      <div className="">
        <div className="mb-3">
          <label className="form-label text-light">Post Title:</label>
          <input
            type="text"
            className="form-control sm-12"
            name="postTitle"
            onChange={(e) => setTitle(e.target.value)}
            autoComplete="off"
            value={title}
          />
        </div>
        <div className="mb-3 sm-12">
          <label className="form-label text-light">Author: </label>
          <select
            onChange={(e) => setUserId(e.target.value)}
            value={userId}
            className="form-select text-center"
          >
            <option>...select...</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label text-light">Content:</label>
          <textarea
            className="form-control"
            name="postContent"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            rows="3"
          />
        </div>
        <button
          onClick={saveClick}
          disabled={!cansave}
          className="btn btn-primary"
        >
          Save Post
        </button>
      </div>
    </div>
  );
}
