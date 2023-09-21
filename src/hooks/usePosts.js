import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../store/store';

export const usePosts = () => {
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!token) return;
    const res = [];

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const postsData = data.data.children;
        postsData.forEach((element) => {
          const img = element.data.thumbnail.replace(/\?.*$/, '');
          const postData = {
            thumbnail: img.startsWith('https:') ? img : '',
            title: element.data.title,
            author: element.data.author,
            ups: element.data.ups,
            date: element.data.created,
            id: element.data.id,
          };
          res.push(postData);
        });
        setData(res);
      })
      .catch((err) => {
        if (err.message === '401') {
          dispatch(deleteToken());
        }
      });
  }, [token]);

  return [data];
};
