import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import AI from './../assets/artificial_intelligence.json';
import './../styles/About.css';

// تأكدي من وجود الصور في مجلد assets داخل src
// import officeImg from '../assets/About.jpg'; 

const AboutPage = () => {
    return (
        <div className="about-container" id="about-section"> 
        {/* الجزء العلوي: العنوان الرئيسي */}
        <header className="about-header">
            <h1>About ABSIR</h1>
            <p className="main-subtitle">
            We're on a mission to make the visual world accessible to everyone 
            through innovative AI technology.
            </p>
        </header>

        {/* الجزء الثاني: النص والصورة */}
        <section className="mission-content">
            <div className="About-illustration">
                    <Player
                        autoplay
                        loop
                        src={AI}
                        style={{ height: '450px', width: '450px' }}
                    />
                </div>
            
            <div className="text-wrapper">
            <h2>Empowering Independence Through Technology</h2>
            <div className="description-text">
                <p>
                ABSIR was founded with a simple yet powerful belief: that everyone 
                deserves equal access to visual information. Our team of engineers, 
                designers, and accessibility experts work together so technology breaks 
                down barriers.
                </p>
                <p>
                What started as a research project has grown into a platform used by 
                over 10,000 people worldwide. Every day, we're inspired by the stories of 
                how ABSIR helps people live more independently, confidently navigate 
                their surroundings, and connect with the visual world in meaningful ways.
                </p>
                <p>
                We believe that accessibility isn't a feature—it's a fundamental right. 
                That's why we're committed to continuous improvement, listening to our 
                community, and pushing the boundaries of what's possible with AI and 
                machine learning.
                </p>
            </div>
            </div>
        </section>

        {/* الجزء الثالث: القيم (Values) */}
        <section className="values-section">
            <div className="value-card">
            <div className="icon-circle">❤️</div>
            <h3>Tech with Heart</h3>
            <p>We combine cutting-edge technology with genuine empathy and understanding of user needs.</p>
            </div>
            <div className="value-card">
            <div className="icon-circle">👥</div>
            <h3>Community First</h3>
            <p>Our users guide our development. Every feature is designed with direct input from the accessibility community.</p>
            </div>
            <div className="value-card">
            <div className="icon-circle">🎯</div>
            <h3>Purpose Driven</h3>
            <p>We measure success not just in metrics, but by the positive impact we make on people's daily lives.</p>
            </div>
            <div className="value-card">
            <div className="icon-circle">💡</div>
            <h3>Always Innovating</h3>
            <p>We're constantly exploring new ways to improve accessibility through the latest advances in AI.</p>
            </div>
        </section>

        {/* الجزء الرابع: الأرقام (Statistics) */}
        <footer className="stats-footer">
            <div className="stat-item">
                <span className="stat-number">2021</span>
                <span className="stat-label">Founded</span>
            </div>
            <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Active Users</span>
            </div>
            <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Countries Worldwide</span>
            </div>
        </footer>
        </div>
    );
};

export default AboutPage;