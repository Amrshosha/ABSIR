import { Link } from "react-router-dom";
import Navbar1 from './Navbar1';
import Footer from './Footer';
import "./../styles/PrivacyPolicy.css";

export default function PrivacyPolicy() {
    return (
        <div className="privacy-page">
            <Navbar1/>
            {/* Hero */}
            <div className="privacy-hero">
                <Link to="/" className="privacy-back-link">
                    <span>←</span> Back to Home
                </Link>
                <h1 className="privacy-title">
                    <span className="privacy-title-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </span>
                    Privacy Policy
                </h1>
                <p className="privacy-date">Last updated: February 7, 2026</p>
            </div>

            {/* Content */}
            <div className="privacy-content">

                <div className="privacy-welcome">
                    <h2>Your Privacy Matters</h2>
                    <p>At ABSIR, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.</p>
                </div>

                <div className="privacy-section">
                    <h3>Information We Collect</h3>
                    <p>We collect only the information necessary to provide you with the <br/>best possible service:</p>
                    <ul>
                        <li>Account information (email, name) when you create an account</li>
                        <li>Usage data to improve our AI models and user experience</li>
                        <li>Device information for compatibility and performance optimization</li>
                    </ul>
                </div>

                <div className="privacy-section">
                    <h3>How We Use Your Information</h3>
                    <p>Your information is used to:</p>
                    <ul>
                        <li>Provide and improve our vision assistance services</li>
                        <li>Personalize your experience with ABSIR</li>
                        <li>Communicate important updates and features</li>
                        <li>Ensure the security and integrity of our platform</li>
                    </ul>
                </div>

                <div className="privacy-section">
                    <h3>Image Processing</h3>
                    <p>Images processed through ABSIR are analyzed in real-time and are not stored on our servers unless you explicitly choose to save them. We prioritize your privacy and process images securely with end-to-end encryption.</p>
                </div>

                <div className="privacy-section">
                    <h3>Data Security</h3>
                    <p>We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. All data transmission is encrypted using SSL/TLS protocols.</p>
                </div>

                <div className="privacy-section">
                    <h3>Your Rights</h3>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access your personal data</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Delete your account and associated data</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Export your data in a portable format</li>
                    </ul>
                </div>

                <div className="privacy-section">
                    <h3>Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us at <a href="mailto:privacy@absir.com">privacy@absir.com</a></p>
                </div>

            </div>
            <Footer/>
        </div>
    );
}