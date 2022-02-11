//declaring static field and assigning PRODUCT_CATALOG to the local storage values
const TAX = .05;
let PRODUCT_CATALOG = JSON.parse(localStorage.getItem('PRODUCT_CATALOG')) || [];
const shoppingCart = new Array();

function addToCatalog(){
    //parse any JSON previously store in PRODUCT_CATALOG
    let existingEntries = JSON.parse(localStorage.getItem("PRODUCT_CATALOG")) || [];
    let name = prompt("Enter product name");
    let price = prompt("Enter product price");
    if(name != null & price != null){
        let entry = {
            "name": name,
            "price": price
        };
        existingEntries.push(entry);
        localStorage.setItem("PRODUCT_CATALOG", JSON.stringify(existingEntries));
    }
}

//work on implementing this method
function removeFromCatalog(){
    let existingEntries = JSON.parse(localStorage.getItem('PRODUCT_CATALOG')) || [];
    let name = prompt('Enter product name for removal: ');
    for(let i = 0; i < existingEntries.length; i++){
        if(existingEntries[i] === null){
            continue;
        }
        else if(existingEntries[i].name === name) {
            existingEntries.splice(i, 1);
        }
    }
    localStorage.setItem("PRODUCT_CATALOG", JSON.stringify(existingEntries));
}

function printCatalog(){
    alert(localStorage.getItem('PRODUCT_CATALOG'))
}

function addToCart(name){
    let existingProducts = JSON.parse(localStorage.getItem('PRODUCT_CATALOG'));
    for(let i = 0; i < existingProducts.length; i++) {
        if(name === existingProducts[i].name){
            shoppingCart.push(existingProducts[i]);
        }
    }
}

function removeFromCart(name){
    for(let i = 0; i < shoppingCart.length; i++){
        if(name === shoppingCart[i].name){
            delete shoppingCart[i];
        }
    }
}

function calculateItemsInCart(){
    return "Items in Cart: " + shoppingCart.length;
}

function calculateTotalNoTax(){
    let total = 0;
    for(let i = 0; i < shoppingCart.length; i++){
        total += parseFloat(shoppingCart[i].price);
    }
    return "Cost of items: " +  total.toFixed(2);
}

function calculateTax(){
    let total = 0;
    for(let i = 0; i < shoppingCart.length; i++){
        total += parseFloat(shoppingCart[i].price);
    }
    let taxTotal = total * TAX;
    return "tax: " + taxTotal.toFixed(2);
}


function calculateTotal(){
    let total = 0;
    for(let i = 0; i < shoppingCart.length; i++){
        total += parseFloat(shoppingCart[i].price);
    }
    total += (total * TAX);
    return "total cost: " + total.toFixed(2);
}
