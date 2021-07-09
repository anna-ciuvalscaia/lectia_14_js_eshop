// main script

// initialization of service
const tds = new TestDataService()

let catalog = tds.getTestProducts()
console.log("catalog>>", catalog)

let cart = new Cart(100)
cart.render("shopNavigation")

renderCatalog("root-catalog")