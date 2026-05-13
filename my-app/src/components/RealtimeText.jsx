import React, { useState, useRef, useEffect } from "react";
import Navbar from './Navbar1';
import Footer from './Footer';
import "./../styles/RealtimeText.css";

const RealtimeText = () => {
    const [running, setRunning] = useState(false);
    const [result, setResult] = useState("");
    const videoRef = useRef(null);
    const streamRef = useRef(null);
    const intervalRef = useRef(null);

    const startRealtime = async () => {
        setRunning(true);
        setResult("");
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            streamRef.current = stream;
            videoRef.current.srcObject = stream;

            // بعت كل 3 ثواني
            intervalRef.current = setInterval(() => {
                captureAndSend();
            }, 3000);
        } catch {
            setResult("Camera access denied.");
            setRunning(false);
        }
    };

    const captureAndSend = () => {
        if (!videoRef.current) return;

        const canvas = document.createElement("canvas");
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        canvas.getContext("2d").drawImage(videoRef.current, 0, 0);

        canvas.toBlob(async (blob) => {
            const formData = new FormData();
            formData.append("image", blob, "realtime.jpg");

            try {
                const response = await fetch("http://absir.runasp.net/api/ocr/upload", {
                    method: "POST",
                    body: formData,
                });
                const data = await response.json();
                if (data.text) setResult(data.text);
            } catch {
                setResult("Error connecting to server.");
            }
        }, "image/jpeg");
    };

    const stopRealtime = () => {
        clearInterval(intervalRef.current);
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(t => t.stop());
        }
        setRunning(false);
    };

    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current);
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(t => t.stop());
            }
        };
    }, []);

    return (
        <div className="realtime-page">
            <Navbar />
                <div className="realtime-content">
                {/* Main Card */}
                <div className="realtime-card">
                    <h2 className="realtime-title">Real time detection of text:</h2>
                    <hr className="realtime-divider" />

                    {running ? (
                        <div className="realtime-camera-container">
                            <video ref={videoRef} autoPlay className="realtime-feed" />
                            <button className="rt-btn rt-btn-stop" onClick={stopRealtime}>
                                Stop
                            </button>
                        </div>
                    ) : (
                        <button className="rt-btn" onClick={startRealtime}>
                            Start
                        </button>
                    )}
                </div>

                {/* Result Card */}
                {(result || running) && (
                    <div className="realtime-result-card">
                        <p className="realtime-result-label">Result:</p>
                        <hr className="realtime-divider" />
                        <p className="realtime-result-text">
                            {result || "Waiting for text..."}
                        </p>
                    </div>
                )}
                </div>
            <Footer/>
        </div>
    );
};

export default RealtimeText;