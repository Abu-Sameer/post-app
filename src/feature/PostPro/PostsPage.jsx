import { useDispatch, useSelector } from 'react-redux';
import { removePost, selectAll } from '../AllSlices/PostSlice';
import User from './User';
import ReactionButton from './ReactionButton';
// import TimeAgo from './TimeAgo';

export default function PostsPage() {
  const addedpost = useSelector(selectAll);
  const dispatch = useDispatch();

  // Show new post at the top
  // const orderedPosts = addedpost
  //   .slice()
  //   .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="container-fluid mt-3">
      <h2 className=" text-light">Posts</h2>
      <div className="row mb-4 ">
        {addedpost.map((post) => {
          return (
            <div key={post.id} className="col-md-4 my-3 mb-sm-0">
              <div className="card text-center border-light text-light bg-dark h-100">
                <div className="card-body text-start">
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-text">{post.content}</p>
                  <p className="fs-5">
                    <User userId={post.userId} />
                    {/* <TimeAgo timestamp={post.date} /> */}
                  </p>
                  <ReactionButton post={post} />
                </div>
                <footer className="card-footer border-light">
                  <button
                    onClick={() => dispatch(removePost(post.id))}
                    className="btn btn-danger"
                  >
                    Remove Post
                  </button>
                </footer>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
