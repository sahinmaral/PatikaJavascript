let settings = {
    "username" : "admin",
    "password" : "adminbadpasword",
    "isActive" : true,
    "ip" : "127.0.0.1",
    "serverName" : "localhost"
}

//rename ve destructuring
let {username:user , password , isActive , ip: serverIP , serverName} = settings

console.log(user,serverIP)
console.log(user)
console.log(settings)

console.log(`\n`)

let {username : username2 , password : password2, isActive : isActive2, ...serverSettings} = settings
console.log(serverSettings)

console.log(`\n`)

//Destructuring ile kopyalama
let settings2 = {...settings}

console.log(settings2)

console.log(`\n`)

let score = [100,200,300,400]

//Geriye kalan değererin OtherScore 
//içerisinde yeni bir dizi olarak oluşması için
//destructuring kullanılır.
let [score1,score2,...otherScore] = score

console.log(otherScore)

