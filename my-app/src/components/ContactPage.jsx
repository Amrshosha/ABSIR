import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar1 from './Navbar1';
import Footer from './Footer';
import "./../styles/ContactPage.css";

const SendIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13"/>
        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
);

const MailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-10 7L2 7"/>
    </svg>
);

const ChatIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
);

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.name && form.email && form.message) setSubmitted(true);
    };

    return (
        
        <div className="contact-page" id="contact-page">
            <Navbar1/>
        {/* Hero */}
        <div className="hero">
            <Link to="/" className="back-link">
                <span className="back-arrow">←</span> Back to Home
            </Link>
            <div className="hero-body">
                <h1 className="hero-title">
            <span className="title-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
            </span>
            Contact Us
            </h1>
            <p className="hero-subtitle">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
        </div>
            </div>
        

        {/* Content */}
        <div className="content">
            {/* Left */}
            <div className="left-col">
            <h2>Get in Touch</h2>
            <p>Whether you have a question about features, accessibility, need technical support, or anything else, our team is ready to answer all your questions.</p>

            <div className="contact-item">
                <div className="contact-icon"><MailIcon /></div>
                <div>
                <div className="contact-label">Email Support</div>
                <div className="contact-email">support@absir.com</div>
                <div className="contact-note">We typically respond within 24 hours</div>
                </div>
            </div>

            <div className="contact-item">
                <div className="contact-icon"><ChatIcon /></div>
                <div>
                <div className="contact-label">General Inquiries</div>
                <div className="contact-email">info@absir.com</div>
                </div>
            </div>

            <div className="accessibility-box">
                <h3>Accessibility Support</h3>
                <p>
                We're committed to ensuring ABSIR is accessible to everyone. If you encounter any accessibility barriers, please let us know at{" "}
                <a href="mailto:accessibility@absir.com">accessibility@absir.com</a>
                </p>
            </div>
            </div>

            {/* Right - Form */}
            <div className="form-card">
            <h2>Send us a Message</h2>
            {submitted ? (
                <div className="success-msg">
                <div className="success-icon">✉️</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                <div className="field">
                    <label>Name</label>
                    <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input name="email" type="email" placeholder="your.email@example.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className="field">
                    <label>Subject</label>
                    <input name="subject" placeholder="How can we help?" value={form.subject} onChange={handleChange} />
                </div>
                <div className="field">
                    <label>Message</label>
                    <textarea name="message" placeholder="Your message..." value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="submit-btn">
                    <SendIcon /> Send Message
                </button>
                </form>
            )}
            </div>
        </div>
            <Footer/>
        </div>
    );
}