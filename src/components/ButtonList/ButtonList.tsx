import React from 'react';

import Button, { ButtonProps } from '../Button/Button';

type ButtonListProps = {
  // define your props here
  buttons: ButtonProps[];
};

const ButtonList: React.FC<ButtonListProps> = ({ buttons }) => {
  return (
    <div
      data-testid="ButtonList"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
    >
      {Array.from(buttons ?? []).map((btn, index) => (
        <Button {...btn} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
