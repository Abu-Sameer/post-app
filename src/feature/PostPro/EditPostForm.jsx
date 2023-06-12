import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { sellectAllUsers } from '../AllSlices/UserSlice';
import { useState } from 'react';
import { removePost, selectPostById, updatePost } from '../AllSlices/PostSlice';

export default function EditPostForm() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = useSelector((state) => selectPostById(state, postId));
  const users = useSelector(sellectAllUsers);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.content);
  const [userId, setUserId] = useState(post?.userId);

  const dispatch = useDispatch();

  if (!post) {
    return (
      <section>
        <h2 className="text-light">Post not found!</h2>
      </section>
    );
  }

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
      dispatch(
        updatePost({
          title,
          content,
          userId,
          id: post.id,
          reactions: post.reactions,
        })
      );
      setTitle('');
      setContent('');
      navigate(`/post/${postId}`);
    }
  }

  function deletePost() {
    // try {
    //   setAddRequestStatus('pending');
    //   dispatch(removePost({ id: post.id})).unwrap();
    //   setContent('');
    //   setTitle('');
    //   setUserId('');
    //   navigate('/')
    // } catch (err) {
    //   console.error('Failed to delete the post', err);
    // } finally {
    //   setAddRequestStatus('idle');
    // }

    dispatch(removePost(post.id));
    setTitle('');
    setContent('');
    setUserId('');
    navigate('/');
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
            className="form-select text-center"
            defaultValue={userId}
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
          Save Edit
        </button>
        <button
          onClick={() => navigate(`/post/${postId}`)}
          className="btn btn-light ms-5"
        >
          Cancel Edit
        </button>
        <button onClick={deletePost} className="btn btn-danger ms-5">
          Delete Post
        </button>
      </div>
    </div>
  );
}
