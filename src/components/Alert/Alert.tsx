import React from 'react';

type AlertProps = {
  // define your props here
}

const Alert: React.FC<AlertProps> = (props) => {
  return (
    <div data-testid="Alert" {...props}>
      Alert component
    </div>
  );
};

export default Alert;
