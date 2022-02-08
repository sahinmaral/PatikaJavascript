//Object prototype
let countriesTalkFrench = new Object();
countriesTalkFrench.continent = "africa";
countriesTalkFrench.language = "french";

let argentina = Object.create(countriesTalkFrench);
console.log(argentina);
console.log(argentina.continent);
console.log(argentina.language);

console.log(`\n`);

//Square brackets
let person = {}; // set (oluştur)
person["likes sea"] = true; // get (getir)
console.log(person["likes sea"]); // true (doğru)

console.log(person);

delete person["likes sea"]; // delete (sil)

console.log(person);

console.log(`\n`);

//External json files

const personJSON = require("./test.json");

console.log(personJSON.name);
console.log(personJSON.surname);
console.log(personJSON.address);
console.log(`---------------------------------------------`);
console.log(Object.keys(personJSON));
console.log(`---------------------------------------------`);
console.log(Object.values(personJSON));
console.log(`---------------------------------------------`);
console.log(Object.entries(personJSON));

console.log(`\n`);

//Functions are also objects
const fonksiyonAdi = () => {
  console.log("Merhaba Kodluyoruz");
};
console.log(fonksiyonAdi.name);
// "fonksiyonAdi"

console.log(`\n`);

function Insan(isim, yas) {
  this.isim = isim;
  this.yas = yas;
}

const ali = new Insan("ali",21);
console.log(ali.yas);
// 21

// Sınıfa prototype yardımıyla fonksiyon eklemek
Insan.prototype.yeniFonksiyon = () => {console.log("Merhaba Kodluyoruz")}
const ayse = new Insan("ayşe",22);
ayse.yeniFonksiyon();
// Output : "Merhaba Kodluyoruz"

ayse.__proto__.enYeniFonksiyon = () => {console.log("Tekrar Merhaba Kodluyoruz!")}
ayse.enYeniFonksiyon();
// Output : "Tekrar Merhaba Kodluyoruz!"

function yaz(){console.log("Merhaba Kodluyoruz")}
console.log(yaz["name"])

let kitap = {
    "kitapIsmi" : "İsim",
    "kitapYazari" : "Yazar",
    kitapTanit : function() {
        return `${this.kitapIsmi} kitabının yazarı ${this.kitapYazari}`
    }
}

console.log(kitap.kitapTanit())

console.log(`\n`);

