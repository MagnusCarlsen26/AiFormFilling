document.getElementById('fillFormButton').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      files: ['dist/assets/content-script-loader-XXX.js']
    });
  });
});
