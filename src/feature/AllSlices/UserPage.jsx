import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectUserById } from './UserSlice';
import { selectAll } from './PostSlice';

export default function UserPage() {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, userId));
  const allPosts = useSelector(selectAll);

  const postsForUsers = useSelector((state) => {
    const allPosts = selectAll(state);
    return allPosts.filter((post) => post.userId === userId);
  });

  const postTitles = postsForUsers.map((post) => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));
  return (
    <div className="text-light">
      <h4>
        {user?.name}'s Post{user && allPosts.length > 1 ? 's' : ''}
      </h4>
      <ol>{postTitles}</ol>
    </div>
  );
}
