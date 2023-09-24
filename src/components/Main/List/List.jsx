import {usePosts} from '../../../hooks/usePosts';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const [data, loading] = usePosts();

  return (
    <ul className={style.list}>
      {
        loading ? (<p>Loading...</p>) : (
          data.length > 0 ? (
            data.map((postData) => (
              <Post key={postData.id} postData={postData} />
            ))
          ) : 'Please, login first...'
        )
      }
    </ul>
  );
};
