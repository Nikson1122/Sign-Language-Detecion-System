import cv2
import numpy as np
from tensorflow.keras.models import load_model

model = load_model('sign_trained_cnn.h5')

cap = cv2.VideoCapture(0)

letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

while True:
    ret, frame = cap.read()
    if not ret:
        break

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    img = cv2.resize(gray, (28, 28))

    img = img.reshape(1, 28, 28, 1)/255.0

    prediction = model.predict(img)
    class_id = np.argmax(prediction)

    predicted_letter = letters[class_id]

    print("Predicted letter:", predicted_letter)

    cv2.imshow("Sign Detection", frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()

    



    

#     cv2.putText(frame, f'Predicted: {class_id}', (10,30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0,255,0), 2)
#     cv2.imshow("Sign Detection", frame)

#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         break

# cap.release()
# cv2.destroyAllWindows()