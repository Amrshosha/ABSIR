// import React, { useState } from "react";
// import Navbar from './Navbar1';
// import Footer from './Footer';
// import "./../styles/UploadText.css";

// const UploadText = () => {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [result, setResult] = useState("");
//     const [loading, setLoading] = useState(false);

//     const handleFileChange = (e) => {
//         setSelectedFile(e.target.files[0]);
//         setResult("");
//     };

//     const handleUpload = async () => {
//         if (!selectedFile) return;

//         setLoading(true);
//         setResult("");

//         try {
//             const formData = new FormData();
//             formData.append("file", selectedFile);

//             const response = await fetch("https://lusty-speed-parrot.ngrok-free.dev/api/text/upload", {
//                 method: "POST",
//                 headers: {
//                     "ngrok-skip-browser-warning": "true" 
//                 },
//                 body: formData,
//             });

//             const data = await response.json();
//             setResult(data.text || "No text detected.");
//         } catch (error) {
//             setResult("Error connecting to server. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="upload-text-page">
//             <Navbar />
//                 <div className="upload-content">
//                 {/* Upload Card */}
//                 <div className="upload-text-card">
//                     <h2 className="upload-text-title">detect text from an uploaded image:</h2>
//                     <hr className="upload-text-divider" />
//                     <div className="upload-text-buttons">
//                         <label className="ut-btn" htmlFor="fileInput">
//                             choose file
//                         </label>
//                         <input
//                             id="fileInput"
//                             type="file"
//                             accept="image/*"
//                             hidden
//                             onChange={handleFileChange}
//                         />
//                         <button
//                             className="ut-btn"
//                             onClick={handleUpload}
//                             disabled={!selectedFile || loading}
//                         >
//                             {loading ? "uploading..." : "upload image"}
//                         </button>
//                     </div>
//                     {selectedFile && (
//                         <p className="file-name">📎 {selectedFile.name}</p>
//                     )}
//                 </div>

//                 {/* Result Card */}
//                 {(result || loading) && (
//                     <div className="result-text-card">
//                         <p className="result-label">result:</p>
//                         <hr className="upload-text-divider" />
//                         <p className="result-text">
//                             {loading ? "analyzing..." : result}
//                             {!loading && result && " ↑"}
//                         </p>
//                     </div>
//                 )}
//                 </div>
//             <Footer/>
//         </div>
//     );
// };

// export default UploadText;






// import React, { useState } from "react";
// import Navbar from './Navbar1';
// import Footer from './Footer';
// import "./../styles/UploadText.css";

// const UploadText = () => {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [result, setResult] = useState("");
//     const [loading, setLoading] = useState(false);

//     const handleFileChange = (e) => {
//         setSelectedFile(e.target.files[0]);
//         setResult("");
//     };

//     const handleUpload = async () => {
//         if (!selectedFile) return;

//         setLoading(true);
//         setResult("");

//         try {
//             const formData = new FormData();
//             formData.append("file", selectedFile);

//             const response = await fetch("https://lusty-speed-parrot.ngrok-free.dev/api/object/upload", {
//                 method: "POST",
//                 headers: {
//                     "ngrok-skip-browser-warning": "true"
//                 },
//                 body: formData,
//             });

//             const data = await response.json();

//             console.log(data);

//             // القراءة الصحيحة للنص من الـ API
//             setResult(data.extra?.text || "No text detected.");

//         } catch (error) {
//             console.error(error);
//             setResult("Error connecting to server. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="upload-text-page">
//             <Navbar />

//             <div className="upload-content">

//                 {/* Upload Card */}
//                 <div className="upload-text-card">
//                     <h2 className="upload-text-title">
//                         detect text from an uploaded image:
//                     </h2>

//                     <hr className="upload-text-divider" />

//                     <div className="upload-text-buttons">

//                         <label className="ut-btn" htmlFor="fileInput">
//                             choose file
//                         </label>

//                         <input
//                             id="fileInput"
//                             type="file"
//                             accept="image/*"
//                             hidden
//                             onChange={handleFileChange}
//                         />

//                         <button
//                             className="ut-btn"
//                             onClick={handleUpload}
//                             disabled={!selectedFile || loading}
//                         >
//                             {loading ? "uploading..." : "upload image"}
//                         </button>

//                     </div>

//                     {selectedFile && (
//                         <p className="file-name">
//                             📎 {selectedFile.name}
//                         </p>
//                     )}
//                 </div>

//                 {/* Result Card */}
//                 {(result || loading) && (
//                     <div className="result-text-card">

//                         <p className="result-label">result:</p>

//                         <hr className="upload-text-divider" />

//                         <p className="result-text">
//                             {loading ? "analyzing..." : result}
//                             {!loading && result && " ↑"}
//                         </p>

//                     </div>
//                 )}

//             </div>

//             <Footer />
//         </div>
//     );
// };

// export default UploadText;



import React, { useState } from "react";
import Navbar from './Navbar1';
import Footer from './Footer';
import "./../styles/UploadText.css";

const UploadText = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [result, setResult] = useState(null);
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

            // 🔊 شغّل الصوت من الـ audio_b64
            if (data.audio_b64) {
                try {
                    const byteChars = atob(data.audio_b64);
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
            }

        } catch (error) {
            console.error(error);
            setResult("Error connecting to server.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="upload-text-page">

            <Navbar />

            <div className="upload-content">

                <div className="upload-text-card">

                    <h2 className="upload-text-title">
                        Detect text from image:
                    </h2>

                    <hr className="upload-text-divider" />

                    <div className="upload-text-buttons">

                        <label className="ut-btn" htmlFor="fileInput">
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
                            className="ut-btn"
                            onClick={handleUpload}
                            disabled={!selectedFile || loading}
                        >
                            {loading ? "Uploading..." : "Upload"}
                        </button>

                    </div>

                    {selectedFile && (
                        <p className="file-name">
                            📎 {selectedFile.name}
                        </p>
                    )}

                </div>

                {(result || loading) && (
                    <div className="result-text-card">

                        <p className="result-label">Result:</p>

                        <hr className="upload-text-divider" />

                        <p className="result-text">
                            {loading ? "Analyzing..." : result}
                        </p>

                    </div>
                )}

            </div>

            <Footer />

        </div>
    );
};

export default UploadText;
