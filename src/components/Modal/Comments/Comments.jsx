import style from './Comments.module.css';
import PropTypes from 'prop-types';
import PostDate from '../../Main/List/Post/PostDate/PostDate';

export const Comments = ({comment, author, date}) => (
  <div className={style.item}>
    <p>{comment}</p>
    <div className={style.wrapper}>
      <h3>{author}</h3>
      <PostDate date={date} />
    </div>
  </div>
);

Comments.propTypes = {
  comment: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.number,
};
