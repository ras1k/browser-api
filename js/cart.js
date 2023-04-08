const addProduct = () =>{
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const product = productName.value;
    const quantity = productQuantity.value;
    productName.value = '';
    productQuantity.value = '';
    console.log(product, quantity);
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);

}

const displayProduct = (product, quantity) =>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;

    ul.appendChild(li);
}

const getStoredShoppingCard = () =>{
    let cart ={};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}
const saveProductToLocalStorage = (product, quantity) =>{
    const cart = getStoredShoppingCard();
    cart[product] = quantity;
    console.log(cart);
    const cardStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cardStringified);

}

const showFromLocalStorage = () =>{
    const savedDraft = getStoredShoppingCard();
    console.log(savedDraft);
    for (const product in savedDraft){
        const quantity = savedDraft[product];
        console.log(product, ':', quantity);
        displayProduct(product, quantity)
    }
}

showFromLocalStorage();