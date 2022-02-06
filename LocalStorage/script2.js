let user = {userName : "sahinmaral" , isActive : true}

console.log(`UserName : ${user.userName}`)
console.log(`IsActive : ${user.isActive}`)

//localStorage.setItem("userInfo",user)
localStorage.setItem("userInfo",JSON.stringify(user))

//let userInfo = localStorage.getItem("userInfo")
let userInfo = JSON.parse(localStorage.getItem("userInfo"))

console.log(userInfo)

