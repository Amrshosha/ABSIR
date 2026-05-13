import React, { useState, useRef, useEffect } from "react";

import Navbar from "./Navbar1";
import Footer from "./Footer";
import "./../styles/RealtimeImages.css";

const RealtimeImages = () => {
    const [running, setRunning] = useState(false);
    const [resultImage, setResultImage] = useState(null);

    const videoRef = useRef(null);
    const streamRef = useRef(null);
    const intervalRef = useRef(null);

    const startRealtime = async () => {
        setRunning(true);
        setResultImage(null);

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            streamRef.current = stream;
            videoRef.current.srcObject = stream;

            intervalRef.current = setInterval(() => {
                captureAndSend();
            }, 3000);
        } catch (err) {
            console.error(err);
            setRunning(false);
            alert("Camera access denied.");
        }
    };

    const captureAndSend = () => {
        if (!videoRef.current) return;

        const canvas = document.createElement("canvas");
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(videoRef.current, 0, 0);

        canvas.toBlob(async (blob) => {
            const formData = new FormData();
            formData.append("image", blob, "realtime.jpg");

            try {
                const response = await fetch(
                    "http://absir.runasp.net/api/ocr/upload",
                    {
                        method: "POST",
                        body: formData,
                    }
                );

                const data = await response.json();

                // 👇 هنا افترضنا الـ API بيرجع صورة processed أو base64
                if (data.image || data.image_b64) {
                    const imgSrc = data.image
                        ? data.image
                        : `data:image/jpeg;base64,${data.image_b64}`;

                    setResultImage(imgSrc);
                }
            } catch (err) {
                console.error(err);
            }
        }, "image/jpeg");
    };

    const stopRealtime = () => {
        clearInterval(intervalRef.current);

        if (streamRef.current) {
            streamRef.current.getTracks().forEach((t) => t.stop());
        }

        setRunning(false);
    };

    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current);

            if (streamRef.current) {
                streamRef.current.getTracks().forEach((t) => t.stop());
            }
        };
    }, []);

    return (
        <div className="realtime-page-images">
            <Navbar />

            <div className="realtime-content-images">
                {/* Main Card */}
                <div className="realtime-card-images">
                    <h2 className="realtime-title-images">
                        Real time image detection:
                    </h2>
                    <hr className="realtime-divider-images" />

                    {running ? (
                        <div className="realtime-camera-container-images">
                            <video
                                ref={videoRef}
                                autoPlay
                                className="realtime-feed-images"
                            />

                            <button
                                className="rt-btn rt-btn-stop-images"
                                onClick={stopRealtime}
                            >
                                Stop
                            </button>
                        </div>
                    ) : (
                        <button className="rt-btn-images" onClick={startRealtime}>
                            Start
                        </button>
                    )}
                </div>

                {/* Result Card */}
                {(resultImage || running) && (
                    <div className="realtime-result-card-images">
                        <p className="realtime-result-label-images">Result:</p>
                        <hr className="realtime-divider-images" />

                        {resultImage ? (
                            <img
                                src={resultImage}
                                alt="processed result-images"
                                className="realtime-result-image"
                            />
                        ) : (
                            <p className="realtime-result-images">
                                Waiting for image...
                            </p>
                        )}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default RealtimeImages;