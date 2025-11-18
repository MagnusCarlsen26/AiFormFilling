from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def home():
    print('Request received')
    return "Hello, this is your Flask server!"

if __name__ == "__main__":
    app.run(debug=True, port=5000)
