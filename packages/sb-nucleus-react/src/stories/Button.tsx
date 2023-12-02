import React from 'react';
import PropTypes from 'prop-types';
import { NucleusButton, defineCustomElements } from 'nucleus-react';

/**
 * Primary UI component for user interaction
 */
defineCustomElements();
export const Button: React.FC = ({ ...props }) => {
  const buttonProperties = props;
  console.log(buttonProperties);
  return (
    <NucleusButton buttontype='callToAction'>Button</NucleusButton>
  );
};

Button.propTypes = {
  buttonType: PropTypes.string,
};

Button.defaultProps = {
  buttonType: 'primary'
};
