import style from './PostContent.module.css';
import PropTypes from 'prop-types';
import Button from './Button/Button';
import {Text} from '../../../../../UI/Text';
import {Link, useParams} from 'react-router-dom';

const PostContent = ({title, author, id}) => {
  const {page} = useParams();

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Link className={style.linkPost} to={`/category/${page}/post/${id}`}>
          <Text size={18} tsize={24} className={style.linkPost}>
            {title}
          </Text>
        </Link>
      </Text>
      <Text
        As='a'
        color='orange'
        size={12}
        tsize={14}
        className={style.linkAuthor}
        href='#autor'>
        {author}
      </Text>
      <Button />
    </div>
  );
};

PostContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};

export default PostContent;
