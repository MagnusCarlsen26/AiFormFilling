OUTPUT_FORMAT = '''

You should output an array of object where each object handles one input. The object describes the input field and what value should be there.

[
  // Input field one
  {
    "handleType" : Literal["text", "dropdown", "checkbox", "choice"]
    "value" : str,
    "selector" : str // give the string that i will put inside document.queryselector()
  },
  {
  {
    "handleType" : Literal["text", "dropdown", "checkbox", "choice"]
    "value" : str,
    "selector" : str // give the string that i will put inside document.queryselector()
  },
    "handleType" : Literal["text", "dropdown", "checkbox", "choice"]
    "value" : str,
    "selector" : str // give the string that i will put inside document.queryselector()
  },
]

'''

SYSTEM_PROMPT = f'''

You wil be given a HTML documennt. It is a form. You need to fill out those part of forms which have text as input. You will be given releavant context for the same.

This should be your output format - 
{OUTPUT_FORMAT}
'''