fetch("data/settings.json")
  .then((response) => {
    return response.json();
  })
  .then((responseJSON) => {
    console.log(responseJSON);
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((responseData) => {
    console.log(responseData[0]);
  });

// 💭 POST isteği ile verimizi servera gönderelim
let payload = {
  title: "Blog Title",
  body: "lorem ipsum",
  userId: 1,
};
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(payload),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));


  