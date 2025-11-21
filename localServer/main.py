from flask import Flask, jsonify
from flask_cors import CORS
from flask import request

from utils.gemini_api import send_gemini_message
from utils.format_and_save_html import formatHTML, saveHTML
from utils.parseGeminiCode import parseGeminiJSON
from utils.logData import logData
from constants.systemPrompt import SYSTEM_PROMPT
import google.generativeai as genai
from requests.exceptions import RequestException

app = Flask(__name__)
CORS(app)

@app.route("/getFormHTML", methods=["POST"])
def getFormHTML():

    payload = request.get_json()
    print("form html payload:")
    print(payload)

    url = payload.get("url")
    form_html = formatHTML(payload.get("formHTML"))
    userInfo = payload.get("userInfo")

    geminiResponse = send_gemini_message(
        message=f"userInfo: {userInfo} \n {form_html}",
        sys_prompt=SYSTEM_PROMPT,
        history=[],
        model='gemini-2.5-flash'
    )

    htmlFileName = saveHTML(
        "./logs/lastPage.html",
        formatted_html=form_html
    )
    logData(url, geminiResponse, form_html, htmlFileName)

    return parseGeminiJSON(
        geminiResponse[0],
    )

@app.route("/validate-gemini-key", methods=["POST"])
def validate_gemini_key():
    payload = request.get_json()
    gemini_api_key = payload.get("gemini_api_key")

    try:
        genai.configure(api_key=gemini_api_key)
        # Attempt to list models to validate the API key
        list(genai.list_models())
        return jsonify({"valid": True})
    except Exception as e:
        print(f"Gemini API key validation failed: {e}")
        return jsonify({"valid": False, "error": str(e)}), 400

@app.route("/", methods=["GET"])
def home():
    print('Request received')
    return "Hello, this is your Flask server!"

if __name__ == "__main__":
    app.run(debug=True, port=5000)
