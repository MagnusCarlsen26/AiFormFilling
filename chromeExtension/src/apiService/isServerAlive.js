import { SERVER_URL } from '../constants/serverUrl'

export function isServerAlive() {

  fetch(`${SERVER_URL}`, {
    method: 'GET'
  }).then( async(res) => console.log(await res.text()) )
  .catch(err => console.error("SERVER IS DEAD"))

}