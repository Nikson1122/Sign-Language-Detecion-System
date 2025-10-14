from fastapi import FastAPI, File, UploadFile 
import numpy as np
import cv2
from tensorflow.keras.models import load_model
from fastapi.responses import JSONResponse

app = FastAPI()

model = load_model('sign_trained_cnn.h5')

letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

@app.get("/")
def home():
    return{"message": "Welcome to Sign Language Detection API"}

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):

    contents = await file.read()
    nparr= np.frombuffer(contents, np.uint8)

    img = cv2.imdecode(nparr, cv2.IMREAD_GRAYSCALE)
    img = cv2.resize(img, (28, 28))
    img = img.reshape(1, 28, 28, 1)
    img = img / 255.0

    prediction = model.predict(img)
    predicted_class = np.argmax(prediction)
    predicted_letter = letters[predicted_class]

    return JSONResponse(content={
    "predicted_class": int(predicted_class),
    "predicted_letter": predicted_letter
    })
