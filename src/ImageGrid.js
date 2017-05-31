import React from 'react';
import Image from './Image';

const ImageGrid = ({ images = [], onImageClick = () => {} }) => {
  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: 16,
  }

  return (
    <div style={style}>
      { images.map(image => <Image image={image} onClick={onImageClick} />) }
    </div>
  );
};

export default ImageGrid;