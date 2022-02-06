let formDOM = document.getElementById("userForm");
formDOM.addEventListener("submit", preventSubmit);

function preventSubmit(event) {
  event.preventDefault();
  console.log("islem gerceklesti");
}

let firstName = null;
let lastName = null;

//onChange
function handleChanged(event) {
  switch (event.target.name) {
    case "firstName":
      firstName = event.target.value;
      break;
    case "lastName":
      lastName = event.target.value;
      break;
    default:
      break;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(`FirstName : ${firstName} - lastName : ${lastName}`);
}

formDOM.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("test");
});

// Normal olarak önce konsol üzerinde test ,
// sonra firstName ve lastName bilgisi
// sonra da islem gerceklesti gelmesi gerekirken
// önce HTML üzerinden atanan event olan handleSubmit e bağlı fonksiyon
// firstName ve lastName bilgisi sonra ise islem gerceklesti ve
// test yazıldı.

// Bu olay , CSS üzerinde de aynıdır. Sebebi internal yazılan CSS ve JS kodlarının
// external yazılan kodlara göre önceliği vardır. CSS üzerinde bu önceliği kaldırmak için
// mesela external yazılan CSS üzerinde hangi özellik ortak ise onun yanına "!important yazılır."
