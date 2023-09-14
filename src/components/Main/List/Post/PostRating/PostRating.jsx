import style from './PostRating.module.css';
import PropTypes from 'prop-types';

const PostRating = ({ups}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг'/>
    <p className={style.ups}>{ups}</p>
    <button className={style.down} aria-label='Поизить рейтинг'/>
  </div>
);

PostRating.propTypes = {
  ups: PropTypes.number,
};

export default PostRating;
