from ast import parse
from flask import Flask
from flask_cors import CORS
from flask import request

from utils.format_and_save_html import formatHTML 
from utils.gemini_api import send_gemini_message
from utils.parseGeminiCode import parseGeminiJSON
from constants.systemPrompt import SYSTEM_PROMPT

app = Flask(__name__)
CORS(app)

@app.route("/getFormHTML", methods=["POST"])
def getFormHTML():

    payload = request.get_json()
    print("form html payload:")
    print(payload)

    form_html = payload.get("formHTML")
    userInfo = payload.get("userInfo")
    geminiResponse = send_gemini_message(
        message=f"userInfo: {userInfo} \n {form_html}",
        sys_prompt=SYSTEM_PROMPT,
        history=[],
        model='gemini-2.0-flash'
    )

    return parseGeminiJSON(
        geminiResponse[0],
    )

@app.route("/", methods=["GET"])
def home():
    print('Request received')
    return "Hello, this is your Flask server!"

if __name__ == "__main__":
    app.run(debug=True, port=5000)