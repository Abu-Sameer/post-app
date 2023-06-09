import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addNewPost } from '../AllSlices/PostSlice';
import { addPost } from '../AllSlices/PostSlice';
import { sellectAllUsers } from '../AllSlices/UserSlice';
import { useNavigate } from 'react-router-dom';

export default function PostAdd() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  // const [addRequestStatus, setAddRequestStatus] = useState('idle');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(sellectAllUsers);

  // const cansave =
  //   [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

  function saveClick() {
    // if (cansave) {
    //   try {
    //     setAddRequestStatus('pending');
    //     dispatch(addNewPost({ title, body: content, userId })).unwrap();
    //     setContent('');
    //     setTitle('');
    //     setUserId('');
    //   } catch (err) {
    //     console.error('Failed to save the post', err);
    //   } finally {
    //     setAddRequestStatus('idle');
    //   }
    // }
    if (cansave) {
      dispatch(addPost(title, content, userId));
      setTitle('');
      setContent('');
      navigate('/');
    }
  }
  const cansave = [title, content, userId].every(Boolean);

  return (
    <div className="container text-start w-50">
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
