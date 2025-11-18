from bs4 import BeautifulSoup

def format_and_save_html(html_content, file_path):
    try:
        soup = BeautifulSoup(html_content, "html.parser")

        remove_unwanted_attributes(soup)
        # remove_tags_without_immediate_text(soup)

        formatted_html = soup.prettify()
        num_chars = len(formatted_html)
        print(f"Formatted HTML has {num_chars} characters.")

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(formatted_html)

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

def remove_tags_without_immediate_text(soup):
    # Iterate in reverse to avoid tag removal issues
    for tag in reversed(list(soup.find_all(True))):
        text = tag.string
        # Remove tag if it contains only whitespace or no immediate text
        if (text is None or not text.strip()) and tag.contents and any(child.name for child in tag.contents):
            continue  # This tag contains other tags, skip
        if text is None or not text.strip():            tag.decompose()
