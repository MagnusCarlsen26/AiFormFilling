export function handleText(payload) {
  console.log(payload);

  const { value, selector } = payload;
  const candidates = document.querySelectorAll(selector);

  if (candidates.length === 0) {
    alert('no input field found');
    return;
  }

  if (candidates.length > 1) {
    alert('multiple input field found');
    return;
  }

  const el = candidates[0];

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
