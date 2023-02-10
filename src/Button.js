import React from 'react';
import Proptypes from 'prop-types';

export default function Button({ text }) {
  return <div>{text}</div>;
}

Button.prototype = {
  text: Proptypes.string.isRequired,
};
