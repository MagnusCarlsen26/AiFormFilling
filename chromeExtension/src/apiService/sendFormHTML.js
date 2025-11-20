import { SERVER_URL } from '../constants/serverUrl'
import { userInfo } from "../constants/userInfo"

export async function sendFormHTML() {

  return fetch(`${SERVER_URL}/getFormHTML`, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: window.location.href,
      formHTML: getHTML(),
      userInfo: userInfo
    }),
    method: 'POST'
  }).then(async (res) => (await res.json()))
    .catch(err => console.error("ERROR SENDING FORM HTML"))

}

function getHTML() {

  const form = document.querySelector('form')

  if (form?.innerHTML) {
    console.log("Form HTML fetched successfully.")
    return form.innerHTML
  } else {
    return document.querySelector('body').innerHTML
  }

}
