console.log('Content script loaded.');

console.log('form:')
console.log(document.querySelector('form').innerHTML)

const SERVER_URL = 'http://localhost:5000'

sendFormHTML()

function sendFormHTML() {
  
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

function isServerAlive() {

  fetch(`${SERVER_URL}`, {
    method: 'GET'
  }).then( async(res) => console.log(await res.text()) )
  .catch(err => console.error("SERVER IS DEAD"))

}