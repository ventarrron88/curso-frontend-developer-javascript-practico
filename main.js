const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const productCardContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}



const productList = [];
const productName=['Bike','Laptop','Xbox','Bike','Laptop','Xbox','Bike','Laptop','Xbox'];
const productPrice=['$120,00','$520,00','$1020,00','$120,00','$520,00','$1020,00','$120,00','$520,00','$1020,00'];

for (let index = 0; index < productName.length; index++) {
    productList.push({
        name:productName[index],
        image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price:productPrice[index]
    })
    
}

for(product of productList){
    const productCard=document.createElement('div');
    productCard.classList.add('product-card');
    const img=document.createElement('img');
    img.src=product.image;
    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');
    const productInfoDiv=document.createElement('div');
    const productPrice=document.createElement('p');
    productPrice.innerText=product.price;
    const productName=document.createElement('p');
    productName.innerText=product.name;
    const productInfoFigure=document.createElement('figure');
    const imgFigure=document.createElement('img');
    imgFigure.src='./icons/bt_add_to_cart.svg';
    
    productInfoFigure.appendChild(imgFigure);

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    productCardContainer.appendChild(productCard);
}