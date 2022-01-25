const filterInput = document.querySelector('#filter');
const productsListUL = document.querySelector('.collection');
const productName = document.querySelector('.product-name');
const productPrice = document.querySelector('.product-price');
const productAdd = document.querySelector('.add-product');
const productdelete = document.querySelector('.delete-product');

const msg = document.querySelector('.msg');

// data / state
const productData = [];

function getData( productsList ){
    if(productData.length){
        msg.style.display = "none";

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

    }else{
        msg.innerHTML = "No Products to show now!"
    }
}

getData(productData);



/**
 * adding-item
 */
productAdd.addEventListener('click', (e)=>{
    e.preventDefault();
    const name = productName.value;
    const price = productPrice.value;

    if(name === '' || price === '' || !(!isNaN(parseFloat(price))) && isFinite(Price)){
        alert("Please insert valid data");
    }else{
        productData.push({
            id: 4,
            name,
            price 
        }); 
        productsListUL.innerHTML = '';
        getData(productData);

        productName.value = "";
        productPrice.value = "";
    }
   
});



