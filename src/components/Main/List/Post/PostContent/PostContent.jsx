import style from './PostContent.module.css';
import {useState} from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';
import {Text} from '../../../../../UI/Text';
import {Modal} from '../../../../Modal/Modal';

const PostContent = ({title, author, id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text As='a' size={18} tsize={24} className={style.linkPost} href='#post'
          onClick={() => setIsModalOpen(true)}>
          {title}
        </Text>
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
      {isModalOpen && <Modal id={id} setClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

PostContent.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};

export default PostContent;
