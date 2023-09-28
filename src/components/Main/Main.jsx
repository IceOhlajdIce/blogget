import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Modal} from '../Modal/Modal';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from '../Pages/HomePage/HomePage';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal />} />
        </Route>
        <Route path="*" element={<div className={style.auth}>404</div>} />
        <Route path="/auth" element={<HomePage />} />
      </Routes>
    </Layout>
  </main>
);
