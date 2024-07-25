import React from 'react';
import Card from './Card';
import './CardData.css';

const cardsData = [
  {
    image: 'path-to-image1.jpg',
    title: 'Title 1',
    description: 'Description for card 1.',
  },
  {
    image: 'path-to-image2.jpg',
    title: 'Title 2',
    description: 'Description for card 2.',
  },
  {
    image: 'path-to-image3.jpg',
    title: 'Title 3',
    description: 'Description for card 3.',
  },
  {
    image: 'path-to-image4.jpg',
    title: 'Title 4',
    description: 'Description for card 4.',
  },
  {
    image: 'path-to-image5.jpg',
    title: 'Title 5',
    description: 'Description for card 5.',
  },
  {
    image: 'path-to-image6.jpg',
    title: 'Title 6',
    description: 'Description for card 6.',
  },
  {
    image: 'path-to-image6.jpg',
    title: 'Title 7',
    description: 'Description for card 6.',
  },
  {
    image: 'path-to-image6.jpg',
    title: 'Title 8',
    description: 'Description for card 6.',
  },
];

const CardData = () => {
  return (
    <div className="app">
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardData;
