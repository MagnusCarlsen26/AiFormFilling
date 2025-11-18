console.log('Content script loaded.');

console.log('form:')
console.log(document.querySelector('form'))

const SERVER_URL = 'http://localhost:5000'

fetch(`${SERVER_URL}`, {
  method: 'GET'
}).then( async(res) => console.log(await res.text()) )
.catch(err => console.error(err))