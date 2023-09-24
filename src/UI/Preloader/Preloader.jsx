import {ClipLoader} from 'react-spinners/';
import {FadeLoader} from 'react-spinners/';
import PropTypes from 'prop-types';

export const Preloader = ({loader = 'Clip'}) => (
  <div>
    {loader === 'Clip' &&
      <ClipLoader color='#cc6633' css={{display: 'block'}} size={30} />
    }
    {loader === 'Fade' &&
      <FadeLoader color='#cc6633' css={{display: 'block'}} size={30} />
    }
  </div>
);

Preloader.propTypes = {
  loader: PropTypes.string,
};
