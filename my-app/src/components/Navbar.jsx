// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">ABSIR</div>
//       <ul className="nav-links">
//         <li>Features</li>
//         <li>How It Works</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//       <button className="btn-primary">Download</button>
//     </nav>
//   );
// };

// export default Navbar;


// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">ABSIR</div>
//       <ul className="nav-links">
//         <li><Link to="/">Features</Link></li>
//         <li><Link to="/">How It Works</Link></li>
//         <li><Link to="/">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//       <button className="btn-primary">Download</button>
//     </nav>
//   );
// };

// export default Navbar;


// import React from "react";
// import '../styles/Navbar1.css';
// import { Link } from "react-router-dom";

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


// const Navbar = () => {
//   const scrollTo = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <Logo/>
//         <h5>ABSIR</h5>
//       </div>
//       <ul className="nav-links">
//         <li onClick={() => scrollTo('features-section')}>Features</li>
//         <li onClick={() => scrollTo('howitworks-section')}>How It Works</li>
//         <li onClick={() => scrollTo('about-section')}>About</li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//       <button className="btn-primary" onClick={() => scrollTo('cta-section')}>
//         Download
//       </button>
//     </nav>
//   );
// };

// export default Navbar;




import React from "react";
import '../styles/Navbar1.css';
// import { Link } from "react-router-dom";

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

const Navbar = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Logo/>
        <h5>ABSIR</h5>
      </div>
      <ul className="nav-links">
        <li onClick={() => scrollTo('features-section')}>Features</li>
        <li onClick={() => scrollTo('howitworks-section')}>How It Works</li>
        <li onClick={() => scrollTo('about-section')}>About</li>
        <li onClick={() => scrollTo('footer-section')}>Contact</li>  {/* ← اتغير */}
      </ul>
      <button className="btn-primary" onClick={() => scrollTo('cta-section')}>
        Download
      </button>
    </nav>
  );
};

export default Navbar;