import React from 'react';

const FlyingObjectBase = ({position}) => {
  const style = {
    fill: '#979797',
    stroke: '#5c5c5c',
  };

  return (
    <ellipse
      cx={position.x}
      cy={position.y}
      rx="40"
      ry="10"
      style={style}
    />
  );
};


export default FlyingObjectBase;