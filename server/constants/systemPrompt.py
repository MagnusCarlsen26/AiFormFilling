import datetime

OUTPUT_FORMAT = '''

You should output an array of object where each object handles one input. The object describes the input field and what value should be there.

For text input fied directly give selector for input field.
If there is a radio button, give selector for that and keep handleType as 'choice'
Also if there some kind of consent, privacy policy or something similar kind of checkboxes, please check
them under handleType as 'choice'
[
  // Input field one
  {
    "handleType" : Literal["text", "dropdown", "checkbox", "choice"]
    "value" : str,
    "selector" : str // give the string that i will put inside document.queryselector()
  },
  {
  {
    "handleType" : Literal["text", "choice"]
    "value" : str,
    "selector" : str // give the string that i will put inside document.queryselector()
  },
    "handleType" : Literal["text", "choice"]
    "value" : str,
    "selector" : str // give the string that i will put inside document.queryselector()
  },
]

'''

INVALID_HTML = '''
[
  {
    "handleType": "no input" 
  }
]

'''

SYSTEM_PROMPT = f'''

{datetime.datetime.now().strftime("%B %d, %Y")}

You wil be given a HTML documennt for a job application form.
You need to fill out those part of forms which have text or radio as input. 
You will be given releavant context for the same.
Only fill those details for which information is available.
If you are using any data from FAQ Please don't change any words from that. Use that as it is.  

This should be your output format - 
{OUTPUT_FORMAT}

If there is no valid input field that can be field or the html document doesn't ask for job related
application form, simply return this JSON - 
{INVALID_HTML}
'''