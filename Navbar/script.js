let addCart = document.getElementsByClassName('btn-add')
let clickCount = 0

for (let i = 0; i < addCart.length; ++i) {
    let button = addCart[i]
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target
        clickCount++
        console.log(clickCount)
        document.getElementById('cart-basket').innerHTML = clickCount
    })
 
}

let removeCart = document.getElementsByClassName('btn-remove')

for (let i = 0; i < removeCart.length; ++i) {
    let button = removeCart[i]
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target
        clickCount--
        console.log(clickCount)
        document.getElementById('cart-basket').innerHTML = clickCount
    })
 
}

