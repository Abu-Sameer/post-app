import { Provider } from 'react-redux';
import { store } from './store/Store';
import PostAdd from './feature/PostPro/PostAdd';
import PostsPage from './feature/PostPro/PostsPage';
function App() {
  return (
    <div className="container mt-4">
      <Provider store={store}>
        <PostAdd />
        <PostsPage />
      </Provider>
    </div>
  );
}

export default App;
