// Description.js
import React from 'react';
import './Description.css';

const Description = () => {
  return (
    <div className="description-container">
      <div className="header">
        <img src="path/to/profile-image.jpg" alt="Dhanush" className="profile-img" />
        <div className="profile-info">
          <h1>Dhanush</h1>
          <p><strong>Also known as:</strong> Venkatesh Prabhu</p>
          <p><strong>Occupation:</strong> Actor • Producer • Singer • Special Appearances • Voice Cast • Director • Writer</p>
          <p><strong>Born:</strong> July 28, 1983</p>
          <p><strong>Birthplace:</strong> Tamil Nadu, India</p>
          <p><strong>Spouse:</strong> Aishwarya Rajinikanth</p>
          <p><strong>Children:</strong> 2</p>
        </div>
      </div>
      <div className="about">
        <h2>About</h2>
        <p>Venkatesh Prabhu Kasthuri Raja, better known by his screen name Dhanush, is one of the most talented and versatile artists in the Indian film industry who prominently works in Tamil movies. Apart from acting, the winner of three National awards and seven Filmfare awards has also worked as a producer, lyricist and playback singer. The actor made his debut in 2002 with Thulluvadho Ilamai, a coming-of-age film directed by his father, Kasthuri Raja and since...</p>
        <a href="#" className="read-more">Read More</a>
      </div>
      <div className="peers-more">
        <h2>Peers & More</h2>
        <div className="peers-list">
          <div className="peer">
            <img src="path/to/nayanthara.jpg" alt="Nayanthara" />
            <p>Nayanthara</p>
            <p>Actor</p>
          </div>
          <div className="peer">
            <img src="path/to/tamannaah.jpg" alt="Tamannaah Bhatia" />
            <p>Tamannaah Bhatia</p>
            <p>Actor</p>
          </div>
          <div className="peer">
            <img src="path/to/jayamravi.jpg" alt="Jayam Ravi" />
            <p>Jayam Ravi</p>
            <p>Actor</p>
          </div>
          <div className="peer">
            <img src="path/to/trisha.jpg" alt="Trisha Krishnan" />
            <p>Trisha Krishnan</p>
            <p>Actor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
