let username = "sahinmaral"

const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

console.log("Merhaba",username,"sitemize hoşgeldin","mail adresin :",email)

//Altgr + Virgül
let info = `Merhaba ${username} sitemize hoşgeldin. mail adresin ${email}

mail adresinin uzunluğu ${email.length}`

console.log(info)

const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
}
const bookTable = `
    <table border>
    <tbody>
    <tr>
    <td>Kitap</td>
    <td>${kitap.ad}</td>
    </tr>
    <tr>
    <td>Yazar</td>
    <td>${kitap.yazar}</td>
    </tr>
    <tr>
    <td>Tarih</td>
    <td>${kitap.tarih}</td>
    </tr>
    </tbody>
    </table>`

document.body.innerHTML = bookTable
