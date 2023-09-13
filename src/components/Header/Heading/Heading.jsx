import style from './Heading.module.css';
import {string} from 'prop-types';

export const Heading = ({text}) => (
  <h2 className={style.heading}>{text}</h2>
);

Heading.propTypes = {
  text: string,
};
