// import React from "react"; 
// import "./../styles/HeroSection.css";
// import Logo from '../assets/logo.jpg';
// import { useNavigate } from "react-router-dom";

// // تأكدي إن الاسم هنا هو نفس الاسم اللي بعتيه في App.js أو Home.js
// const HeroSection = ({ onOpenAnalyzer }) => {
//     const navigate = useNavigate();

//     // دالة داخلية للتأكد من أن الأمر واصل
//     const handleTryAbsirClick = () => {
//         if (onOpenAnalyzer) {
//             onOpenAnalyzer(); // تشغيل الدالة اللي بتفتح النافذة
//         } else {
//             console.error("خطأ: دالة onOpenAnalyzer لم يتم تمريرها للمكون!");
//         }
//     };

// const stats = [
//     { value: "10K+", label: "Active Users" },
//     { value: "99%", label: "Accuracy" },
//     { value: "24/7", label: "Available" },
// ];

//     return (
//         <section className="hero" id="hero">
//             <div className="hero-text">
//                 <h1>Vision Through <br/>Technology</h1>
//                 <p>
//                     ABSIR uses advanced image processing and machine learning <br/>
//                     to help blind and color-blind individuals experience<br/> the world in new ways.
//                 </p>
//                 <div className="hero-buttons">
//                     <button 
//                         className="btn-primary" 
//                         onClick={handleTryAbsirClick} // استخدام الدالة المؤمنة
//                     >
//                         Try ABSIR Now
//                     </button>

//                     <button 
//                         className="btn-secondary"
//                         onClick={() => navigate("/learn-more")}
//                     >
//                         Learn More
//                     </button>
//                 </div>
//                 <div className="stats-section">
//                     {stats.map((stat, i) => (
//                         <div key={i} className="stat-item1">
//                             <span className="stat-value1">{stat.value}</span>
//                             <span className="stat-label1">{stat.label}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="hero-image">
//                 <img src={Logo} alt="ABSIR Logo" />
//             </div>


//             {/* Wave */}
//             <div className="wave">
//                 <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
//                     <path
//                         className="wave-path"
//                         d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,80 L0,80 Z M1200,40 C1350,80 1550,0 1800,40 C2050,80 2250,0 2400,40 L2400,80 L1200,80 Z"
//                         fill="#ffffff"
//                     />
//                 </svg>
//             </div>

//         </section>
//     );
// };

// export default HeroSection;


import React from "react"; 
import "./../styles/HeroSection.css";
import Logo from '../assets/logo.jpg';
import { useNavigate } from "react-router-dom";

const HeroSection = ({ onOpenAnalyzer }) => {
    const navigate = useNavigate();

    const handleTryAbsirClick = () => {
        navigate('/help');
    };

    const stats = [
        { value: "10K+", label: "Active Users" },
        { value: "99%", label: "Accuracy" },
        { value: "24/7", label: "Available" },
    ];

    return (
        <section className="hero" id="hero">
            <div className="hero-text">
                <h1>Vision Through <br/>Technology</h1>
                <p>
                    ABSIR uses advanced image processing and machine learning <br/>
                    to help blind and color-blind individuals experience<br/> the world in new ways.
                </p>
                <div className="hero-buttons">
                    <button 
                        className="btn-primary" 
                        onClick={handleTryAbsirClick}
                    >
                        Try ABSIR Now
                    </button>

                    <button 
                        className="btn-secondary"
                        onClick={() => navigate("/learn-more")}
                    >
                        Learn More
                    </button>
                </div>
                <div className="stats-section">
                    {stats.map((stat, i) => (
                        <div key={i} className="stat-item1">
                            <span className="stat-value1">{stat.value}</span>
                            <span className="stat-label1">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hero-image">
                <img src={Logo} alt="ABSIR Logo" />
            </div>

            {/* Wave */}
            <div className="wave">
                <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
                    <path
                        className="wave-path"
                        d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,80 L0,80 Z M1200,40 C1350,80 1550,0 1800,40 C2050,80 2250,0 2400,40 L2400,80 L1200,80 Z"
                        fill="#ffffff"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;