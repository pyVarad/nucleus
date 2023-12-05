import React from 'react';
import PropTypes from 'prop-types';
import { NucleusButton } from 'nucleus-react';

type ButtonTypes = 'primary' | 'text' | 'callToAction' | 'outline';

interface ButtonProps {
  label?: string;
  buttontype?: ButtonTypes
};


export const Button: React.FC<ButtonProps> = (
  { buttontype, label }) => {
  return (
    <NucleusButton buttontype={buttontype}>
      {label}
    </NucleusButton>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  buttontype: PropTypes.oneOf<ButtonTypes>(['primary', 'text', 'callToAction', 'outline']),
};

Button.defaultProps = {
  label: 'Primary Button',
  buttontype: 'primary'
};
