const filterInput = document.querySelector('#filter');
const productsListUL = document.querySelector('.collection');
const productName = document.querySelector('.product-name');
const productPrice = document.querySelector('.product-price');
const productAdd = document.querySelector('.add-product');
const productdelete = document.querySelector('.delete-product');

const msg = document.querySelector('.msg');

// data / state
let productData = [
    /*
    {
        id: 0,
        name: 'Alu',
        price: 20
    },
    {
        id: 1,
        name: 'Potol',
        price: 25
    },
    {
        id: 2,
        name: 'Fish',
        price: 30
    }
    */
];

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

    let id;
    if(productData.length === 0){
        id = 0;
    }else{
        id = productData[productData.length-1].id + 1;
    }

    if(name === '' || price === '' || !(!isNaN(parseFloat(price))) && isFinite(Price)){
        alert("Please insert valid data");
    }else{
        productData.push({
            id,
            name,
            price 
        }); 
        productsListUL.innerHTML = '';
        getData(productData);

        productName.value = "";
        productPrice.value = "";
    }
   
});



/**
 * deleting item
 */
 productsListUL.addEventListener('click', (e)=>{
    //  console.log(e.target.classList.contains('delete-product'));
     if(e.target.classList.contains('delete-product')){
        // remove item from display 
        const target = e.target.parentElement;
        e.target.parentElement.parentElement.removeChild(target);

        // remove item from store
        let id = Number(target.id.split('-')[1]);

        const result = productData.filter( (e) => {
            return e.id !== id;
        });

        productData = result;
        
     }

 } );

/** 
filterInput.addEventListener('keyup', (e)=>{
    const text = e.target.value;
    document.querySelectorAll('.collection .collection-item').forEach( item => {
        const productName = item.firstElementChild.textContent.toLowerCase();
        if (productName.indexOf(text) === -1) {
          // showMessage(null, true);
        //   showMessage('NO item Meet your criteria');
          item.style.display = 'none';
        } else {
          msg.innerHTML = '';
          item.style.display = 'block';
        }
    });

}); 
*/

filterInput.addEventListener('keyup', (e)=>{
    const text = e.target.value.toLowerCase();
    const items = document.querySelectorAll('.collection .collection-item');
    items.forEach((item) => {
        const producterName = item.firstElementChild.textContent.toLowerCase();
        if( producterName.indexOf(text) === -1){
            item.style.display = 'none';
        }else{
            item.style.display = 'block';
        }
    });
});

