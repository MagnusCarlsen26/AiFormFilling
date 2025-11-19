console.log('Content script loaded.');

const SERVER_URL = 'http://localhost:5000'

inputTools(
  inputType="text",
  payload={
    value: "khushal",
    selector: "#field-5"
  }
)

function handleTextInput(payload) {
  
  console.log(payload)
  const { 
    value, 
    selector, 
  } = payload

  const isEditable = (el) =>
    !el.disabled && !el.readOnly && el.getAttribute?.('aria-disabled') !== 'true';

  const candidates = document.querySelectorAll(selector)
  if ( candidates.length === 0 ) {
    alert('no input field found')
    return
  }

  if ( candidates.length > 1 ) {
    alert('multiple input field found')
    return
  }
  
  const el = candidates[0]

  // Framework-safe setter for inputs/textarea
  const setNativeValue = (input, val) => {
    const proto =
      input instanceof HTMLTextAreaElement
        ? HTMLTextAreaElement.prototype
        : HTMLInputElement.prototype;
    const desc = Object.getOwnPropertyDescriptor(proto, 'value');
    if (!desc || !desc.set) {
      input.value = val;
    } else {
      desc.set.call(input, val);
    }
  };

  // Update value
  if (el.isContentEditable) {
    el.focus();
    el.innerHTML = '';
    el.textContent = value;
    el.dispatchEvent(new InputEvent('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  } else {
    // Input/textarea path
    el.focus();
    setNativeValue(el, value);

    // Try modern InputEvent first
    try {
      el.dispatchEvent(
        new InputEvent('input', { bubbles: true, inputType: 'insertText' })
      );
    } catch {
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }

    el.dispatchEvent(new Event('change', { bubbles: true }));

    const tracker = el._valueTracker;
    if (tracker) tracker.setValue('' + value);
  }

  return el;
}

function handleDropdown(selectElement) {
  console.log('Handling dropdown:', selectElement);
}

function handleCheckbox(checkboxElement) {
  console.log('Handling checkbox:', checkboxElement);
}

function handleChoice(choiceElement) {
  console.log('Handling choice:', choiceElement);
}

function inputTools(inputType, payload) {
  switch (inputType) {
    case 'text':
      handleTextInput(payload);
      break;
    case 'dropdown':
      handleDropdown(payload);
      break;
    case 'checkbox':
      handleCheckbox(payload);
      break;
    case 'choice':
      handleChoice(payload);
      break;
    default:
      console.log('Unknown input type:', inputType);
  }
}

function sendFormHTML() {
  
  fetch(`${SERVER_URL}/getFormHTML`, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      formHTML: document.querySelector('form').innerHTML
    }),
    method: 'POST'
  }).then( async(res) => console.log(await res.text()) )
  .catch(err => console.error("ERROR SENDING FORM HTML"))

}

function isServerAlive() {

  fetch(`${SERVER_URL}`, {
    method: 'GET'
  }).then( async(res) => console.log(await res.text()) )
  .catch(err => console.error("SERVER IS DEAD"))

}