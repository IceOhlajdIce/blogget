import style from './PostLogo.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';

const PostLogo = ({title}) => (
  <img className={style.img} src={notphoto} alt={title} />
);

PostLogo.propTypes = {
  title: PropTypes.string,
};

export default PostLogo;
