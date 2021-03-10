let url = window.location.href;
//Եթե ներքևի url կոմենտից հանենք alert-ը կտեսնենք,այս պահին չի աշխատում որովհետև url-ը local է
//let url = new URL('http://local.ru/?callback=1'); 
let params = new URLSearchParams(url.search.slice(1));

if(params.has('callback')){
    let param = 'callback=1';
    let indx = param.indexOf('=') + 1
    alert(`Есть параметр callback, со значением: ${param.slice(indx)}`)
}
