import Layout from './component/Layout';
import PostAdd from './feature/PostPro/PostAdd';
import PostsPage from './feature/PostPro/PostsPage';
// import { fetchUsers } from './feature/AllSlices/UserSlice';
import { Routes, Route } from 'react-router-dom';
import SinglePostPage from './feature/PostPro/SinglePostPage';
import EditPostForm from './feature/PostPro/EditPostForm';

// store.dispatch(fetchUsers());
function App() {
  return (
    <div className=" text-center">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsPage />} />
          <Route path="post">
            <Route index element={<PostAdd />} />
            <Route path=":postId" element={<SinglePostPage />} />
            <Route path="edit/:postId" element={<EditPostForm />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
