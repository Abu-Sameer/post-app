import { useSelector } from 'react-redux';
import { selectPostById } from '../AllSlices/PostSlice';
import User from './User';
import TimeAgo from './TimeAgo';
import ReactionButton from './ReactionButton';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function SinglePostPage() {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, postId));

  if (!post) {
    return (
      <section>
        <h2 className="text-light">Post not found!</h2>
      </section>
    );
  }

  return (
    <div className="container d-flex justify-content-center mb-4">
      <div className="col-md-4">
        <div className="card text-center border-light text-light bg-dark my-3 h-100">
          <div className="card-body text-start">
            <h3 className="card-title">{post.title}</h3>
            <p className="card-text">{post.content}</p>
            <div>
              <Link className="me-2" to={`/post/edit/${post.id}`}>
                Edit Post
              </Link>
              <User userId={post.userId} />
              <TimeAgo timestamp={post.date} />
            </div>
            <ReactionButton post={post} />
          </div>
        </div>
      </div>
    </div>
  );
}
