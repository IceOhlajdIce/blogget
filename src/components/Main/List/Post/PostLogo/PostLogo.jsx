import style from './PostLogo.module.css';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg';

const PostLogo = ({title}) => (
  <img className={style.img} src={notphoto} alt={title} />
);

PostLogo.propTypes = {
  title: PropTypes.string,
};

export default PostLogo;
