import style from './PostLogo.module.css';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg';

const PostLogo = ({thumbnail, title}) => (
  <img className={style.img}
    src={thumbnail ? thumbnail : notphoto} alt={title} />
);

PostLogo.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};

export default PostLogo;
