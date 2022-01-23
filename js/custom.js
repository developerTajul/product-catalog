const filterInput = document.querySelector('#filter');
const productsListUL = document.querySelector('.collection');
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
        id: 1,
        name: 'Potol',
        price: 30 
    },
    {
        id: 2,
        name: 'Begun',
        price: 60 
    }
]

function getData( productsList ){
    let li = "";
    productsList.forEach( (product) => {
        li = document.createElement('li');
        li.className = 'list-group-item collection-item';
        li.id = 'product-'+ product.id;
        li.innerHTML = `
        <strong class="product-name">${product.name}</strong>
		<span class="product-price">$${product.price}</span>
		<i class="far fa-trash-alt float-end delete-product"></i>
        `;
        productsListUL.appendChild(li);
    });

    
}

getData(productData);