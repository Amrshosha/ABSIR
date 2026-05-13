import React from "react";
import { Link } from "react-router-dom";
import './../styles/Footer.css';
// import logo from "./../icon/icons8-vision-24.png"


const Logo = () => (
    <div style={{
        width: 35,
        height: 35,
        background: '#1a1a1a',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/>
        </svg>
    </div>
);

const Footer = () => {
    return (
        <footer>
            <div className="footer" id="footer-section">
            <span className="imgFooter">
                <Logo/>
                {/* <img className="img-footer" src={logo} alt="pic"/> */}
                <h4>ABSIR</h4>
            </span>
            <div className="footer-links">
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/learn-more" className="footer-link">Learn More</Link>
                <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
                <Link to="/terms" className="footer-link">Terms of Service</Link>
            </div>
            </div>
            <hr className="divider" />
            <p className="copyreight">© 2026 ABSIR. Making the world more accessible through AI-powered vision technology.</p>
        </footer>
    );
};

export default Footer;