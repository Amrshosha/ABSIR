import React, { useState } from "react";
import Navbar from './Navbar1';
import Footer from './Footer';
import "./../styles/UploadImages.css";

const UploadImages = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setResult("");
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        setLoading(true);
        setResult("");

        try {
            const formData = new FormData();
            formData.append("file", selectedFile);

            const response = await fetch("https://lusty-speed-parrot.ngrok-free.dev/api/object/upload", {
                method: "POST",
                headers: {
                    "ngrok-skip-browser-warning": "true"
                },
                body: formData,
            });

            const data = await response.json();

            console.log(data);

            // القراءة الصحيحة للنص من الـ API
            setResult(data.extra?.images || "No images detected.");

        } catch (error) {
            console.error(error);
            setResult("Error connecting to server. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="upload-page-images">
            <Navbar />

            <div className="upload-content-images">

                {/* Upload Card */}
                <div className="upload-card-images">
                    <h2 className="upload-title-images">
                        Detect images from an uploaded image:
                    </h2>

                    <hr className="upload-divider-images" />

                    <div className="upload-buttons-images">

                        <label className="ut-btn-images" htmlFor="fileInput">
                            Choose File
                        </label>

                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleFileChange}
                        />

                        <button
                            className="ut-btn-images"
                            onClick={handleUpload}
                            disabled={!selectedFile || loading}
                        >
                            {loading ? "uploading..." : "Upload Image"}
                        </button>

                    </div>

                    {selectedFile && (
                        <p className="file-name-images">
                            📎 {selectedFile.name}
                        </p>
                    )}
                </div>

                {/* Result Card */}
                {(result || loading) && (
                    <div className="result-card-images">

                        <p className="result-label-images">Result:</p>

                        <hr className="upload-divider-images" />

                        <p className="result-images">
                            {loading ? "analyzing..." : result}
                            {!loading && result && " ↑"}
                        </p>

                    </div>
                )}

            </div>

            <Footer />
        </div>
    );
};

export default UploadImages;
