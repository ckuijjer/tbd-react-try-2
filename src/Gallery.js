import React, { Component } from 'react';

import ImageGrid from './ImageGrid';
import FullScreenImage from './FullScreenImage';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullscreenImage: null,
    }
  }

  openFullscreenImage = (fullscreenImage) => {
    this.setState({
      fullscreenImage
    });
  }

  closeFullScreenImage = () => {
    this.setState({
      fullscreenImage: null,
    });
  }

  render() {
    const { images } = this.props;

    return (
      <div>
        <ImageGrid images={images} onImageClick={this.openFullscreenImage} />
        { this.state.fullscreenImage && <FullScreenImage image={this.state.fullscreenImage} onClick={this.closeFullScreenImage} /> }
      </div>
    );
  }
}

export default Gallery;
