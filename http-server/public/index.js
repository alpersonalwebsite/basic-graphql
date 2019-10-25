// For the moment we are going to care just about dev
//import { port, url } from '../../constants'


const SERVER_URL = `http://localhost:9090/`

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
  console.log(parsedResponse)
  return parsedResponse.data
}

// Remember `getLuckyNumber()` is async
getLuckyNumber()
.then(({luckyNumber}) => {
  document.getElementById('root').textContent = luckyNumber
}) 