// let localStorage = localStorage.setItem('Product quantity:',`${countProduct}`)

if(localStorage.length === 0) {
    decrement()
}else{
    let countProduct = document.getElementsByClassName('lastpack');
    for(let key of countProduct){
        key.innerHTML = localStorage.getItem('Product_quantity')
    }
}

function decrement() {
    let countProduct = document.getElementsByClassName('lastpack');
    for(let key of countProduct){
        if(key.innerHTML === '7'){
            localStorage.setItem('Product_quantity',`${key.innerHTML}`);
            clearInterval(x)
        }else{
            localStorage.setItem('Product_quantity',`${key.innerHTML}`);
            key = --key.innerHTML
        }
        
    }
};

let x = setInterval(decrement,13000);

// decrement()
