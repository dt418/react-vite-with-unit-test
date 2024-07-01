import React from 'react';

type AlertProps = {
  // define your props here
};

const Alert: React.FC<AlertProps> = (props) => {
  return (
    <div
      data-testid="Alert"
      {...props}
      className="flex w-full border-l-6 border-warning bg-warning bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9"
    >
      Alert component
    </div>
  );
};

export default Alert;
