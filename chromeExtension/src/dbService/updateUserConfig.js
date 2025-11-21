export async function updateUserConfig(newConfig) {
  await chrome.storage.sync.set(newConfig);
}