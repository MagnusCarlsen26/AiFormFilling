import { SERVER_URL } from '../constants/serverUrl'

export async function validateGeminiKey(geminiApiKey) {
  try {
    const response = await fetch(`${SERVER_URL}/validate-gemini-key`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ gemini_api_key: geminiApiKey }),
    });
    return await response.json();
  } catch (error) {
    console.error('Error validating Gemini API key:', error);
    return { valid: false, error: error.message };
  }
}

