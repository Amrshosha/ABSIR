import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar1';
import Footer from './Footer';
import "./../styles/Detecttext.css";

const DetectText = () => {
    const navigate = useNavigate();

    return (
        <div className="detect-page">
            <Navbar/> 
            <div className="container-detecttext">
                <div className="detect-title-box">
                    <h1 className="detect-title">Detect text by </h1>
                </div>

                <div className="detect-card">
                    <button className="detect-btn" onClick={() => navigate('/upload-text')}>
                        Upload Image
                    </button>
                    <button className="detect-btn" onClick={() => navigate('/capture-text')}>
                        Capture Image
                    </button>
                    <button className="detect-btn" onClick={() => navigate('/realtime-text')}>
                        Real-time Detection
                    </button>
                </div>
                {/* <div className="hero-image">
                    <img src={Logo} alt="ABSIR Logo" />
                </div> */}
            </div>
            <Footer/>
        </div>
    );
};

export default DetectText;