import * as React from "react";

type IconPosition = 'up' | 'down' | 'left' | 'right';

interface SvgIconProps {
  position?: IconPosition;
}

const NextIcon : React.FC<SvgIconProps> = ({ position = 'down'  } ) => {
  const getRotation = () => {
    switch (position) {
      case 'up':
        return 'rotate(180deg)';
      case 'left':
        return 'rotate(90deg)';
      case 'right':
        return 'rotate(-90deg)';
      case 'down':
      default:
        return 'rotate(0deg)';
    }
  };

  return (
    <svg
      style={{
        transform: getRotation(),
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="#213F7D"
        d="M11.057 3.994c.841-.841 2.102.462 1.261 1.26l-4.75 4.752a.842.842 0 0 1-1.261 0L1.64 5.38c-.799-.84.463-2.102 1.303-1.26l3.994 3.993z"
      />
    </svg>
  );
};

export default NextIcon;