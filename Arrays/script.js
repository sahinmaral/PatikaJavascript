let person = {FirstName:"Şahin",LastName:"MARAL"}
let isActive = true
let job = "Computer Engineer"

let items = [1,2,3,JSON.stringify(person),isActive,job]

console.log(`Items : ${items}`)

console.log(`\n`)

console.log(`Item length : ${items.length}`)

console.log(`\n`)

console.log(`items[0] : ${items[0]}`)

console.log(`\n`)

console.log(`items[items.length-1] : ${items[items.length-1]}`)

console.log(`\n`)

console.log(`Array.isArray(items) : ${Array.isArray(items)}`)
console.log(`Array.isArray(job) : ${Array.isArray(job)}`)

console.log(`\n`)

// 5/2 = 2,5 -> double , float
// 5/2 = 2 -> integer 

console.log(`items[parseInt(items.length/2)-1] : ${items[parseInt(items.length/2)-1]}`)

console.log(`\n`)

console.log(`type of array : ${typeof(items)}`)

console.log(`\n`)

//sona eleman eklemek
items.push(5)
console.log(`Items : ${items}`)

console.log(`\n`)

//başa eleman eklemek
items.unshift(0)
console.log(`Items : ${items}`)

console.log(`\n`)

//sondaki elemanı çıkarmak
let poppedItem = items.pop()
console.log(`poppedItem : ${poppedItem}`)
console.log(`Items : ${items}`)

console.log(`\n`)

//baştaki elemanı çıkarmak
let shiftedItem = items.shift()
console.log(`shiftedItem : ${shiftedItem}`)
console.log(`Items : ${items}`)

console.log(`\n`)

//splice metodu
console.log(`Before Delete : ${items}`)
let deletedItem = items.splice(1,1) //silme işlemi için
console.log(`After Delete : ${items}`)

items.splice(1,0,deletedItem)
console.log(`Putting Deleted Item Again : ${items}`)

console.log(`\n`)

//slice metodu
let slicedItems = items.slice()
slicedItems.pop()
console.log(`slicedItems : ${slicedItems}`)
console.log(`items : ${items}`)

console.log(`\n`)

//slice [ES6]
let slicedItemsV2 = [...items]
slicedItemsV2.pop()
console.log(`slicedItems : ${slicedItemsV2}`)
console.log(`items : ${items}`)

console.log(`\n`)

let sumItems = [...slicedItemsV2 , ...items]
console.log(`sumItems : ${sumItems}`)

console.log(`\n`)

//split metodu
let text = "How are you doing today"
let splittedText = text.split(" ")
console.log(`splittedText : ${splittedText}`)