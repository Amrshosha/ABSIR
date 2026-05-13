import React from "react";
import './../styles/HowItWorks.css';

const steps = [
    {
        title: "Capture or Upload",
        desc: "Take a photo with your device camera or upload an existing image from your gallery.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
            </svg>
        )
    },
    {
        title: "AI Processing",
        desc: "Our advanced machine learning models analyze the image to identify objects, colors, and text.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="4"/>
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
            </svg>
        )
    },
    {
        title: "Audio Output",
        desc: "Receive clear audio descriptions or text-to-speech output describing what's in the image.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
        )
    },
    {
        title: "Interact & Explore",
        desc: "Ask follow-up questions or request additional details about specific parts of the image.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
        )
    },
];

const HowItWorks = () => {
    return (
        <section className="how-it-works" id="howitworks-section">
            
            <h2>How ABSIR Works</h2>
            <p>Simple, intuitive, and designed for everyone.</p>
            <div className="steps">
                {steps.map((step, i) => (
                    <div key={i} className="step-card">
                        <div className="step-icon">
                            {step.icon}
                        </div>
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;