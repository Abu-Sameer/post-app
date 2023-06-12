import { useSelector } from 'react-redux';
import {
  selectAll,
  // getPostError,
  // getPostStatus,
  // fetchPosts,
} from '../AllSlices/PostSlice';
import PostExcert from './PostExcert';
// import { useEffect } from 'react';

export default function PostsPage() {
  const addedpost = useSelector(selectAll);
  // const addedStatus = useSelector(getPostStatus);
  // const addedError = useSelector(getPostError);

  // useEffect(() => {
  //   if (addedStatus === 'idle') {
  //     dispatch(fetchPosts());
  //   }
  // }, [dispatch, addedStatus]);

  // Show new post at the top
  const orderedPost = addedpost
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  // let content;
  // if (addedStatus === 'loading') {
  //   content = <p>"Loading..."</p>;
  // } else if (addedStatus === 'succeeded') {
  //   content = addedpost.slice().sort((a, b) => b.date.localeCompare(a.date));
  // } else if (addedStatus === 'failed') {
  //   content = <p>{addedError}</p>;
  // }

  return (
    <div className="container-fluid">
      <div className="row mb-4 ">
        {orderedPost.map((post) => (
          <PostExcert key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
