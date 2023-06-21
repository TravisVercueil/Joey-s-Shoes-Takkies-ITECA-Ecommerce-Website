let openCart = document.querySelector('.shop');
let closeCart = document.querySelector('.closeCart');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openCart.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeCart.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'Nike Running Shoes',
        image: 'nike_running.jpg',
        price: 1299
    },
    {
        id: 2,
        name: 'Nike BasketBall Shoes',
        image: 'nike_basketball.jpg',
        price: 1500
    },
    {
        id: 3,
        name: 'Adidas Sneakers',
        image: '1.jpg',
        price: 999
    },
    {
        id: 4,
        name: 'Adidas Soccer Cleats',
        image: 'adidas_soccer.jpg',
        price: 1899
    },
    {
        id: 5,
        name: 'Puma Lifestyle Shoes',
        image: 'puma_lifestyle.jpg',
        price: 899
    },
    {
        id: 6,
        name: 'Puma Training Shoes',
        image: 'puma_training.jpg',
        price: 1199
    }
];
let listCarts  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCarts[key] == null){
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity = 1;
    }
    reloadCart();
}
// Reload Cart Function that will refresh the cart everytime it gets added / removed from the cart
function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    reloadCart();
}