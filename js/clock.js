let username = prompt("Adınızı giriniz.")
let myName = document.querySelector("#myName")
myName.innerHTML = `${username}`


let myClock = document.querySelector("#myClock")
    var date =new Date()
    
    var gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    
    myClock.innerHTML = `
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${gunler[date.getDay()]} 
    `
    
    setInterval(showTime,1000)