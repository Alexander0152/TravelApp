import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'assets/images/USA1.jpg',
    thumbnail: 'assets/images/USA1.jpg',
  },
  {
    original: 'assets/images/USA2.jpg',
    thumbnail: 'assets/images/USA2.jpg',
  },
  {
    original: 'assets/images/USA3.jpg',
    thumbnail: 'assets/images/USA3.jpg',
  },
  {
    original: 'assets/images/USA4.jpg',
    thumbnail: 'assets/images/USA4.jpg',
  },
  {
    original: 'assets/images/USA5.jpg',
    thumbnail: 'assets/images/USA5.jpg',
  },
  {
    original: 'assets/images/USA6.jpg',
    thumbnail: 'assets/images/USA6.jpg',
  }
];

class CountryPageSlider extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default CountryPageSlider;