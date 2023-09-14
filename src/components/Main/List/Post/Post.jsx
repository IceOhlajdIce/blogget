import style from './Post.module.css';
import PropTypes from 'prop-types';
import PostLogo from './PostLogo/PostLogo';
import PostContent from './PostContent/PostContent';
import PostRating from './PostRating/PostRating';
import PostDate from './PostDate/PostDate';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;

  return (
    <li className={style.post}>
      <PostLogo title={title}/>
      <PostContent title={title} author={author} />
      <PostRating ups={ups} />
      <PostDate date={date} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
