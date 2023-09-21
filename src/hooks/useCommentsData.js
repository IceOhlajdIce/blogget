import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';

export const useCommentsData = (id) => {
  const token = useSelector(state => state.token);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const postData = data[0].data.children;
        const commentsData = data[1].data.children;
        setPost(postData[0].data);
        setComments(commentsData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);

  return [post, comments];
};
