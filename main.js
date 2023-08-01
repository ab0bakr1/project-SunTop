const buttonNav =document.querySelectorAll('[data-btn-nav]'),
        sidebar  =document.querySelector('[data-navbar]'),
        buttonCart =document.querySelectorAll('[data-btn-cart]'),
        cart =document.querySelector('[data-cart]')
        overlay =document.querySelector('[data-overlay]');

for (const btn of buttonNav){
    btn.addEventListener('click',()=>{
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    })
};
for (const btn of buttonCart){
    btn.addEventListener('click',()=>{
        cart.classList.toggle("active");
    })
}
let goods=document.querySelector('.goods');
let listCart =document.querySelector('.list-cart');
let body =document.querySelector('body');
let total =document.querySelector('.total');
let cartNumber=document.querySelector('.cart-number');
let products =[
    {
        id:1,
        name:'<span class="yallw">suntop</span> 350ml',
        Image:'350ml.png',
        Number:24,
        price: 30
    },
    {
        id:2,
        name:'<span class="yallw">suntop</span> 250ml',
        Image:'250.png',
        Number:20,
        price: 25
    },
    {
        id:3,
        name:'<span class="yallw">suntop</span> 650ml',
        Image:'4.png',
        Number:18,
        price: 50
    },
    {
        id:4,
        name:'<span class="yallw">suntop</span> 120ml',
        Image:'100.png',
        Number:10,
        price: 14
    },
    {
        id:5,
        name:'<span class="yallw">suntop</span> 150ml',
        Image:'150.png',
        Number:30,
        price: 24
    },
    {
        id:6,
        name:'<span class="yallw">suntop</span> 1L',
        Image:'1L.webp',
        Number:12,
        price: 65
    }
];
let listCarts =[];
function initApp(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.innerHTML=`
            <img  class="img-goods" src="${value.Image}"/>
            <div class="text-goods">
                <div class="title-goods m-1"> ${value.name}</div>
                <div class="number-goods m-1"><span class="black">number</span> ${value.Number}</div>
            </div>    
            <div class="price-goods p-1"><span class="black">price</span>: ${value.price} R.S</div>
            <button class="button-goods p-1 w-100" onclick="addToCart(${key})"><span class="black position-relative">add to cart</span></button>
            `;
        goods.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCarts[key] ==null){
        listCarts[key] = products[key];
        listCarts[key].cartNumber=1;
    }
    reloadcart();
}
function reloadcart(){
    listCart.innerHTML='';
    let count =0;
    let totalPrice =0;
    listCarts.forEach((value,key)=>{
        totalPrice=totalPrice+value.price;
        count=count+value.cartNumber;
        
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML=`
                <img class="img-listcart"src="${value.Image}"></img>
                <div class="item-listcart">
                    <div class="title-listcart">${value.name}</div>
                    <div class="price-listcart">${value.price.toLocaleString()} R.S</div>
                    <div class="number-goods">${value.Number}</div>
                </div>
                <div class="counter-listcart">
                    <button class="button-listcart" onclick="changeNumber(${key},${value.cartNumber-1})">-</button>
                    <div class="count-listcart">${value.cartNumber}</div>
                    <button class="button-listcart" onclick="changeNumber(${key},${value.cartNumber+1})">+</button>
                </div>
            `;
            listCart.appendChild(newDiv);
        }
    })
    total.innerText =totalPrice.toLocaleString();
    cartNumber.innerText=count;
}
function changeNumber(key,cartNumber){
    if(cartNumber == 0){
        delete listCarts[key];
    }else{
        listCarts[key].cartNumber = cartNumber ;
        listCarts[key].price=cartNumber*products[key].price;
    };
    reloadcart();
}
function validate(){
    let nameContact = document.getElementById("name").value;
    let phoneContact = document.getElementById("phone").value;
    let emailContact = document.getElementById("email").value;
    let messageContact = document.getElementById("message").value;
    let errorMessageContact = document.getElementById("error-message");

    errorMessageContact.style.padding="10px"

    let text;
    if(nameContact.length < 5){
        text ="Please Enter valid Name";
        errorMessageContact.innerHTML=text;
        return false;
    }
    if(isNaN(phoneContact) || phoneContact.length !=10){
        text ="Please Enter valid Phone Number";
        errorMessageContact.innerHTML=text;
        return false;
    }
    if(messageContact.length <= 200){
        text ="Please Enter More Than 140 Characters";
        errorMessageContact.innerHTML=text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true
}