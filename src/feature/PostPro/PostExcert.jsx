import ReactionButton from './ReactionButton';
import TimeAgo from './TimeAgo';
import User from './User';
import { Link } from 'react-router-dom';

export default function PostExcert({ post }) {
  return (
    <div key={post.id} className="col-md-4 my-3">
      <div className="card text-center border-light text-light bg-dark h-100">
        <div className="card-body text-start">
          <h3 className="card-title">{post.title}</h3>
          <p className="card-text">{post.content.substring(0, 75)}...</p>
          {/* <p className="card-text">{post.body.substring(0, 100)}</p> */}
          <div>
            <Link className="me-2" to={`post/${post.id}`}>
              View Post
            </Link>
            <User userId={post.userId} />
            <TimeAgo timestamp={post.date} />
          </div>
          <ReactionButton post={post} />
        </div>
      </div>
    </div>
  );
}
