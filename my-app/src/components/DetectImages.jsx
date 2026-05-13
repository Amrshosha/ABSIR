import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar1';
import Footer from './Footer';
import "./../styles/DetectImages.css";

const DetectImages = () => {
    const navigate = useNavigate();

    return (
        <div className="detecti-page">
            <Navbar/>
            <div className="container-detectimages">
                <div className="detecti-title-box">
                    <h1 className="detecti-title">Detect images by </h1>
                </div>

                <div className="detecti-card">
                    <button className="detecti-btn" onClick={() => navigate('/upload-images')}>
                        Upload Image
                    </button>
                    <button className="detecti-btn" onClick={() => navigate('/capture-images')}>
                        Capture Image
                    </button>
                    <button className="detecti-btn" onClick={() => navigate('/realtime-images')}>
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

export default DetectImages;