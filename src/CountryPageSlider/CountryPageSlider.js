import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'assets/images/USA1.jpg',
    thumbnail: 'assets/images/USA1.jpg',
    description : 'The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan in New York City, United States. It was designed by Shreve, Lamb & Harmon and built from 1930 to 1931. Its name is derived from "Empire State", the nickname of the state of New York. The building has a roof height of 1,250 feet (380 m) and stands a total of 1,454 feet (443.2 m) tall, including its antenna. The Empire State Building stood as the worlds tallest building until the construction of the World Trade Center in 1970.'
  },
  {
    original: 'assets/images/USA2.jpg',
    thumbnail: 'assets/images/USA2.jpg',
    description: 'New York City (NYC), often simply called New York, is the most populous city in the United States. With an estimated 2019 population of 8,336,817 distributed over about 302.6 square miles (784 km2), New York City is also the most densely populated major city in the United States. Located at the southern tip of the State of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban landmass.'
  },
  {
    original: 'assets/images/USA3.jpg',
    thumbnail: 'assets/images/USA3.jpg',
    description: 'Miami, officially the City of Miami, is a coastal city located in southeastern Florida in the United States. It is the third most populous metropolis on the East coast of the United States, and it is the seventh largest in the country. The city has the third tallest skyline in the U.S. with over 300 high-rises, 55 of which exceed 491 ft (150 m).'
  },
  {
    original: 'assets/images/USA4.jpg',
    thumbnail: 'assets/images/USA4.jpg',
    description: 'Yellowstone National Park is an American national park located in the western United States, largely in the northwest corner of Wyoming and extending into Montana and Idaho. It was established by the U.S. Congress and signed into law by President Ulysses S. Grant on March 1, 1872. Yellowstone was the first national park in the U.S. and is also widely held to be the first national park in the world. The park is known for its wildlife and its many geothermal features, especially Old Faithful geyser, one of its most popular.'
  },
  {
    original: 'assets/images/USA5.jpg',
    thumbnail: 'assets/images/USA5.jpg',
    description: 'Las Vegas, officially the City of Las Vegas and often known simply as Vegas, is the 28th-most populous city in the United States, the most populous city in the state of Nevada, and the county seat of Clark County. The city anchors the Las Vegas Valley metropolitan area and is the largest city within the greater Mojave Desert. Las Vegas is an internationally renowned major resort city, known primarily for its gambling, shopping, fine dining, entertainment, and nightlife.'
  },
  {
    original: 'assets/images/USA6.jpg',
    thumbnail: 'assets/images/USA6.jpg',
    description: 'Florida is a state located in the Southeastern region of the United States. With a population of over 21 million, Florida is the third-most populous and the 22nd-most extensive of the 50 United States. The state is bordered to the west by the Gulf of Mexico, to the northwest by Alabama, to the north by Georgia, to the east by the Atlantic Ocean, and to the south by the Straits of Florida. The states capital is Tallahassee and its most populous municipality is Jacksonville.'
  }
];

class CountryPageSlider extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default CountryPageSlider;