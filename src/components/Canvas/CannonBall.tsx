import React from 'react';

const CannonBall = ({position}) => {
  const ballStyle = {
    fill: '#777',
    stroke: '#444',
    strokeWidth: '2px',
  };
  return (
    <ellipse
      style={ballStyle}
      cx={position.x}
      cy={position.y}
      rx="16"
      ry="16"
    />
  );
};

export default CannonBall;