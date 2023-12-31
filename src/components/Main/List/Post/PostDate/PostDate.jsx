import style from './PostDate.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../../../utils/formatDate';

const PostDate = ({date}) => (
  <time className={style.date} dateTime={date}>{formatDate(date)}</time>
);

PostDate.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default PostDate;
