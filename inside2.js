let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'Pochampally silk saree',
        image: 'pocham1.png',
        price: 12000
    },
    {
        id: 2,
        name: 'Tagged Pochampally silk',
        image: 'pocham2.png',
        price: 15000
    },
    {
        id: 3,
        name: 'Pochampally silk saree',
        image: 'pocham3.png',
        price: 22000
    },
    {
        id: 4,
        name: 'Tagged Pochampally silk',
        image: 'pochampally.png',
        price: 123000
    },
    {
        id: 5,
        name: 'Pochampally silk saree',
        image: 'pocham5.png',
        price: 320000
    },
    {
        id: 6,
        name: 'Pochampally silk saree',
        image: 'pocham6.png',
        price: 120000
    }
];

let listCards = [];

// function initApp() {
//     products.forEach((value, key) => {
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//             <img src="${value.image}" alt="${value.name}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Add To Cart</button>`;
//         list.appendChild(newDiv);
//     });
// }

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}" alt="${value.name}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>
            <a href="product-details.html?id=${value.id}">View Details</a>`;  // Add this line
        list.appendChild(newDiv);
    });
}

initApp();


initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        // Copy product from list to list card
        listCards[key] = { ...products[key], quantity: 1 };
    } else {
        // Increase the quantity if it already exists in the cart
        listCards[key].quantity += 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        if (value != null) {
            let itemTotalPrice = value.price * value.quantity;
            totalPrice += itemTotalPrice;
            count += value.quantity;
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}" alt="${value.name}"></div>
                <div>${value.name}</div>
                <div>${itemTotalPrice.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, qty) {
    if (qty === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = qty;
    }
    reloadCard();
}









// function initApp() {
//     products.forEach((value, key) => {
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//             <img src="${value.image}" alt="${value.name}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Add To Cart</button>
//             <a href="product-details.html?id=${value.id}">View Details</a>`;  // Add this line
//         list.appendChild(newDiv);
//     });
// }

// initApp();

