import React from 'react';
import Gallery from './Gallery';
import _ from 'lodash';

export default class GalleryContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    }
  }

  componentDidMount() {
    this.getImages();
  }

  getImages() {
    const SUBREDDIT = 'kitten';

    fetch(`https://www.reddit.com/r/${SUBREDDIT}/hot.json?raw_json=1&limit=24`)
      .then(response => response.json())
      .then(response => {
        return response.data.children
          .map(child => {
            const id = _.get(child, 'data.name');
            const resolutions = _.get(child, 'data.preview.images[0].resolutions', [])
            const url = resolutions
              .filter(resolution => resolution.width === 320)
              .map(resolution => resolution.url)[0];

            return {
              id,
              url
            }
          })
          .filter(thumbnail => thumbnail !== undefined);
      })
      .then(images => {
        this.setState({ images })
      })
  }

  render() {
    return (
      <Gallery images={this.state.images} />
    )
  }
}