// import React from 'react';
// import Logo from '../assets/our.jpg';
// import icon from '../icon/icons8-community-50.png';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar1';
// import Footer from './Footer';
// import '../styles/Learn.css';


// const steps = [
//     {
//         number: 1,
//         title: "Image Capture",
//         description:
//         "Users capture images through their device camera or upload existing photos. ABSIR works with any image source – whether it's a live camera feed, a photo from your gallery, or a screenshot.",
//         image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
//         imageAlt: "Image Capture",
//         reverse: false,
//     },
//     {
//         number: 2,
//         title: "AI Analysis",
//         description:
//         "Our neural networks process the image in milliseconds, identifying objects, text, colors, and spatial relationships. The system uses multiple AI models simultaneously to ensure comprehensive understanding.",
//         image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
//         imageAlt: "AI Analysis",
//         reverse: true,
//     },
//     {
//         number: 3,
//         title: "Accessible Output",
//         description:
//         "Results are presented through audio descriptions, haptic feedback, high-contrast visuals, or text-to-speech – whatever works best for each user. The interface adapts to individual accessibility needs.",
//         image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
//         imageAlt: "Accessible Output",
//         reverse: false,
//     },
// ];

// const features = [
//     {
//         icon: "👁",
//         title: "For Blind Users",
//         description: "Detailed audio descriptions of surroundings, text reading, and object identification help navigate the world independently.",
//     },
//     {
//         icon: "🎨",
//         title: "For Color-Blind Users",
//         description: "Real-time color correction and identification makes daily tasks like choosing clothes or reading charts effortless.",
//     },
//     {
//         icon: "⚡",
//         title: "Lightning Fast",
//         description: "Instant processing means you get the information you need exactly when you need it, without delays.",
//     },
//     {
//         icon: "🛡",
//         title: "Privacy First",
//         description: "Your images are processed securely and never stored without your permission. Your privacy is paramount.",
//     },
// ];

// const applications = [
//     { title: "Daily Navigation", description: "Identify obstacles, read street signs, recognize landmarks, and navigate unfamiliar environments with confidence." },
//     { title: "Reading & Documents", description: "Read books, menus, labels, forms, and any printed or digital text instantly with advanced OCR technology." },
//     { title: "Shopping & Products", description: "Identify products, read ingredient lists, check expiration dates, and make informed purchasing decisions." },
//     { title: "Social Interactions", description: "Recognize faces, understand facial expressions, and receive descriptions of social situations and environments." },
//     { title: "Work & Education", description: "Access presentations, read charts and graphs, and participate fully in educational and professional settings." },
//     { title: "Color Coordination", description: "Match clothing, identify colors in art and design, and understand color-coded information systems." },
// ];


// const LandingPage = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="main-wrapper">
//             <Navbar />
            
//             {/* 1. Hero Section */}
//             <section className="hero-section">
//                 <div className="container">
//                     <span className="breadcrumb" onClick={() => navigate(-1)}>
//                         ← Back to Home
//                     </span>
                    
//                     <div className="hero-grid">
//                         <h1 className="hero-title">The Technology Behind <br/>ABSIR</h1>
//                         <p className="hero-desc">
//                             Discover how we're using cutting-edge AI and machine learning to transform visual <br/>accessibility for millions of people worldwide.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* 2. Our Mission */}
//             <section className="mission-sOur deep learning models can identify objects, read text, recognize faces..ection container">
//                 <div className="mission-content">
//                     <div className="mission-text">
//                         <h2 className="section-label">Our Mission</h2>
//                         <p>ABSIR was created with a simple yet powerful goal: to make the world more accessible for everyone, regardless of their visual abilities. We believe that technology should empower, not exclude.</p>
//                         <p>Through advanced image processing and machine learning algorithms, ABSIR transforms the system that are available, instant, and continuous—making it possible for people who are blind and color-blind users.</p>
//                     </div>
//                     <div className="mission-img-wrapper">
//                         <img src={Logo} alt="AI representation" />
//                     </div>
//                 </div>
//             </section>

//             {/* 3. Core Technologies */}
//             <section className="core-tech container">
//                 <h2 className="section-title3">Core Technologies</h2>
//                 <p className="section-subtitle3">ABSIR leverages multiple AI technologies working in harmony to deliver accurate, real-time visual assistance.</p>
//                 <div className="tech-grid">
//                     <div className="tech-card">
//                         <span className="icon-box">👁️</span>
//                         <h3>Computer Vision</h3>
//                         <p>Our deep learning models can identify objects, read text, recognize faces, and understand complex scenes with 99% accuracy.</p>
//                         <div className='span1'>
//                             <span>Object detection and classification</span>
//                             <span>Optical character recognition (OCR)</span>
//                             <span>Scene understanding</span>
//                         </div>
//                     </div>
//                     <div className="tech-card">
//                         <span className="icon-box">🎨</span>
//                         <h3>Color Analysis</h3>
//                         <p>Advanced algorithms detect, analyze, and translate colors into accessible formats for color-blind users.</p>
//                         <div className='span1'>
//                             <span>Color blindness correction filters</span>
//                             <span>Color naming and description</span>
//                             <span>Pattern recognition</span>
//                         </div>
//                     </div>
//                     <div className="tech-card">
//                         <span className="icon-box">⚡</span>
//                         <h3>Real-Time Processing</h3>
//                         <p>Lightning-fast image analysis provides instant feedback, making ABSIR practical for everyday use.</p>
//                         <div className='span1'>
//                             <span>Edge computing for speed</span>
//                             <span>Offline capability</span>
//                             <span>Low latency response</span>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             <section className="how-it-works1">
//                 <h2 className="how-title">How ABSIR Works</h2>

//                 <div className="how-steps">
//                     {steps.map((step) => (
//                     <div
//                         key={step.number}
//                         className={`how-step ${step.reverse ? "how-step--reverse" : ""}`}
//                     >
//                         {/* Text Side */}
//                         <div className="how-step__text">
//                         <div className="how-step__number">{step.number}</div>
//                         <h3 className="how-step__title">{step.title}</h3>
//                         <p className="how-step__desc">{step.description}</p>
//                         </div>

//                         {/* Image Side */}
//                         <div className="how-step__image">
//                         <img src={step.image} alt={step.imageAlt} />
//                         </div>
//                     </div>
//                     ))}
//                 </div>
//             </section>

//             {/* 5. Why Choose ABSIR */}
//             <section className="why-section container">
//                 <h2 className="section-title5">Why Choose ABSIR</h2>
//                 <div className="why-grid">
//                     {features.map((f, i) => (
//                         <div key={i} className="why-card">
//                             <span className="why-icon">{f.icon}</span>
//                             <h3>{f.title}</h3>
//                             <p>{f.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* 6. Real-World Applications */}
//             <section className="apps-section container">
//                 <h2 className="section-title6">Real-World Applications</h2>
//                 <p className="section-subtitle6">ABSIR empowers users in countless everyday situations</p>
//                 <div className="apps-grid">
//                     {applications.map((app, i) => (
//                         <div key={i} className="app-card">
//                             <h3>{app.title}</h3>
//                             <p>{app.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* 4. Footer CTA */}
//             <section className="cta">
//                 <span><img src={icon} alt="icon" /></span>
//                 <h2>Join Our Community</h2>
//                 <p>
//                     Over 10,000 users worldwide trust ABSIR to enhance their daily lives. Be part of a <br/>community that's breaking down visual barriers and creating a more accessible world for <br/>everyone.
//                 </p>

//                 <div className="cta-buttons">
//                     <button className="btn primary" onClick={() => navigate("/#hero")}>Get Started with ABSIR</button>
                    
//                 </div>
//             </section>
//             <Footer/>
//         </div>
        
//     );
    
// };

// export default LandingPage;



import React from 'react';
import Logo from '../assets/our.jpg';
import icon from '../icon/icons8-community-50.png';
import { useNavigate } from 'react-router-dom';
// import Lottie from 'lottie-react';
import { Player } from '@lottiefiles/react-lottie-player';

import Navbar from './Navbar1';
import Footer from './Footer';
import '../styles/Learn.css';

import cameraAnimation from '../assets/camera animation-option-1.json';
import aiAnimation from '../assets/simple ai pulse.json';
import eyeAnimation from '../assets/checked.json';
import Mission from '../assets/Idea.json';

const steps = [
    {
        number: 1,
        title: "Image Capture",
        description:
        "Users capture images through their device camera or upload existing photos. ABSIR works with any image source – whether it's a live camera feed, a photo from your gallery, or a screenshot.",
        lottie: cameraAnimation,
        imageAlt: "Image Capture",
        reverse: false,
    },
    {
        number: 2,
        title: "AI Analysis",
        description:
        "Our neural networks process the image in milliseconds, identifying objects, text, colors, and spatial relationships. The system uses multiple AI models simultaneously to ensure comprehensive understanding.",
        lottie: aiAnimation,
        imageAlt: "AI Analysis",
        reverse: true,
    },
    {
        number: 3,
        title: "Accessible Output",
        description:
        "Results are presented through audio descriptions, haptic feedback, high-contrast visuals, or text-to-speech – whatever works best for each user. The interface adapts to individual accessibility needs.",
        lottie: eyeAnimation,
        imageAlt: "Accessible Output",
        reverse: false,
    },
];

const features = [
    {
        icon: "👁",
        title: "For Blind Users",
        description: "Detailed audio descriptions of surroundings, text reading, and object identification help navigate the world independently.",
    },
    {
        icon: "🎨",
        title: "For Color-Blind Users",
        description: "Real-time color correction and identification makes daily tasks like choosing clothes or reading charts effortless.",
    },
    {
        icon: "⚡",
        title: "Lightning Fast",
        description: "Instant processing means you get the information you need exactly when you need it, without delays.",
    },
    {
        icon: "🛡",
        title: "Privacy First",
        description: "Your images are processed securely and never stored without your permission. Your privacy is paramount.",
    },
];

const applications = [
    { title: "Daily Navigation", description: "Identify obstacles, read street signs, recognize landmarks, and navigate unfamiliar environments with confidence." },
    { title: "Reading & Documents", description: "Read books, menus, labels, forms, and any printed or digital text instantly with advanced OCR technology." },
    { title: "Shopping & Products", description: "Identify products, read ingredient lists, check expiration dates, and make informed purchasing decisions." },
    { title: "Social Interactions", description: "Recognize faces, understand facial expressions, and receive descriptions of social situations and environments." },
    { title: "Work & Education", description: "Access presentations, read charts and graphs, and participate fully in educational and professional settings." },
    { title: "Color Coordination", description: "Match clothing, identify colors in art and design, and understand color-coded information systems." },
];


const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="main-wrapper">
            <Navbar />
            
            {/* 1. Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <span className="breadcrumb" onClick={() => navigate(-1)}>
                        ← Back to Home
                    </span>
                    
                    <div className="hero-grid">
                        <h1 className="hero-title">The Technology Behind <br/>ABSIR</h1>
                        <p className="hero-desc">
                            Discover how we're using cutting-edge AI and machine learning to transform visual <br/>accessibility for millions of people worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Our Mission */}
            <section className="mission-section container">
                <div className="mission-content">
                    <div className="mission-text">
                        <h2 className="section-label">Our Mission</h2>
                        <p>ABSIR was created with a simple yet powerful goal: to make the world more accessible for everyone, regardless of their visual abilities. We believe that technology should empower, not exclude.</p>
                        <p>Through advanced image processing and machine learning algorithms, ABSIR transforms the system that are available, instant, and continuous—making it possible for people who are blind and color-blind users.</p>
                    </div>
                    <Player
                        autoplay
                        loop
                        src={Mission}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </section>

            {/* 3. Core Technologies */}
            <section className="core-tech container">
                <h2 className="section-title3">Core Technologies</h2>
                <p className="section-subtitle3">ABSIR leverages multiple AI technologies working in harmony to deliver accurate, real-time visual assistance.</p>
                <div className="tech-grid">
                    <div className="tech-card">
                        <span className="icon-box">👁️</span>
                        <h3>Computer Vision</h3>
                        <p>Our deep learning models can identify objects, read text, recognize faces, and understand complex scenes with 99% accuracy.</p>
                        <div className='span1'>
                            <span>Object detection and classification</span>
                            <span>Optical character recognition (OCR)</span>
                            <span>Scene understanding</span>
                        </div>
                    </div>
                    <div className="tech-card">
                        <span className="icon-box">🎨</span>
                        <h3>Color Analysis</h3>
                        <p>Advanced algorithms detect, analyze, and translate colors into accessible formats for color-blind users.</p>
                        <div className='span1'>
                            <span>Color blindness correction filters</span>
                            <span>Color naming and description</span>
                            <span>Pattern recognition</span>
                        </div>
                    </div>
                    <div className="tech-card">
                        <span className="icon-box">⚡</span>
                        <h3>Real-Time Processing</h3>
                        <p>Lightning-fast image analysis provides instant feedback, making ABSIR practical for everyday use.</p>
                        <div className='span1'>
                            <span>Edge computing for speed</span>
                            <span>Offline capability</span>
                            <span>Low latency response</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. How ABSIR Works */}
            <section className="how-it-works1">
                <h2 className="how-title">How ABSIR Works</h2>

                <div className="how-steps">
                    {steps.map((step) => (
                    <div
                        key={step.number}
                        className={`how-step ${step.reverse ? "how-step--reverse" : ""}`}
                    >
                        {/* Text Side */}
                        <div className="how-step__text">
                            <div className="how-step__number">{step.number}</div>
                            <h3 className="how-step__title">{step.title}</h3>
                            <p className="how-step__desc">{step.description}</p>
                        </div>

                        {/* Animation Side */}
                        <div className="how-step__image">
                            <Player
                                autoplay
                                loop
                                src={step.lottie}
                                style={{ width: '80%', height: '80%' }}
                            />
                        </div>
                    </div>
                    ))}
                </div>
            </section>

            {/* 5. Why Choose ABSIR */}
            <section className="why-section container">
                <h2 className="section-title5">Why Choose ABSIR</h2>
                <div className="why-grid">
                    {features.map((f, i) => (
                        <div key={i} className="why-card">
                            <span className="why-icon">{f.icon}</span>
                            <h3>{f.title}</h3>
                            <p>{f.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. Real-World Applications */}
            <section className="apps-section container">
                <h2 className="section-title6">Real-World Applications</h2>
                <p className="section-subtitle6">ABSIR empowers users in countless everyday situations</p>
                <div className="apps-grid">
                    {applications.map((app, i) => (
                        <div key={i} className="app-card">
                            <h3>{app.title}</h3>
                            <p>{app.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. Footer CTA */}
            <section className="cta">
                <span><img src={icon} alt="icon" /></span>
                <h2>Join Our Community</h2>
                <p>
                    Over 10,000 users worldwide trust ABSIR to enhance their daily lives. Be part of a <br/>community that's breaking down visual barriers and creating a more accessible world for <br/>everyone.
                </p>

                <div className="cta-buttons">
                    <button className="btn primary" onClick={() => navigate("/#hero")}>Get Started with ABSIR</button>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default LandingPage;