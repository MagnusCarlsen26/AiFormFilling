import json
import os
from datetime import datetime
from zoneinfo import ZoneInfo

def logData(url, gemini_response, log_file='./logs/gemini_log.json'):
    log_entry = {
        "timestamp": datetime.now(ZoneInfo("Asia/Kolkata")).strftime("%Y-%b-%d %H:%M"),
        "url": url,
        "gemini_response": gemini_response[0]
    }
    logs = []
    if os.path.exists(log_file):
        try:
            with open(log_file, 'r', encoding='utf-8') as f:
                logs = json.load(f)
                if not isinstance(logs, list):
                    logs = []
        except Exception:
            logs = []
    logs.append(log_entry)
    with open(log_file, 'w', encoding='utf-8') as f:
        json.dump(logs, f, indent=2, ensure_ascii=False)