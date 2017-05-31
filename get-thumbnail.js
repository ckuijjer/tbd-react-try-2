const fetch = require('isomorphic-fetch');

const subreddit = 'kitty';

fetch(`https://www.reddit.com/r/${subreddit}/hot.json?raw_json=1`)
  .then(response => response.json())
  .then(response => {
    return response.data.children.map(child => {
      // get the first image
      const image = child.data.preview.images[0];

      return image.resolutions
        .filter(resolution => resolution.width === 216)
        .map(resolution => resolution.url)[0];
    });
  })
  .then(thumbnails => console.log(JSON.stringify(thumbnails, null, 2)))
