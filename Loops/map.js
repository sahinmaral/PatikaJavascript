const numbersText = ["123","1234","4523","7734"]

const parsedNumbersObject = numbersText.map(number => {

    let parsedNumber = parseInt(number)

   return {
       parsedIntegerNumber : parsedNumber , 
       sumNumber : number.split("").reduce((a,b) => {
           return parseInt(a) + parseInt(b)
        },0)
   }
})

console.log(parsedNumbersObject)
