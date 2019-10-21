const SERVER_URL = 'http://localhost:9090/'

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