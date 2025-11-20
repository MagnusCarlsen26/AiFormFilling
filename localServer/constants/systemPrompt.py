OUTPUT_FORMAT = '''

You should output an array of object where each object handles one input. The object describes the input field and what value should be there.

For text input fied directly give selector for input field.
If there is a radio button, give selector for that and keep handleType as 'choice'\

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

SYSTEM_PROMPT = f'''

You wil be given a HTML documennt. It is a form. 
You need to fill out those part of forms which have text or radio as input. 
You will be given releavant context for the same.
Only fill those details for which information is available.
If you are using any data from FAQ Please don't change any words from that. Use that as it is.  


This should be your output format - 
{OUTPUT_FORMAT}
'''