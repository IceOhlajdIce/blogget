import {Text} from '../../../../../UI/Text';
import style from './PostRating.module.css';
import PropTypes from 'prop-types';

const PostRating = ({ups}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг'/>
    <Text As='p' size={12} tsize={16} color='grey99' fontWeight='bold'>
      {ups}
    </Text>
    <button className={style.down} aria-label='Понизить рейтинг'/>
  </div>
);

PostRating.propTypes = {
  ups: PropTypes.number,
};

export default PostRating;
