

// kullanıcıdan isim aldık


myName.innerHTML=prompt("isim girin")
let link = document.querySelector("#myName")

// tarih bilgisi için function oluşturduk
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

function clockFunction(){
    let dateTime=new Date();
    let day = days[dateTime.getDay()];
    let hours=dateTime.getHours();
    let minutes=dateTime.getMinutes();
    let seconds =dateTime.getSeconds();
    document.querySelector("#myClock").innerHTML=`${hours}: ${minutes}:${seconds}     ${day}`
}

setInterval(clockFunction,1000);

