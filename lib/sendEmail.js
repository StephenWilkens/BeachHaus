export function sendEmail(data) {
  const apiEndpoint = "../api/email";

  fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.headers);
      console.log(response.headers)
    })
    .catch((err) => {
      // alert(err);
      console.log(err)
    });
}
