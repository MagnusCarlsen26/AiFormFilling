import { userModel } from "./userModel.js";

export async function readUserConfig() {
  const stored = await chrome.storage.sync.get(Object.keys(userModel));

  return {
    ...userModel,
    ...stored
  }

} 
