import { SERVER_URL } from '../constants/serverUrl'
import { userInfo } from "../constants/userInfo"

export async function sendFormHTML() {

  return fetch(`${SERVER_URL}/getFormHTML`, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: window.location.href,
      formHTML: document.querySelector('form').innerHTML,
      userInfo: userInfo
    }),
    method: 'POST'
  }).then(async (res) => (await res.json()))
    .catch(err => console.error("ERROR SENDING FORM HTML"))

}
