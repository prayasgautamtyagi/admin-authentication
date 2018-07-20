export const postMethod = (url, data, token) => (
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "x-access-token": token,
    }
  })
  .then(response => response.json())
  .catch(error => console.log('error', error.message))
)

export const getMethod = (url,token) => (
    fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "x-access-token": token,
      }
    })
    .then(response => response.json())
    .catch(error => console.log('error', error.message))
)



