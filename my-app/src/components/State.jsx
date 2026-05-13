import React from 'react';
import './../styles/State.css';
// import myLogo from '../assets/download.jpg';

const AboutSection = () => {
  return (
    <section className="about-container">
      {/* الجزء الأيسر: النصوص والمميزات */}
      <div className="content-side">
        <h2 className="main-title">Technology with Heart</h2>
        <p className="description">
          ABSIR is more than just an application—it's a commitment to 
          making the world more accessible. Using state-of-the-art image 
          processing <br/>and machine learning, we're breaking down visual 
          barriers <br/>and creating opportunities for independence.
        </p>

        <div className="features-list">
          {/* ميزة 1 */}
          <div className="feature-item">
            <div className="icon-box yellow-bg">🎯</div>
            <div className="feature-text">
              <h4>Precision & Accuracy</h4>
              <p>Trained on millions of images to provide reliable and accurate results.</p>
            </div>
          </div>

          {/* ميزة 2 */}
          <div className="feature-item">
            <div className="icon-box yellow-bg">🌐</div>
            <div className="feature-text">
              <h4>Global Impact</h4>
              <p>Supporting users in over 50 countries and 20+ languages.</p>
            </div>
          </div>

          {/* ميزة 3 */}
          <div className="feature-item">
            <div className="icon-box yellow-bg">💡</div>
            <div className="feature-text">
              <h4>Continuous Innovation</h4>
              <p>Regular updates with new features based on user feedback.</p>
            </div>
          </div>
        </div>
      </div>

      {/* الجزء الأيمن: الصورة */}
      {/* <div className="image-side5">
        <div className="image-wrapper5">
          <img src={myLogo} alt="Unity in Diversity"/>
        </div>
      </div> */}
    </section>
  );
};

export default AboutSection;