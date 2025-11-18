console.log('Content script loaded.');

// Example: fill a form field
// You would add your AI logic here to identify and fill form fields
document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.querySelector('input[name="q"]'); // Example: Google search bar
  if (inputField) {
    inputField.value = 'AI-filled content';
    console.log('Form field filled by AI Form Filling extension.');
  }
});
