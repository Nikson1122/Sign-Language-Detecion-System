import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score
import joblib

from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense

train_data = pd.read_csv('sign_mnist_train.csv')
test_data = pd.read_csv('sign_mnist_test.csv')

print("Train data is :")
print(train_data.head())

print("/n Test data is :")
print(test_data.head())

# x_train = train_data.drop('label', axis=1).values
# y_train = train_data['label'].values

# x_test = train_data.drop('label', axis=1).values
# y_test = train_data['label'].values

x_train = train_data.drop('label', axis=1).values
y_train = train_data['label'].values

x_test = test_data.drop('label', axis=1).values
y_test = test_data['label'].values

x_train = x_train/ 255.0
x_test = x_test/ 255.0

x_train = x_train.reshape(-1, 28, 28, 1)
x_test = x_test.reshape(-1, 28, 28, 1)

#Training the model using cnn model

model = Sequential([
    Conv2D(32, (3,3), activation ='relu', input_shape=(28, 28, 1)),
    MaxPooling2D((2,2)),
    Conv2D(64, (3,3), activation ='relu'),
    MaxPooling2D((2,2)),
    Flatten(),
    Dense(128, activation='relu'),
    Dense(26, activation='softmax')
])

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])   

model.fit(x_train, y_train, epochs=10, batch_size=40, validation_data=(x_test, y_test))

model.save("sign_trained_cnn.h5")
print("CNN model saved sucessfully")