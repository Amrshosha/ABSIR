// import React from "react";
// import { useNavigate } from "react-router-dom";
// import '../styles/Navbar1.css';


// const Logo = () => (
//     <div style={{
//         width: 35,
//         height: 35,
//         background: '#1a1a1a',
//         borderRadius: 10,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center'
//     }}>
//         <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="12" r="3"/>
//         <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/>
//         </svg>
//     </div>
// );


// const Navbar1 = () => {
//     const navigate = useNavigate();

//     return (
//         <nav className="navbar">
//             <div className="navbar-brand">
//                 <Logo/>
//                 <h5>ABSIR</h5>
//             </div>
            
//             <ul className="nav-links">
//                 <li>Features</li>
//                 <li>How It Works</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//             <button className="btn-primary" onClick={() => navigate('/')}>
//                 Get Start
//             </button>
//         </nav>
//     );
// };

// export default Navbar1;




import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Navbar1.css';

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

const Navbar1 = () => {
    const navigate = useNavigate();

    const goToSection = (id) => {
        navigate('/');  // روح للهوم الأول
        setTimeout(() => {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // استنى شوية لحد ما الصفحة تتحمل
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Logo/>
                <h5>ABSIR</h5>
            </div>
            <ul className="nav-links">
                <li onClick={() => goToSection('features-section')}>Features</li>
                <li onClick={() => goToSection('howitworks-section')}>How It Works</li>
                <li onClick={() => goToSection('about-section')}>About</li>
                <li onClick={() => goToSection('footer-section')}>Contact</li>
            </ul>
            <button className="btn-primary" onClick={() => navigate('/')}>
                Get Start
            </button>
        </nav>
    );
};

export default Navbar1;
