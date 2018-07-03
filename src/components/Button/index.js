import PropTypes from 'prop-types';
import React from 'react';

import './Button.css';

const Button = ({children, className, onClick, type = 'button', Icon = null}) => {
  let cssClasses = `Button ${Icon ? 'Button__icon' : ''}`;
  cssClasses = `${cssClasses} ${className ? className : ''}`.trim();

  return (
    <button className={cssClasses} onClick={onClick} type={type}>
      {Icon ? <span className='Button__img'><Icon />&nbsp;</span> : null}
      <span>{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  Icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  type: PropTypes.oneOf(['button', 'reset', 'submit'])
};

export default Button;
