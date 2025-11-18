from flask import Flask
from flask_cors import CORS
from flask import request

from utils.format_and_save_html import format_and_save_html

app = Flask(__name__)
CORS(app)

@app.route("/getFormHTML", methods=["POST"])
def getFormHTML():

    payload = request.get_json()
    print("form html payload:")
    print(payload)

    form_html = payload.get("formHTML", "")
    # Save the form HTML to a file
    try:
        format_and_save_html(form_html, file_path="formHTML.html")
    except Exception as e:
        print(f"Error saving form HTML: {e}")
        return "Error saving form HTML", 500

    return "Payload received and saved", 200


@app.route("/", methods=["GET"])
def home():
    print('Request received')
    return "Hello, this is your Flask server!"

if __name__ == "__main__":
    app.run(debug=True, port=5000)