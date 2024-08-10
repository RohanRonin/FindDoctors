import React from 'react';
import './NewsCard.css';

const newsArticles = [
  {
    image: 'https://graph.org/file/40e4a1407d30d3e51295a.jpg',
    title: 'Groundbreaking Gene Therapy for Rare Diseases',
    date: 'August 6, 2024',
    author: 'medicalnews_admin',
    description: 'Researchers have developed a new gene therapy that shows promise in treating rare genetic disorders, offering hope to patients worldwide.',
    link: '#',
  },
  {
    image: 'https://graph.org/file/40e4a1407d30d3e51295a.jpg',
    title: 'New AI Tool Revolutionizes Medical Diagnostics',
    date: 'August 5, 2024',
    author: 'medicalnews_admin',
    description: 'A cutting-edge AI tool is now being used in hospitals to diagnose diseases faster and more accurately, potentially saving countless lives.',
    link: '#',
  },
  {
    image: 'https://graph.org/file/40e4a1407d30d3e51295a.jpg',
    title: 'Advances in Personalized Medicine for Cancer Patients',
    date: 'August 4, 2024',
    author: 'medicalnews_admin',
    description: 'Personalized medicine is taking a leap forward, with new treatments being tailored to the genetic makeup of individual cancer patients.',
    link: '#',
  }
];

const NewsCard = () => {
  return (
    <div className="news-page">
      <h1>Our Latest News</h1>
      <div className="news-container">
        {newsArticles.map((article, index) => (
          <div key={index} className="news-card">
            <img src={article.image} alt={article.title} className="news-image" />
            <div className="news-details">
              <div className="news-meta">
                <span className="news-author">{article.author}</span>
                <span className="news-date">{article.date}</span>
              </div>
              <h2 className="news-title">{article.title}</h2>
              <p className="news-description">{article.description}</p>
              <a href={article.link} className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-news">View All News</button>
    </div>
  );
};

export default NewsCard;
