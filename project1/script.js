//UI elements
let productButtons = document.querySelectorAll('#add-to-cart');
let cartBody = document.querySelector('.cart-body');

//Event listener on product buttons
for (let i=0;i<productButtons.length;i++){
    productButtons[i].addEventListener('click',addToCart);
}

//Functions
function addToCart(e){
    let row = e.target.parentElement.parentElement;
    let finalRow = document.createElement('tr');
    for (let i=1;i<row.children.length-1;i++){
        let x = finalRow.appendChild(document.createElement('td'));
        x.innerText = row.children[i].textContent;
    }
    let cartButton = document.createElement('td');
    cartButton.innerHTML = '<button id="remove-from-cart">Remove from cart</button>';
    finalRow.appendChild(cartButton);
    cartBody.appendChild(finalRow);
    //Event listener on cart button
    cartButton.addEventListener('click',removeFromCart);
}
function removeFromCart(e){
    let row = e.target.parentElement.parentElement;
    row.innerHTML = '';    
}

    