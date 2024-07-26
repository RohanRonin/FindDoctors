import React from 'react';
import './CardData.css';

const Card = ({ title, content, linkText, linkHref, icon }) => {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <h2>{title}</h2>
      <p>{content}</p>
      <a href={linkHref}>{linkText}</a>
    </div>
  );
};

const CardData = () => {
  const hospitalCardsData = [
    {
      title: 'KMCH Hospital',
      content: 'Backdrop CMS includes three pre-defined types of content: Pages, Posts, and Cards. Custom content types can also be added.',
      linkText: 'Learn more about content types',
      linkHref: '#',
      icon: 'path/to/icon1.png' // Update with the correct path to the icon
    },
    {
      title: 'What is a Card?',
      content: 'A Card can only be seen as part of another page. Place them individually as "Existing content" Blocks, or grouped as in a View.',
      linkText: 'Learn more about Cards',
      linkHref: '#',
      icon: 'path/to/icon2.png' // Update with the correct path to the icon
    },
    {
      title: 'The Home page layout',
      content: 'Use the home page layout to specifically customize this page. These Cards only appear on this layout.',
      linkText: 'Learn more about the Home page',
      linkHref: '#',
      icon: 'path/to/icon3.png' // Update with the correct path to the icon
    },
    // Add more card data here
  ];

  const doctorCardsData = [
    {
      title: 'Organize your content',
      content: 'Backdrop CMS includes three pre-defined types of content: Pages, Posts, and Cards. Custom content types can also be added.',
      linkText: 'Learn more about content types',
      linkHref: '#',
      icon: 'path/to/icon1.png' // Update with the correct path to the icon
    },
    {
      title: 'What is a Card?',
      content: 'A Card can only be seen as part of another page. Place them individually as "Existing content" Blocks, or grouped as in a View.',
      linkText: 'Learn more about Cards',
      linkHref: '#',
      icon: 'path/to/icon2.png' // Update with the correct path to the icon
    },
    {
      title: 'The Home page layout',
      content: 'Use the home page layout to specifically customize this page. These Cards only appear on this layout.',
      linkText: 'Learn more about the Home page',
      linkHref: '#',
      icon: 'path/to/icon3.png' // Update with the correct path to the icon
    },
    // Add more card data here
  ];

  return (
    <div>
      <div className="section">
        <h1>Hospitals</h1>
        <div className="card-list">
          {hospitalCardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              content={card.content}
              linkText={card.linkText}
              linkHref={card.linkHref}
              icon={card.icon}
            />
          ))}
        </div>
      </div>

      <div className="section">
        <h1>Doctors</h1>
        <div className="card-list">
          {doctorCardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              content={card.content}
              linkText={card.linkText}
              linkHref={card.linkHref}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardData;
