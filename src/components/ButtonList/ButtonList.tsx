import React from 'react';

import Button, { ButtonProps } from '../Button/Button';

export type ButtonListProps = {
  // define your props here
  buttons: ButtonProps[];
};

const ButtonList: React.FC<ButtonListProps> = ({ buttons = [] }) => {
  return (
    <div
      data-testid="ButtonList"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
    >
      {Array.from(buttons).map((btn, index) => (
        <Button {...btn} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
