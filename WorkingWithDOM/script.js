console.log(document.URL)
console.log(document.location)

document.body.style.backgroundColor = "lightblue"

function testFunction() {
    alert("Clicked")
}

var button = document.getElementById("btnClick")

button.addEventListener("click",testFunction)
button.classList.add("btn")

console.log(document.
getElementsByTagName("title")[0].innerHTML)

// let greeting = prompt("Herhangi bir metin giriniz")

//document.querySelector("#title").innerHTML = greeting;

//Obje şeklinde döndürür 
let listeNodes = document.getElementsByClassName("liste")

for (let i = 0; i < listeNodes.length; i++) {
    listeNodes[i].style.color = "red"
}


//HTML şeklinde döndürür ve appendChild yazmamızı sağlar
listeNodes = document.querySelector(".liste")

let newList = document.createElement("li");
newList.textContent = "Mike Ehrmantraut"

//Append , en sondaki düğüme(node) ; prepend ise 
//en baştaki düğüme(node) ekler. 

// listeNodes.append(newList)
listeNodes.prepend(newList)

let btnTest = document.getElementById("btnTest")
console.log(btnTest.classList.item(0))
console.log(btnTest.classList.item(1))
console.log(btnTest.classList.item(2))
console.log(btnTest.classList.contains("btn"))
console.log(btnTest.classList.contains("btn-warning"))

btnTest.classList.toggle("colorp")

let btnAdd = document.createElement("button")
btnAdd.textContent = "ClassList Add"

btnAdd.classList.add("colorp")

document.getElementById("pAdd").appendChild(btnAdd)

//Node klonlamak için kullanılır. Aynı HTML elementi,
//iki farklı HTML elementi içerisinde olamaz.
let btnRemove = btnAdd.cloneNode(true)
btnRemove.classList.remove("colorp")
btnRemove.textContent = "ClassList Remove"

document.getElementById("pRemove").appendChild(btnRemove)

let btnReplace = btnAdd.cloneNode(true)
btnReplace.classList.replace("colorp","colorn")
btnReplace.textContent = "ClassList Replace"

document.getElementById("pReplace").appendChild(btnReplace)

let pElementItem = document.getElementById("pItem")
pElementItem.textContent = `P elementinin sınıflarından birincisi : ${pElementItem.classList.item(0)}`

if(pElementItem.classList.contains("classList"))
document.getElementById("pContainsTrue").textContent = "true"
else
document.getElementById("pContainsFalse").textContent = "false"

document.getElementById("length").textContent = `ClassList Replace Butonu içerisinde ${btnReplace.classList.length} tane sınıf var`

document.getElementById("toggleButton").classList.toggle("colors")