import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Logo from '../assets/logo.jpg';
import Navbar from './Navbar1';
import Footer from './Footer';
import { Player } from '@lottiefiles/react-lottie-player';
import blinkingEye from './../assets/Blinking Eye.json';
import "./../styles/HelpSection.css";

const HelpSection = () => {
    const [hovered, setHovered] = useState(null);
const navigate = useNavigate();
    return (
        <div className="help-page">
            <Navbar />  {/* ← بره الـ section */}

            <section className="help-section">
                {/* Left */}
                <div className="help-text">
                    <h1 className="help-title">
                        Let Us Help You With...
                    </h1>
                    <p className="help-desc">
                        Key structures of ABSIR include text recognition, object detection and
                        audio output capabilities along with real time help, enabling users to
                        effortlessly comprehend and interact with their surroundings.
                    </p>

                    <div className="help-buttons">
                        <button
                            className={`help-btn1 ${hovered === 'text' ? 'active' : ''}`}
                            onMouseEnter={() => setHovered('text')}
                            onMouseLeave={() => setHovered(null)}
                            onClick={() => navigate('/detect-text')}
                        >
                            <span className="btn-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                    <polyline points="14 2 14 8 20 8"/>
                                    <line x1="16" y1="13" x2="8" y2="13"/>
                                    <line x1="16" y1="17" x2="8" y2="17"/>
                                    <polyline points="10 9 9 9 8 9"/>
                                </svg>
                            </span>
                            Detect Text
                        </button>

                        <button
                            className={`help-btn2 ${hovered === 'images' ? 'active' : ''}`}
                            onMouseEnter={() => setHovered('images')}
                            onMouseLeave={() => setHovered(null)}
                            onClick={() => navigate('/detect-images')}
                        >
                            <span className="btn-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                </svg>
                            </span>
                            Detect Images
                        </button>
                    </div>
                </div>

                {/* Right - Illustration */}
                {/* <div className="help-illustration">
                    <div className="sound-waves">
                        <span className="wave wave1">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                            </svg>
                        </span>
                        <span className="wave wave2">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                            </svg>
                        </span>
                    </div>
                    <div className="person-placeholder">
                        <div className="person-body">
                            <div className="person-head"></div>
                            <div className="person-torso">
                                <div className="laptop">
                                    <div className="laptop-screen"></div>
                                    <div className="laptop-base"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="help-image">
                    <img src={Logo} alt="ABSIR Logo" />
                </div> */}
            
                <div className="help-illustration">
                    <Player
                        autoplay
                        loop
                        src={blinkingEye}
                        style={{ height: '500px', width: '500px' }}
                    />
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default HelpSection;
