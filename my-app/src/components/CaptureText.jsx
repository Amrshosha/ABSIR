// import React, { useState, useRef } from "react";
// import Navbar from './Navbar1';
// import Footer from './Footer';
// import "./../styles/CaptureText.css";

// const CaptureText = () => {
//     const [result, setResult] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [capturing, setCapturing] = useState(false);
//     const videoRef = useRef(null);
//     const streamRef = useRef(null);

//     const startCamera = async () => {
//         setCapturing(true);
//         setResult("");
//         try {
//             const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//             streamRef.current = stream;
//             videoRef.current.srcObject = stream;
//         } catch (err) {
//             setResult("Camera access denied.");
//             setCapturing(false);
//         }
//     };

//     const captureAndSend = async () => {
//         if (!videoRef.current) return;
//         setLoading(true);

//         const canvas = document.createElement("canvas");
//         canvas.width = videoRef.current.videoWidth;
//         canvas.height = videoRef.current.videoHeight;
//         canvas.getContext("2d").drawImage(videoRef.current, 0, 0);

//         canvas.toBlob(async (blob) => {
//             const formData = new FormData();
//             formData.append("image", blob, "capture.jpg");

//             try {
//                 const response = await fetch("https://lusty-speed-parrot.ngrok-free.dev/api/object/capture", {
//                     method: "POST",
//                     body: formData,
//                 });
//                 const data = await response.json();
//                 setResult(data.extra?.text || "No text detected.");
//             } catch {
//                 setResult("Error connecting to server.");
//             } finally {
//                 setLoading(false);
//                 stopCamera();
//             }
//         }, "image/jpeg");
//     };

//     const stopCamera = () => {
//         if (streamRef.current) {
//             streamRef.current.getTracks().forEach(t => t.stop());
//         }
//         setCapturing(false);
//     };

//     return (
//         <div className="capture-page">
//             <Navbar />
//             <div className="capture-content">
//                 {/* Capture Card */}
//                 <div className="capture-card">
//                     <h2 className="capture-title">capture an image and detect text:</h2>
//                     <hr className="capture-divider" />

//                     {capturing ? (
//                         <div className="camera-container">
//                             <video ref={videoRef} autoPlay className="camera-feed" />
//                             <div className="camera-buttons">
//                                 <button className="ct-btn" onClick={captureAndSend} disabled={loading}>
//                                     {loading ? "analyzing..." : "capture & detect"}
//                                 </button>
//                                 <button className="ct-btn ct-btn-outline" onClick={stopCamera}>
//                                     cancel
//                                 </button>
//                             </div>
//                         </div>
//                     ) : (
//                         <button className="ct-btn" onClick={startCamera}>
//                             start
//                         </button>
//                     )}
//                 </div>

//                 {/* Result Card */}
//                 <div className="capture-result-card">
//                     <p className="capture-result-label">result:</p>
//                     <hr className="capture-divider" />
//                     <p className="capture-result-text">
//                         {loading ? "analyzing..." : result}
//                     </p>
//                 </div>
//             </div>
//             <Footer/>
//         </div>
//     );
// };

// export default CaptureText;




import React, { useState, useRef } from "react";
import Navbar from './Navbar1';
import Footer from './Footer';
import "./../styles/CaptureText.css";

const CaptureText = () => {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [capturing, setCapturing] = useState(false);
    const videoRef = useRef(null);
    const streamRef = useRef(null);

    const startCamera = async () => {
        setCapturing(true);
        setResult("");
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            streamRef.current = stream;
            videoRef.current.srcObject = stream;
        } catch (err) {
            setResult("Camera access denied.");
            setCapturing(false);
        }
    };

    const playAudio = async (audio_b64) => {
        try {
            const byteChars = atob(audio_b64);
            const byteNums  = new Array(byteChars.length);
            for (let i = 0; i < byteChars.length; i++) {
                byteNums[i] = byteChars.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNums);
            const blob      = new Blob([byteArray], { type: "audio/mp3" });
            const url       = URL.createObjectURL(blob);
            const audio     = new Audio(url);
            await audio.play();
            URL.revokeObjectURL(url);
        } catch (err) {
            console.error("Audio error:", err);
        }
    };

    const captureAndSend = async () => {
        if (!videoRef.current) return;
        setLoading(true);

        const canvas = document.createElement("canvas");
        canvas.width  = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        canvas.getContext("2d").drawImage(videoRef.current, 0, 0);

        canvas.toBlob(async (blob) => {
            const formData = new FormData();
            formData.append("file", blob, "capture.jpg");

            try {
                const response = await fetch(
                    "https://lusty-speed-parrot.ngrok-free.dev/api/object/capture",
                    {
                        method: "POST",
                        headers: { "ngrok-skip-browser-warning": "true" },
                        body: formData,
                    }
                );

                const data = await response.json();
                console.log("API Response:", data);

                const text = data.extra?.text || "No text detected.";
                setResult(text);

                // 🔊 شغّل الصوت
                if (data.audio_b64) {
                    await playAudio(data.audio_b64);
                }

            } catch {
                setResult("Error connecting to server.");
            } finally {
                setLoading(false);
                stopCamera();
            }
        }, "image/jpeg");
    };

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(t => t.stop());
        }
        setCapturing(false);
    };

    return (
        <div className="capture-page">
            <Navbar />
            <div className="capture-content">

                <div className="capture-card">
                    <h2 className="capture-title">Capture an image and detect text:</h2>
                    <hr className="capture-divider" />
                    {capturing ? (
                        <div className="camera-container">
                            <video ref={videoRef} autoPlay className="camera-feed" />
                            <div className="camera-buttons">
                                <button className="ct-btn" onClick={captureAndSend} disabled={loading}>
                                    {loading ? "analyzing..." : "Capture & Detect"}
                                </button>
                                <button className="ct-btn ct-btn-outline" onClick={stopCamera}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <button className="ct-btn" onClick={startCamera}>
                            Start
                        </button>
                    )}
                </div>

                <div className="capture-result-card">
                    <p className="capture-result-label">Result:</p>
                    <hr className="capture-divider" />
                    <p className="capture-result-text">
                        {loading ? "analyzing..." : result}
                    </p>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default CaptureText;