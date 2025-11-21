import json
import os
from datetime import datetime
from zoneinfo import ZoneInfo

def logData(
    url, 
    gemini_response, 
    htmlContent, 
    htmlFileName, 
    logJsonPath='./logs/gemini_log.json', 
    htmlDir='./logs/html'
):

    with open(f"{htmlDir}/{htmlFileName}", "w", encoding="utf-8") as html_file:
        html_file.write(htmlContent)

    log_entry = {
        "timestamp": datetime.now(ZoneInfo("Asia/Kolkata")).strftime("%Y-%b-%d %H:%M"),
        "url": url,
        "gemini_response": gemini_response[0],
        "html_file": htmlFileName
    }
    logs = []
    if os.path.exists(logJsonPath):
        try:
            with open(logJsonPath, 'r', encoding='utf-8') as f:
                logs = json.load(f)
                if not isinstance(logs, list):
                    logs = []
        except Exception:
            logs = []
    logs.append(log_entry)
    with open(logJsonPath, 'w', encoding='utf-8') as f:
        json.dump(logs, f, indent=2, ensure_ascii=False)