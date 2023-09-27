import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Modal} from '../Modal/Modal';
import {Route, Routes} from 'react-router-dom';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path="/" element={
          <div className={style.home}>
            <h2>Стартовая страница</h2>
            <h3>Добро пожаловать!</h3>
            <p>Выберите категорию</p>
          </div>
        } />
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal />} />
        </Route>
        <Route path="*" element={<div className={style.text}>404</div>} />
        <Route path="/auth"
          element={<div className={style.auth}>
            <h3>Выберите категорию</h3>
          </div>} />
      </Routes>
    </Layout>
  </main>
);
