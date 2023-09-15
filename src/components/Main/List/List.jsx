import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 24,
      date: '2022-02-24T09:45:00.000Z',
      id: '123',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 34,
      date: '2022-05-12T04:22:00.000Z',
      id: '234',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 44,
      date: '2022-03-04T12:45:00.000Z',
      id: '454',
    },
  ];

  return (
    <ul className={style.list}>
      {
        postsData.map((postData) => (
          <Post key={postData.id} postData={postData} />
        ))
      }
    </ul>
  );
};
