import Header from './components/Header';
import Main from './components/Main';
import {TokenContextProvider} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';
import {PostsContextProvider} from './context/postsContext';
import {CommentContextProvider} from './context/commentContext';
import {Provider} from 'react-redux';
import {store} from './store/store';

function App() {
  return (
    <Provider store={store}>
      <TokenContextProvider>
        <AuthContextProvider>
          <Header />
          <PostsContextProvider>
            <CommentContextProvider>
              <Main />
            </CommentContextProvider>
          </PostsContextProvider>
        </AuthContextProvider>
      </TokenContextProvider>
    </Provider>
  );
}

export default App;
