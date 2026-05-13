import { Link } from "react-router-dom";
import Navbar1 from './Navbar1';
import Footer from './Footer';
import "./../styles/TermsOfService.css";

export default function TermsOfService() {
    return (
        <div className="terms-page">
            <Navbar1/>
            {/* Hero */}
            <div className="terms-hero">
                <Link to="/" className="terms-back-link">
                    <span>←</span> Back to Home
                </Link>
                <h1 className="terms-title">
                    <span className="terms-title-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                        </svg>
                    </span>
                    Terms of Service
                </h1>
                <p className="terms-date">Last updated: February 7, 2026</p>
            </div>

            {/* Content */}
            <div className="terms-content">

                <div className="terms-welcome">
                    <h2>Welcome to ABSIR</h2>
                    <p>By using ABSIR's services, you agree to these Terms of Service. Please read them carefully.</p>
                </div>

                <div className="terms-section">
                    <h3>Acceptance of Terms</h3>
                    <p>By accessing and using ABSIR, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.</p>
                </div>

                <div className="terms-section">
                    <h3>Use of Service</h3>
                    <p>ABSIR is designed to provide visual assistance through AI-powered image processing. You agree to:</p>
                    <ul>
                        <li>Use this service for lawful purposes only</li>
                        <li>Not attempt to reverse engineer or compromise our systems</li>
                        <li>Respect the intellectual property rights of ABSIR and others</li>
                        <li>Not use the service to process inappropriate or illegal content</li>
                    </ul>
                </div>

                <div className="terms-section">
                    <h3>Service Availability</h3>
                    <p>While we strive to provide 24/7 availability, ABSIR is provided "as is" and we do not guarantee uninterrupted access. We reserve the right to modify or discontinue the service with or without notice.</p>
                </div>

                <div className="terms-section">
                    <h3>Accuracy and Limitations</h3>
                    <p>While ABSIR uses advanced AI technology with high accuracy rates, the service should be used as an assistive tool. We cannot guarantee 100% accuracy in all situations and recommend using additional verification when making critical decisions.</p>
                </div>

                <div className="terms-section">
                    <h3>User Accounts</h3>
                    <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use.</p>
                </div>

                <div className="terms-section">
                    <h3>Intellectual Property</h3>
                    <p>All content, features, and functionality of ABSIR are owned by ABSIR and are protected by international copyright, trademark, and other intellectual property laws.</p>
                </div>

                <div className="terms-section">
                    <h3>Limitation of Liability</h3>
                    <p>ABSIR shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</p>
                </div>

                <div className="terms-section">
                    <h3>Changes to Terms</h3>
                    <p>We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the service.</p>
                </div>

                <div className="terms-section">
                    <h3>Contact Information</h3>
                    <p>For questions about these Terms of Service, please contact us at <a href="mailto:legal@absir.com">legal@absir.com</a></p>
                </div>

            </div>
            <Footer/>
        </div>
        
    );
}