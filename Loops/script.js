
vowelsAndConsonants("javascriptloops")

function vowelsAndConsonants(s) {
    let vowels = []
    let consonants = []

    let items = s.toLowerCase().split("")
    
    for(let i = 0; i < items.length; i++){
        if(items[i] === "a" ||  
        items[i] === "e" || 
        items[i] === "i" || 
        items[i] === "o" || 
        items[i] === "u") 
        vowels.push(items[i])
        else
        consonants.push(items[i])   
    }
    
    let sumItems = [...vowels , ...consonants]
    
    sumItems.forEach(element => console.log(element))
    
}



function writeOddValues(){

    let items = []

    for(let i=0; i<50;i++){
        if(i % 2 == 1)
        items.push(i)
    }

    console.log(items)
}

writeOddValues()

