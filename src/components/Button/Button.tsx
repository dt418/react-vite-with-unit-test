import React from 'react';

type ButtonProps = {
  // define your props here
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div data-testid="Button" {...props}>
      Button component
    </div>
  );
};

export default Button;
