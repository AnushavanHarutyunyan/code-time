function succesCallBack(response) {
    // response.country = 'Россия'
    let str2 = 'Средство №1 в России стабилизирующее выработку инсулина и уровень фосфора в организме'
    let indx = str2.indexOf('России');

    if(response.country !== 'Россия'){   
        // console.log('if' ,str2);
        let result = str2.slice(0,indx) + "Страны СНГ" + str2.substr(indx + 6)
        document.getElementById('country').innerHTML = result
    }else{
        // console.log('else' ,str2);
        let city = response.city.slice(0,6) + 'е';
        let result = str2.slice(0,indx) + `${city}` + str2.substr(indx + 6)
        document.getElementById('country').innerHTML = result
    }
}
$.get("http://ip-api.com/json/?lang=ru", succesCallBack, "jsonp");
