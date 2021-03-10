$(document).ready(function () { 
    let inputsPhone = document.getElementsByClassName('phoneInput')
    for(let key of inputsPhone){
        $(key).mask("+7(999) 999-9999");
    }
})