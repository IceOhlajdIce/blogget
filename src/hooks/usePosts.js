import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const usePosts = () => {
  const {token, delToken} = useContext(tokenContext);
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
        if (err.status === 401) {
          delToken();
        }
      });
  }, [token]);

  return [data];
};
