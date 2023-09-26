import Header from './components/Header';
import Main from './components/Main';
import {useDispatch} from 'react-redux';
import {Route, Routes} from 'react-router-dom';

import {updateToken} from './store/tokenReducer';
import {getToken} from './hooks/token';

function App() {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));

  return (
    <Routes>
      <Route path='*' element={
        <>
          <Header />
          <Main />
        </>
      } />
    </Routes>
  );
}

export default App;
