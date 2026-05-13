// import React, { useState } from 'react';
// import './../styles/ImageAnalyzer.css';

// const ImageAnalyzer = ({ isOpen, onClose }) => {
//     const [step, setStep] = useState(1); // 1: Upload, 2: Preview, 3: Result
//     const [selectedImage, setSelectedImage] = useState(null);

//     if (!isOpen) return null;

//     // --- دالة التعامل مع رفع الصورة وفحص الحجم ---
//     const handleImageUpload = (e) => {
//         const file = e.target.files[0];
//         const MAX_FILE_SIZE = 5 * 1024 * 1024; // حد أقصى 5 ميجا بايت

//         if (file) {
//             // فحص الحجم قبل أي إجراء
//             if (file.size > MAX_FILE_SIZE) {
//                 alert("The image is too large! Maximum size is 5MB.");
//                 e.target.value = null; 
//                 return;
//             }

//             // إنشاء رابط المعاينة والانتقال للمرحلة الثانية
//             setSelectedImage(URL.createObjectURL(file));
//             setStep(2);
//         }
//     };

//     const handleAnalyze = () => {
//         setStep(3); // الانتقال لمرحلة النتائج
//     };

//     const resetAll = () => {
//         setStep(1);
//         setSelectedImage(null);
//     };

//     return (
//         <div className="modal-overlay">
//             <div className="analyzer-card">
//                 {/* Header ثابت */}
//                 <div className="analyzer-header">
//                     <div className="header-left">
//                         <div className="sparkle-icon">✨</div>
//                         <div>
//                             <h3>Image Analyzer</h3>
//                             <p>Upload an image to analyze objects and colors</p>
//                         </div>
//                     </div>
//                     <button className="close-btn" onClick={() => { onClose(); resetAll(); }}>✕</button>
//                 </div>

//                 {/* المرحلة الأولى: الرفع */}
//                 {step === 1 && (
//                     <div className="upload-area">
//                         <div className="upload-icon-circle"><span>↑</span></div>
//                         <h4>Upload an Image</h4>
//                         <p>Click to browse or drag and drop your image here</p>
//                         {/* أضفنا accept لضمان اختيار الصور فقط */}
//                         <input 
//                             type="file" 
//                             id="fileInput" 
//                             hidden 
//                             accept="image/*" 
//                             onChange={handleImageUpload} 
//                         />
//                         <label htmlFor="fileInput" className="file-label-overlay"></label>
//                     </div>
//                 )}

//                 {/* المرحلة الثانية: المعاينة قبل التحليل */}
//                 {step === 2 && (
//                     <div className="preview-container">
//                         <div className="image-preview-box">
//                             <img src={selectedImage} alt="Preview" />
//                         </div>
//                          <div className="buttons-row">  {/* ← غيّر من action-buttons لـ buttons-row */}
//                             <button className="btn-black-full-width" onClick={handleAnalyze}>Analyze Image</button>
//                             <button className="btn-outline" onClick={resetAll}>Upload Different Image</button>
//                         </div>
//                     </div>
//                 )}

//                 {/* المرحلة الثالثة: نتائج التحليل */}
//                 {step === 3 && (
//                     <div className="results-container">
//                         <div className="image-preview-box">
//                             <img src={selectedImage} alt="Analyzed" />
//                         </div>
//                         <div className="result-section1">
//                             <div className="section-title">🔍 Detected Objects</div>
//                             <div className="tags-grid">
//                                 {['Book', 'Car', 'Plant', 'Chair', 'Flower'].map(item => (
//                                     <span key={item} className="tag">{item}</span>
//                                 ))}
//                             </div>
//                         </div>

//                         <div className="result-section2">
//                             <div className="section-title">🎨 Main Colors</div>
//                             <div className="colors-grid">
//                                 <ColorCard color="#786450" name="Orange" hex="#786450" />
//                                 <ColorCard color="#a08c78" name="Orange" hex="#a08c78" />
//                                 <ColorCard color="#8c7864" name="Orange" hex="#8c7864" />
//                                 <ColorCard color="#787864" name="Gray" hex="#787864" />
//                                 <ColorCard color="#a0a08c" name="Gray" hex="#a0a08c" />
//                             </div>
//                         </div>
//                         <button className="btn-black-full-width" onClick={resetAll}>Analyze Another Image</button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// // مكون صغير لكرت الألوان
// const ColorCard = ({ color, name, hex }) => (
//     <div className="color-card">
//         <div className="color-box" style={{ backgroundColor: color }}></div>
//         <div className="color-info">
//             <span>{name}</span>
//             <small>{hex}</small>
//         </div>
//     </div>
// );

// export default ImageAnalyzer;






import React, { useState } from 'react';
import './../styles/ImageAnalyzer.css';

const ImageAnalyzer = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [result, setResult] = useState(null);

    if (!isOpen) return null;

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const MAX_FILE_SIZE = 5 * 1024 * 1024;

        if (file) {
            if (file.size > MAX_FILE_SIZE) {
                alert("The image is too large! Maximum size is 5MB.");
                e.target.value = null;
                return;
            }

            setImageFile(file); // 👈 مهم
            setSelectedImage(URL.createObjectURL(file));
            setStep(2);
        }
    };

    const handleAnalyze = async () => {
        try {
            const formData = new FormData();
            formData.append("image", imageFile);

            const res = await fetch("/api/analyze-image", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            console.log(data);

            setResult(data);
            setStep(3);

        } catch (err) {
            console.log(err);
        }
    };

    const resetAll = () => {
        setStep(1);
        setSelectedImage(null);
        setImageFile(null);
        setResult(null);
    };

    return (
        <div className="modal-overlay">
            <div className="analyzer-card">

                <div className="analyzer-header">
                    <div className="header-left">
                        <div className="sparkle-icon">✨</div>
                        <div>
                            <h3>Image Analyzer</h3>
                            <p>Upload an image to analyze objects and colors</p>
                        </div>
                    </div>
                    <button className="close-btn" onClick={() => { onClose(); resetAll(); }}>✕</button>
                </div>

                {step === 1 && (
                    <div className="upload-area">
                        <div className="upload-icon-circle"><span>↑</span></div>
                        <h4>Upload an Image</h4>
                        <p>Click to browse or drag and drop your image here</p>
                        <input 
                            type="file" 
                            id="fileInput" 
                            hidden 
                            accept="image/*" 
                            onChange={handleImageUpload} 
                        />
                        <label htmlFor="fileInput" className="file-label-overlay"></label>
                    </div>
                )}

                {step === 2 && (
                    <div className="preview-container">
                        <div className="image-preview-box">
                            <img src={selectedImage} alt="Preview" />
                        </div>
                        <div className="buttons-row">
                            <button className="btn-black-full-width" onClick={handleAnalyze}>
                                Analyze Image
                            </button>
                            <button className="btn-outline" onClick={resetAll}>
                                Upload Different Image
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="results-container">
                        <div className="image-preview-box">
                            <img src={selectedImage} alt="Analyzed" />
                        </div>

                        <div className="result-section1">
                            <div className="section-title">🔍 Detected Objects</div>
                            <div className="tags-grid">
                                {result?.objects?.map((item, i) => (
                                    <span key={i} className="tag">{item}</span>
                                ))}
                            </div>
                        </div>

                        <div className="result-section2">
                            <div className="section-title">🎨 Main Colors</div>
                            <div className="colors-grid">
                                {result?.colors?.map((c, i) => (
                                    <ColorCard key={i} color={c.hex} name={c.name} hex={c.hex} />
                                ))}
                            </div>
                        </div>

                        <button className="btn-black-full-width" onClick={resetAll}>
                            Analyze Another Image
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const ColorCard = ({ color, name, hex }) => (
    <div className="color-card">
        <div className="color-box" style={{ backgroundColor: color }}></div>
        <div className="color-info">
            <span>{name}</span>
            <small>{hex}</small>
        </div>
    </div>
);

export default ImageAnalyzer;