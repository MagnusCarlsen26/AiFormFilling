const $ = (id) => document.getElementById(id);
const msg = $("msg");
import { validateGeminiKey } from "../apiService/validateGeminiKey.js";
const apiKeyValidationMsg = $("apiKeyValidationMsg");
const persistentApiKeyValidationMsg = $("persistentApiKeyValidationMsg");

const DEFAULTS = {
  apiKey: "",
  enableTextAutofill: true,
  enableChoiceAutofill: true,
  resumeTextarea: "",
  coverLetterTextarea: "",
  faqTextarea: "",
  isApiKeyValid: false,
};

function showMsg(text) {
  msg.textContent = text;
  setTimeout(() => (msg.textContent = ""), 2000);
}

async function load() {
  const stored = await chrome.storage.sync.get(Object.keys(DEFAULTS));
  const cfg = { ...DEFAULTS, ...stored };
  $("apiKey").value = cfg.apiKey;
  $("enableTextAutofill").checked = cfg.enableTextAutofill;
  $("enableChoiceAutofill").checked = cfg.enableChoiceAutofill;
  $("resumeTextarea").value = cfg.resumeTextarea;
  $("coverLetterTextarea").value = cfg.coverLetterTextarea;
  $("faqTextarea").value = cfg.faqTextarea;

  // Display persistent API key validation message on load
  if (cfg.apiKey && cfg.isApiKeyValid) {
    persistentApiKeyValidationMsg.textContent = "API Key is valid (from last check).";
    persistentApiKeyValidationMsg.style.color = "#98c379";
  } else if (cfg.apiKey && !cfg.isApiKeyValid) {
    persistentApiKeyValidationMsg.textContent = "API Key is invalid (from last check).";
    persistentApiKeyValidationMsg.style.color = "#e06c75";
  } else {
    persistentApiKeyValidationMsg.textContent = "";
  }
}

async function save() {
  const apiKey = $("apiKey").value.trim();
  let isApiKeyValid = DEFAULTS.isApiKeyValid;

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
  await chrome.storage.sync.set(cfg);
  chrome.runtime.sendMessage({ type: "config-updated", payload: cfg });
  showMsg("Saved");

  // Update persistent message after saving and validating
  if (cfg.apiKey && cfg.isApiKeyValid) {
    persistentApiKeyValidationMsg.textContent = "API Key is valid (from last check).";
    persistentApiKeyValidationMsg.style.color = "#98c379";
  } else if (cfg.apiKey && !cfg.isApiKeyValid) {
    persistentApiKeyValidationMsg.textContent = "API Key is invalid (from last check).";
    persistentApiKeyValidationMsg.style.color = "#e06c75";
  } else {
    persistentApiKeyValidationMsg.textContent = "";
  }
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
