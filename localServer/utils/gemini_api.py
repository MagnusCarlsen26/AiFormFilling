from dotenv import load_dotenv
import google.generativeai
import os


load_dotenv()

google.generativeai.configure(
    api_key=os.environ.get("GEMINI_API_KEY"),
    transport="rest",
)

def send_gemini_message(
    message: str,
    sys_prompt: str,
    history: list = None,
    model: str = 'gemini-2.0-flash',
):
    model_instance = google.generativeai.GenerativeModel(model)

    chat_args = {}
    chat_args['system_instruction'] = sys_prompt

    convo = model_instance.start_chat(**chat_args)

    convo.send_message(message)
    return convo.last.text, convo.history


def chat_with_gemini_using_form_html():

    with open("../formHTML.html", "r", encoding="utf-8") as f:
        form_html = f.read()

    history = []
    response, history = send_gemini_message(form_html, history)
    print("Gemini (on your form HTML):")
    print(response)

    while True:
        try:
            user_input = input("\nYou: ")
            if user_input.strip().lower() in {"quit", "exit"}:
                print("Exiting chat.")
                break
            response, history = send_gemini_message(user_input, history)
            print("\nGemini:")
            print(response)
        except Exception as e:
            print(f"Error during conversation: {e}")
            break