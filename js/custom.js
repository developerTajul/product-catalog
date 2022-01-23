const filterInput = document.querySelector('#filter');
const productsList = document.querySelector('.collection');
const productName = document.querySelector('.product-name');
const productPrice = document.querySelector('.product-price');
const productAdd = document.querySelector('.add-product');
const productdelete = document.querySelector('.delete-product');

// data / state
const productData = [
    {
        id: 0,
        name: 'Alu',
        price: 20 
    },
    {
        id: 0,
        name: 'Alu',
        price: 20 
    },
    {
        id: 0,
        name: 'Alu',
        price: 20 
    }
]

console.log( productData );