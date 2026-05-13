// import React from "react";
// import './../styles/Features.css';
// const featuresData = [
//     { title: "Real-Time Image Recognition", desc: "Instantly identify objects, text, and scenes with advanced computer vision technology." },
//     { title: "Color Detection & Assistance", desc: "Accurate color identification and description for color-blind users with personalized adjustments." },
//     { title: "Audio Descriptions", desc: "Convert visual information into clear, natural-sounding audio descriptions." },
//     { title: "Machine Learning Powered", desc: "Continuously improving AI models trained on diverse datasets for better accuracy." },
//     { title: "Text-to-Speech OCR", desc: "Read printed and handwritten text aloud from images, documents, and signs." },
//     { title: "Privacy First", desc: "All processing happens securely with your privacy as our top priority." },
// ];


// const Features = () => {
//     return (
//         <section className="features" id="features-section">
//         <h2>Empowering Features</h2>
//         <p>Cutting-edge technology designed with accesssibility and usability at its core.</p>
//         <div className="features-grid">
//             {featuresData.map((item, i) => (
//             <div key={i} className="feature-card">
//                 <h3>{item.title}</h3>
//                 <p>{item.desc}</p>
//             </div>
//             ))}
//         </div>
//         </section>
//     );
// };

// export default Features;


import React from "react";
import './../styles/Features.css';

const featuresData = [
    {
        title: "Real-Time Image Recognition",
        desc: "Instantly identify objects, text, and scenes with advanced computer vision technology.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
            </svg>
        )
    },
    {
        title: "Color Detection & Assistance",
        desc: "Accurate color identification and description for color-blind users with personalized adjustments.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="13.5" cy="6.5" r="2.5"/>
                <circle cx="17.5" cy="10.5" r="2.5"/>
                <circle cx="8.5" cy="7.5" r="2.5"/>
                <circle cx="6.5" cy="12.5" r="2.5"/>
                <path d="M12 22c4.97 0 9-4.03 9-9H3c0 4.97 4.03 9 9 9z"/>
            </svg>
        )
    },
    {
        title: "Audio Descriptions",
        desc: "Convert visual information into clear, natural-sounding audio descriptions.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
        )
    },
    {
        title: "Machine Learning Powered",
        desc: "Continuously improving AI models trained on diverse datasets for better accuracy.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="4"/>
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
            </svg>
        )
    },
    {
        title: "Text-to-Speech OCR",
        desc: "Read printed and handwritten text aloud from images, documents, and signs.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/>
            </svg>
        )
    },
    {
        title: "Privacy First",
        desc: "All processing happens securely with your privacy as our top priority.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
        )
    },
];

const Features = () => {
    return (
        <section className="features" id="features-section">
            <h2>Empowering Features</h2>
            <p>Cutting-edge technology designed with accessibility and usability at its core.</p>
            <div className="features-grid">
                {featuresData.map((item, i) => (
                    <div key={i} className="feature-card">
                        <div className="feature-icon">
                            {item.icon}
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;