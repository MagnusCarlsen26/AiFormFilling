import { validateGeminiKey } from "../apiService/validateGeminiKey.js";
import { readUserConfig } from "../dbService/readUserConfig.js";
import { updateUserConfig } from "../dbService/updateUserConfig.js";

const $ = (id) => document.getElementById(id);
const msg = $("msg");
const apiKeyValidationMsg = $("apiKeyValidationMsg");
const persistentApiKeyValidationMsg = $("persistentApiKeyValidationMsg");

function showMsg(text) {
  msg.textContent = text;
  setTimeout(() => (msg.textContent = ""), 2000);
}

async function load() {

  const cfg = await readUserConfig();

  $("apiKey").value = cfg.apiKey;
  $("enableTextAutofill").checked = cfg.enableTextAutofill;
  $("enableChoiceAutofill").checked = cfg.enableChoiceAutofill;
  $("resumeTextarea").value = cfg.resumeTextarea;
  $("coverLetterTextarea").value = cfg.coverLetterTextarea;
  $("faqTextarea").value = cfg.faqTextarea;

  updatePersistentValidationMsg(cfg.apiKey, cfg.isApiKeyValid);
}

async function save() {
  const apiKey = $("apiKey").value.trim();
  let isApiKeyValid = false

  if (apiKey) {
    const result = await validateGeminiKey(apiKey);
    isApiKeyValid = result.valid;
  }

  const cfg = {
    apiKey: apiKey,
    enableTextAutofill: $("enableTextAutofill").checked,
    enableChoiceAutofill: $("enableChoiceAutofill").checked,
    resumeTextarea: $("resumeTextarea").value.trim(),
    coverLetterTextarea: $("coverLetterTextarea").value.trim(),
    faqTextarea: $("faqTextarea").value.trim(),
    isApiKeyValid: isApiKeyValid,
  };
  await updateUserConfig(cfg);
  chrome.runtime.sendMessage({ type: "config-updated", payload: cfg });
  showMsg("Saved");

  updatePersistentValidationMsg(cfg.apiKey, cfg.isApiKeyValid);
}

async function validateKey() {
  persistentApiKeyValidationMsg.textContent = ""; // Clear persistent message when validating
  const apiKey = $("apiKey").value.trim();
  if (!apiKey) {
    apiKeyValidationMsg.textContent = "API Key cannot be empty.";
    apiKeyValidationMsg.style.color = "#e06c75";
    return;
  }

  apiKeyValidationMsg.textContent = "Validating...";
  apiKeyValidationMsg.style.color = "#61afef";

  const result = await validateGeminiKey(apiKey);
  let isApiKeyValid = result.valid;

  if (isApiKeyValid) {
    apiKeyValidationMsg.textContent = "API Key is valid!";
    apiKeyValidationMsg.style.color = "#98c379";
  } else {
    apiKeyValidationMsg.textContent = `API Key validation failed: ${result.error || "Unknown error"}`;
    apiKeyValidationMsg.style.color = "#e06c75";
  }
}

$("save").addEventListener("click", save);
$("validateApiKey").addEventListener("click", validateKey);

load();

function updatePersistentValidationMsg(apiKey, isApiKeyValid) {
  if (apiKey && isApiKeyValid) {
    persistentApiKeyValidationMsg.textContent = "API Key is valid (from last check).";
    persistentApiKeyValidationMsg.style.color = "#98c379";
  } else if (apiKey && !isApiKeyValid) {
    persistentApiKeyValidationMsg.textContent = "API Key is invalid (from last check).";
    persistentApiKeyValidationMsg.style.color = "#e06c75";
  } else {
    persistentApiKeyValidationMsg.textContent = "";
  }
}
