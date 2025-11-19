import { SERVER_URL } from '../constants/serverUrl'

export function sendFormHTML() {
  
  fetch(`${SERVER_URL}/getFormHTML`, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      formHTML: document.querySelector('form').innerHTML
    }),
    method: 'POST'
  }).then( async(res) => console.log(await res.text()) )
  .catch(err => console.error("ERROR SENDING FORM HTML"))

}