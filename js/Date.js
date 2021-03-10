function dateSpan() {
    let dataSpan = document.getElementsByClassName('x_price_previous');
    for(let key of dataSpan){
        console.log();
        let d = new Date();
        let p = new Date(d.getTime());
        let monthA = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        key.innerHTML = (p.getDate() + '.' + monthA[p.getMonth()] + '.' + p.getFullYear());
    }

}
dateSpan()