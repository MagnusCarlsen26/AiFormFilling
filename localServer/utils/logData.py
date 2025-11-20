import json
import os
from datetime import datetime
from zoneinfo import ZoneInfo

import uuid

def logData(url, gemini_response, html, logJsonPath='./logs/gemini_log.json', htmlDir='./logs/html'):
    os.makedirs(htmlDir, exist_ok=True)
    random_name = f"{uuid.uuid4().hex}.html"
    html_path = os.path.join(htmlDir, random_name)
    
    with open(html_path, "w", encoding="utf-8") as html_file:
        html_file.write(html if html is not None else "")

    log_entry = {
        "timestamp": datetime.now(ZoneInfo("Asia/Kolkata")).strftime("%Y-%b-%d %H:%M"),
        "url": url,
        "gemini_response": gemini_response[0],
        "html_file": random_name
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