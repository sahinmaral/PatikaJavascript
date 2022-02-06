
reverseString("1234")
console.log(`\n`)
reverseString(Number(1234))

function reverseString(s) {
    
    try {
        let items = s.split("").reverse()
        console.log(items.join(""))
    } catch (error) {
        console.log(error.message)
        let parsedText = s.toString()
        console.log([...parsedText].join(""))
    }
}



