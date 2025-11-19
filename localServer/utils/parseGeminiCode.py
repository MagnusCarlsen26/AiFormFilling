import re
import json

def parseGeminiJSON(
    geminiOutput: str,
):

    cleanGeminiOutput = geminiOutput.strip(f"```json").strip("```")

    try:
        parsed = json.loads(cleanGeminiOutput)
    except json.JSONDecodeError:
        # Remove trailing commas before } or ]
        fixed = re.sub(r',(\s*[}\]])', r'\1', cleanGeminiOutput)
        try:
            parsed = json.loads(fixed)
        except Exception as e:
            print(f"Error parsing Gemini JSON: {e}")
            return []

    return parsed