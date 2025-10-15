import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const WebcamPredictor = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  // 1️⃣ Capture image from webcam
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  // 2️⃣ Send image to FastAPI — this is where your code goes
  const sendImage = async () => {
    if (!image) return alert("Please capture an image first!");

    const blob = await fetch(image).then((res) => res.blob());
    const formData = new FormData();
    formData.append("file", blob, "capture.jpg");

    try {
      const response = await axios.post("http://127.0.0.1:8000/predict/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(`Predicted Letter: ${response.data.predicted_letter}`);
    } catch (err) {
      console.error(err);
      setResult("Error occurred while predicting");
    }
  };

  // 3️⃣ JSX return
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <h1 className="text-2xl font-bold text-blue-600">Sign Language Detection (Webcam)</h1>

      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={400}
        height={300}
        className="rounded-lg shadow-lg"
      />

      <div className="space-x-4">
        <button onClick={capture} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Capture
        </button>

        <button onClick={sendImage} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Predict
        </button>
      </div>

      {image && <img src={image} alt="Captured" className="mt-4 rounded-lg w-48 border" />}
      {result && <p className="mt-4 text-lg font-semibold text-gray-700">{result}</p>}
    </div>
  );
};

export default WebcamPredictor;
