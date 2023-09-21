import React from 'react';
import PropTypes from 'prop-types';

export const commentContext = React.createContext({});

export const CommentContextProvider = ({children}) => {
  const [value, setValue] = React.useState('');

  return (
    <CommentContextProvider value={{value, setValue}}>
      {children}
    </CommentContextProvider>
  );
};

CommentContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
