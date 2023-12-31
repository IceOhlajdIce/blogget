import style from './Text.module.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Text = (props) => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    fontWeight,
    className,
    children,
    href,
    center,
    onClick,
  } = props;

  const classes = classNames(
    className,
    style[color],
    style[fontWeight],
    {[style.center]: center},
    {[style[`fs${size}`]]: size},
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fsd${dsize}`]]: dsize},
  );

  return <As className={classes} href={href} onClick={onClick}>{children}</As>;
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  fontWeight: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.node,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
  onClick: PropTypes.func,
};
