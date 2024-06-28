import React from 'react';

type ButtonProps = {
  // define your props here
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div data-testid="Button" {...props}>
      Button
    </div>
  );
};

export default Button;
