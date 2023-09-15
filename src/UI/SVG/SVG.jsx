import PropTypes from 'prop-types';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {ReactComponent as DeleteIcon} from './img/delete.svg';
import {ReactComponent as SearchIcon} from './img/search.svg';
import {ReactComponent as LoginIcon} from './img/login.svg';

export const SVG = ({icon, width, height, className}) => {
  switch (icon) {
    case 'ArrowIcon':
      return (
        <ArrowIcon width={width} height={height}/>
      );
    case 'HomeIcon': {
      return (
        <HomeIcon width={width} height={height}/>
      );
    }
    case 'TopIcon': {
      return (
        <TopIcon width={width} height={height}/>
      );
    }
    case 'BestIcon': {
      return (
        <BestIcon width={width} height={height}/>
      );
    }
    case 'HotIcon': {
      return (
        <HotIcon width={width} height={height}/>
      );
    }
    case 'DeleteIcon': {
      return (
        <DeleteIcon width={width} height={height}/>
      );
    }
    case 'SearchIcon': {
      return (
        <SearchIcon width={width} height={height}/>
      );
    }
    case 'LoginIcon': {
      return (
        <LoginIcon width={width} height={height} className={className}/>
      );
    }
    default: return null;
  }
};

SVG.propTypes = {
  icon: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};
