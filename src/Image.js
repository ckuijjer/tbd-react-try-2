import React from 'react';

const Image = ({ image, onClick = () => {} }) => {
  const style = {
    paddingBottom: '100%',
    background: `url('${image.url}') center / cover`,
  };

  return (
    <div style={style} onClick={() => onClick(image)} />
  );
};

export default Image;
