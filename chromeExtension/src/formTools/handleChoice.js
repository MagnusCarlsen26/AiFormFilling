export function handleChoice({
  selector,
} = {}) {

  const group = document.querySelector(selector);

  group.click()

  target.dispatchEvent(new Event('input', { bubbles: true }));
}
