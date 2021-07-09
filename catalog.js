// catalog module

//const catalog = 
/*[
    new Product(1, "Olive Oil", "images/olive.webp", {
        amount: 50,
        currency: "MDL"
    }),
    new Product(2, "Bread", "images/bread.jpg", {
        amount: 10,
        currency: "MDL"
    }),
    new Product(3, "Milk", "images/milk.jpg", {
        amount: 18,
        currency: "MDL"
    }),
    new Product(4, "Honey", "images/honey.webp", {
        amount: 70,
        currency: "MDL"
    }),
    new Product(5, "Ice-Cream", "images/ice-cream.jpg", {
        amount: 12,
        currency: "MDL"
    }),
    new Product(6, "Cherries", "images/cherries.webp", {
        amount: 30,
        currency: "MDL"
    }),

] */

// HW1: render catalog? apeleaza produsele
//  product --> render?  apeleaza structura clasei
const renderCatalog = (rootID) => {
  let root = document.getElementById(rootID)
  root.innerHTML = ``
  catalog.forEach( product => root.innerHTML += product.render() )

  //attach event handlers
  let btns = document.querySelectorAll('.btn-add-to-cart')

// HW3: forEach
btns.forEach( add => {
  add = addEventListener('click', cart.addProduct)
}) 
 /* for(let i=0; i < btns.length; i++) {
      btns[i].addEventListener('click', cart.addProduct)
      // btns[i].onclick = cart.addProduct
  }*/

}