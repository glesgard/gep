

function reminder(){
    //alert("Ты здесь слишком долго!")
    window.location.href("https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0");
}
//setTimeout(reminder, 5000)
function valid(){
    var name = document.getElementById("name").value;
    console.log(name);
    
    var password = document.getElementById("password").value;
    console.log(password);
    var email = document.getElementById("email").value;
    console.log(email);
    var nomer = document.getElementById("nomer").value;
    console.log(nomer);
    
    var reg_name = /^[a-zа-яё]+$/i;
    var reg_password = /^[a-z0-9]{5,100}$/i;
    var reg_email = /^[a-z0-9@]$/i;
    var reg_nomer = /^[0-9]{11}$/;
    if (reg_nomer.test(nomer) == false){
        alert("Ошибка в номере")
    
    }
    if (reg_name.test(name) == false){
        alert("Ошибка в данных поля ФИО")
    
    }
    if (reg_password.test(password) == false){
        alert("Ошибка в пароле")
    }
    if (reg_email.test(email) == false){
        alert("Ошибка в почте")
    }
    
}
document.querySelector(".button").addEventListener("click", valid);

//document.querySelector("input");
//console.log(test);