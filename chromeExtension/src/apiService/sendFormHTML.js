import { SERVER_URL } from '../constants/serverUrl'
import { userInfo } from "../constants/userInfo"
import { readUserConfig } from '../dbService/readUserConfig';

export async function sendFormHTML() {

  return fetch(`${SERVER_URL}/getFormHTML`, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: window.location.href,
      formHTML: document.querySelector('body').innerHTML,
      geminiApiKey: await readUserConfig().then(res => res.apiKey),
      userInfo: await userInfo()
    }),
    method: 'POST'
  }).then(async (res) => (await res.json()))
    .catch(err => console.error("ERROR SENDING FORM HTML"))

}
