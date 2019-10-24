// For the moment we are going to care just about dev
import { port, url } from '../constants'

console.log(url)

const SERVER_URL = `${url}${port}/`

const getLuckyNumber = async () => {
   const response = await fetch(SERVER_URL, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      query: `
        query {
          luckyNumber
        }
      `
    })
  })
  const parsedResponse = await response.json()
  return parsedResponse.data
}

// Remember `getLuckyNumber()` is async
getLuckyNumber()
.then(({luckyNumber}) => {
  document.getElementById('root').textContent = luckyNumber
}) 