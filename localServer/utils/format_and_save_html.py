from bs4 import BeautifulSoup

def formatHTML(html_content):
    try:
        soup = BeautifulSoup(html_content, "html.parser")

        remove_unwanted_attributes(soup)

        formatted_html = soup.prettify()
        num_chars = len(formatted_html)
        print(f"Formatted HTML has {num_chars} characters.")

        return formatted_html
    except Exception as e:
        print(f"Error formatting html at {file_path}: {e}")

def remove_unwanted_attributes(soup):
    for tag in soup.find_all(True):
        attrs_to_keep = {}
        if 'class' in tag.attrs:
            attrs_to_keep['class'] = tag.attrs['class']
        if 'id' in tag.attrs:
            attrs_to_keep['id'] = tag.attrs['id']
        tag.attrs = attrs_to_keep

def saveHTML(
    file_path: str,
    formatted_html: str
):

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(formatted_html)

