import style from './PostContent.module.css';
import PropTypes from 'prop-types';

const PostContent = ({title, author}) => (
  <div className={style.content}>
    <h2 className={style.title}>
      <a className={style.linkPost} href='#post'>
        {title}
      </a>
    </h2>
    <a className={style.linkAuthor} href='#autor'>{author}</a>
  </div>
);

PostContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default PostContent;
