import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import State from "./components/State";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import LearnMorePage from "./components/LearnMorePage";
import TermsofService from "./components/TermsofService";
import About from "./components/About";
import ImageAnalyzer from "./components/ImageAnalyzer"; 
import ContactPage from "./components/ContactPage"; 
import PrivacyPolicy from "./components/PrivacyPolicy";
import HelpSection from "./components/HelpSection";
import UploadText from "./components/UploadText";
import UploadImages from "./components/UploadImages";
import DetectText from "./components/Detecttext";
import DetectImages from "./components/DetectImages";
import CaptureText from "./components/CaptureText";
import CaptureImages from "./components/CaptureImages";
import RealtimeText from "./components/RealtimeText";
import RealtimeImages from "./components/RealtimeImages";
import './styles/main.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = ({ onOpenAnalyzer }) => (
  <>
    <Navbar />
    <HeroSection onOpenAnalyzer={onOpenAnalyzer} /> 
    <Features />
    <HowItWorks />
    <About />
    <State />
    <CTA />
    <Footer />
  </>
);

function App() {
  const [isAnalyzerOpen, setIsAnalyzerOpen] = useState(false);

  const openAnalyzer = () => setIsAnalyzerOpen(true);
  const closeAnalyzer = () => setIsAnalyzerOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home onOpenAnalyzer={openAnalyzer} />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsofService />} />
          <Route path="/help" element={<HelpSection />} />
          <Route path="/cta" element={<CTA />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/detect-text" element={<DetectText />} />
          <Route path="/detect-images" element={<DetectImages />} />
          <Route path="/upload-text" element={<UploadText />} />
          <Route path="/upload-Images" element={<UploadImages />} />
          <Route path="/capture-text" element={<CaptureText />} />
          <Route path="/capture-Images" element={<CaptureImages />} />
          <Route path="/realtime-text" element={<RealtimeText />} />
          <Route path="/realtime-Images" element={<RealtimeImages />} />
        </Routes>

        <ImageAnalyzer 
          isOpen={isAnalyzerOpen} 
          onClose={closeAnalyzer} 
        />
      </div>
    </Router>
  );
}

export default App;