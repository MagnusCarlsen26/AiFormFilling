export function handleChoice({
  selector,
} = {}) {

  const group = document.querySelector(selector);

  group.click()

  group.dispatchEvent(new Event('input', { bubbles: true }));
}
