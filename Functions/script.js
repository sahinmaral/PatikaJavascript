var add = function calculateAdd(number1, number2) {
  return number1 + number2;
};

//Hata verir.
//console.log(calculateAdd(3,4))
console.log(add(3, 4));

let takeExponential = (base, exponential) => {
  let result = 1;

  if (exponential == 0) return 1;

  for (let i = 1; i <= exponential; i++) {
    result = result * base;
  }

  return result;
};

console.log(takeExponential(7, 3));

function stringFormat(str) {
  {
    let part1 = str.slice(0, 3);
    let part2 = str.slice(3);
    str = part1.toUpperCase() + part2;
  }
  //part1 ve part2 kullanılamaz.
  //bir kosula baglı return edelim. basit olması acısından sadece true yazdım.
  if (true) {
    return str;
  }
  return str.slice(4);
}

console.log(stringFormat("Test"));

const seriesList = (list) => {
  list.forEach((series, index) => {
    console.log(`${index + 1}. ${series}`);
  });
};

seriesList(["Firefly", "The Mandalorian", "Breaking Bad"]);

const newArray = (nums) => {
  const newNums = nums.map((element) => {
    if (element % 2 == 0) {
      return element * 2;
    } else if (element % 2 == 1) {
      return element * 3;
    }
  });
  return newNums;
};

console.log(newArray([1, 2, 3, 4, 5])); // output: [3,4,9,8,15]

//id=select olan nesne çağrılarak color değişkenine atandı
const color = document.querySelector("#select");
//color değişkenine change etkinliği etkinliği atandı ve fonksiyon ismi parametre olarak atandı
color.addEventListener("change", selectBox);

//selectBox isimli fonksiyon ile selectbox her seçildiğinde etkinlik tipi =change ve değeri consola yazılmaktadır
function selectBox(event) {
  console.log("Etkinlik tipi : " + event.type);
  console.log("deger : " + event.target.value);
}

// Selectbox içinde "blue" değerini seçtiğimiz takdirde;
// ekran çıktısı: Etkinlik tipi : change, deger : blue

let greetingsHeader = document.querySelector("#greetings");
greetingsHeader.style.color = "black";

greetingsHeader.addEventListener("mouseover", domEvent);

function domEvent() {
  this.style.color == "red"
    ? (this.style.color = "black")
    : (this.style.color = "red");
}

// iç içe elementler çağrıldı
const selectBoxV2 = document.querySelector("#selectColorv2");
const button = document.querySelector("#button");
const form = document.querySelector(".inputText");
const cerceve = document.querySelector("#container");

selectBoxV2.addEventListener("click", function () {
  console.log("selectBox");
});
form.addEventListener("click", function () {
  console.log("form");
});
cerceve.addEventListener("click", function () {
  console.log("cerceve");
});

let input = document.getElementById("input");
let output = document.getElementById("output");

input.addEventListener('input', function(event) {
output.innerText = event.target.value.split('').join('');
});
